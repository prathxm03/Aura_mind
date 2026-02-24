const fs = require("fs");
const path = require("path");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const dotenv = require("dotenv");

dotenv.config();

// Ensure JWT secret exists
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

/* =====================================================
   MULTER CONFIGURATION
===================================================== */

// Ensure upload directory exists
const uploadDir = path.join(__dirname, "../../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + file.originalname.replace(/\s+/g, "-");
    cb(null, uniqueName);
  },
});

// Allow only image files
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
});

/* =====================================================
   CREATE USER
===================================================== */

const CreateUser = async (req, res) => {
  try {
    const { name, email, password ,role} = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields (name, email, password) are required",
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }


    // Avatar (optional)
    
    const avatar = `/upload/${req.file.filename}`;

    // Create user
    const newUser = await User.create({
      name,
      email,
      role,
      password,
      avatar,
    });

    // Generate JWT
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    // Remove password before sending response
    const userWithoutPassword = newUser.toObject();
    delete userWithoutPassword.password;

    res.status(201).json({
      message: "User created successfully",
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    console.error("CreateUser Error:", error.message);
    res.status(500).json({
      message: error.message || "Server error",
    });
  }
};

/* =====================================================
   LOGIN USER
===================================================== */

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }


    if (password !== user.password) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "78h" },
    );

    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.status(200).json({
      message: "Login successful",
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    console.error("loginUser Error:", error.message);
    res.status(500).json({
      message: error.message || "Server error",
    });
  }
};


const getUserProfile = async (req, res) => {
  try {
    const user = await User.find();

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "user data retrieved successfully",
      user,
    });
  } catch (error) {
    console.error("get User data Error:", error.message);
    res.status(500).json({
      message: error.message || "Server error",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming auth middleware sets req.user
    const updates = req.body;

    // If password is being updated, validate it
    if (updates.password && updates.password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
    }

    // Handle avatar update if file uploaded
    if (req.file) {
      updates.avatar = `/uploads/${req.file.filename}`;

      // Delete old avatar if exists
      const oldUser = await User.findById(userId);
      if (oldUser && oldUser.avatar) {
        const oldAvatarPath = path.join(__dirname, "../..", oldUser.avatar);
        if (fs.existsSync(oldAvatarPath)) {
          fs.unlinkSync(oldAvatarPath);
        }
      }
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("updateUser Error:", error.message);
    res.status(500).json({
      message: error.message || "Server error",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming auth middleware sets req.user

    // Get user to delete avatar
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Delete avatar file if exists
    if (user.avatar) {
      const avatarPath = path.join(__dirname, "../..", user.avatar);
      if (fs.existsSync(avatarPath)) {
        fs.unlinkSync(avatarPath);
      }
    }

    // Delete user from database
    await User.findByIdAndDelete(userId);

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("deleteUser Error:", error.message);
    res.status(500).json({
      message: error.message || "Server error",
    });
  }
};

module.exports = {
  CreateUser,
  loginUser,
  getUserProfile,
  updateUser,
  deleteUser,
  upload,
};
