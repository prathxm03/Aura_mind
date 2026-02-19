import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router";
import { motion } from "motion/react";
import { Heart, Sparkles, Eye, EyeOff, User, Mail, Lock, Camera } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const fileRef = useRef(null);

    const [mode, setMode] = useState("login"); // "login" | "register"
    const [showPass, setShowPass] = useState(false);
    const [preview, setPreview] = useState(null);
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");

    function handlePhotoChange(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => setPreview(ev.target.result);
        reader.readAsDataURL(file);
    }

    function getInitials(name) {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError("");

        if (mode === "register") {
            if (!form.name.trim()) { setError("Please enter your name."); return; }
            if (!form.email.trim()) { setError("Please enter your email."); return; }
            if (form.password.length < 6) { setError("Password must be at least 6 characters."); return; }
            const userData = { name: form.name.trim(), email: form.email.trim(), photo: preview };
            login(userData);
            navigate("/");
        } else {
            // Simple login — check localStorage for existing user
            if (!form.email.trim() || !form.password) { setError("Please fill in all fields."); return; }
            try {
                const stored = localStorage.getItem("auramind_user");
                const existing = stored ? JSON.parse(stored) : null;
                if (existing && existing.email === form.email.trim()) {
                    login(existing);
                    navigate("/");
                } else {
                    setError("No account found. Please register first.");
                }
            } catch {
                setError("Something went wrong. Please try again.");
            }
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#d1fae5] via-[#e0f2fe] to-[#ede9fe] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-[#10B981] to-[#059669] p-8 text-center">
                    <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex w-16 h-16 bg-white/20 rounded-2xl items-center justify-center shadow-lg mb-4"
                    >
                        <Heart className="w-9 h-9 text-white" fill="white" />
                    </motion.div>
                    <h1 className="text-2xl font-bold text-white">AuraMind</h1>
                    <div className="flex items-center justify-center gap-1 mt-1 text-emerald-100 text-sm">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>AI-Powered Mental Wellness</span>
                    </div>
                </div>

                {/* Tab switcher */}
                <div className="flex border-b border-gray-100">
                    {["login", "register"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => { setMode(tab); setError(""); }}
                            className={`flex-1 py-3.5 text-sm font-semibold transition-colors capitalize ${mode === tab
                                    ? "text-[#10B981] border-b-2 border-[#10B981]"
                                    : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            {tab === "login" ? "Sign In" : "Create Account"}
                        </button>
                    ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    {/* Photo upload – register only */}
                    {mode === "register" && (
                        <div className="flex flex-col items-center gap-3">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                onClick={() => fileRef.current?.click()}
                                className="relative w-20 h-20 rounded-full cursor-pointer overflow-hidden bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-lg"
                            >
                                {preview ? (
                                    <img src={preview} alt="photo" className="w-full h-full object-cover" />
                                ) : form.name ? (
                                    <span className="text-white text-xl font-bold">{getInitials(form.name)}</span>
                                ) : (
                                    <User className="w-8 h-8 text-white/80" />
                                )}
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                    <Camera className="w-6 h-6 text-white" />
                                </div>
                            </motion.div>
                            <p className="text-xs text-gray-400">Click to upload profile photo (optional)</p>
                            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                        </div>
                    )}

                    {/* Name – register only */}
                    {mode === "register" && (
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10B981]/30 focus:border-[#10B981] transition-all"
                            />
                        </div>
                    )}

                    {/* Email */}
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10B981]/30 focus:border-[#10B981] transition-all"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type={showPass ? "text" : "password"}
                            placeholder="Password"
                            value={form.password}
                            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                            className="w-full pl-11 pr-12 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10B981]/30 focus:border-[#10B981] transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPass((s) => !s)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>

                    {error && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-sm text-red-500 bg-red-50 rounded-lg px-4 py-2.5"
                        >
                            {error}
                        </motion.p>
                    )}

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-200"
                    >
                        {mode === "login" ? "Sign In" : "Create Account"}
                    </motion.button>

                    {mode === "login" && (
                        <p className="text-center text-xs text-gray-400">
                            Don't have an account?{" "}
                            <button type="button" onClick={() => setMode("register")} className="text-[#10B981] font-semibold hover:underline">
                                Register here
                            </button>
                        </p>
                    )}
                </form>
            </motion.div>
        </div>
    );
}
