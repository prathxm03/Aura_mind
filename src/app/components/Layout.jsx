import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { LayoutDashboard, MessageSquare, Heart, TrendingUp, Users, Video, Lightbulb, Settings, AlertCircle, Search, Bell, ChevronRight, Sparkles, LogIn } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function getInitials(name) {
  if (!name) return "VT";
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "AI Assistant", href: "/ai-assistant", icon: MessageSquare },
  { name: "Relief Hub", href: "/relief-hub", icon: Heart },
  { name: "Mood Analytics", href: "/mood-analytics", icon: TrendingUp },
  { name: "Patients", href: "/doctor-dashboard", icon: Users },
  { name: "Consultations", href: "/request-support", icon: Video },
  { name: "Insights", href: "/mood-analytics", icon: Lightbulb },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isHovered, setIsHovered] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const DEFAULT_NAME = "Virendra Thakur";
  const displayName = user?.name || DEFAULT_NAME;
  const displayInitials = user ? getInitials(user.name) : getInitials(DEFAULT_NAME);
  const displayPhoto = user?.photo || null;

  function handleLogout() {
    logout();
    setShowProfile(false);
    navigate("/login");
  }

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-72 bg-white border-r border-[#E2E8F0] flex flex-col shadow-sm"
      >
        {/* Brand */}
        <div className="h-20 flex items-center px-6 border-b border-[#E2E8F0] bg-gradient-to-r from-[#F0FDF4] to-white">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20"
            >
              <Heart className="w-6 h-6 text-white" fill="white" />
            </motion.div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent">
                AuraMind
              </span>
              <div className="flex items-center gap-1 text-xs text-[#64748B]">
                <Sparkles className="w-3 h-3" />
                <span>AI Powered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navigation.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <motion.div
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                onHoverStart={() => setIsHovered(item.name)}
                onHoverEnd={() => setIsHovered(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 relative overflow-hidden group ${isActive
                    ? "bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-lg shadow-emerald-500/30"
                    : "text-[#64748B] hover:bg-[#F8FAFC]"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#059669]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="flex items-center gap-3 relative z-10">
                    <motion.div
                      animate={{ scale: isActive ? 1.1 : 1, rotate: isHovered === item.name ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  {isHovered === item.name && !isActive && (
                    <motion.div
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="relative z-10"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Daily Insight */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-4 mb-4 p-4 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-xl border border-[#BFDBFE]"
        >
          <div className="text-xs font-medium text-[#1E40AF] mb-1"> Daily Insight</div>
          <p className="text-xs text-[#64748B] leading-relaxed">
            "Progress, not perfection. Every small step counts."
          </p>
        </motion.div>

        {/* Emergency SOS */}
        <div className="p-4 border-t border-[#E2E8F0]">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white px-4 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-200 font-semibold"
          >
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
              <AlertCircle className="w-5 h-5" />
            </motion.div>
            <span>Emergency SOS</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="h-20 bg-white/80 backdrop-blur-lg border-b border-[#E2E8F0] flex items-center justify-between px-8 shadow-sm"
        >
          {/* Search */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
              <input
                type="text"
                placeholder="Search patients, insights, exercises..."
                className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:border-[#10B981] transition-all duration-200"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Bell */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-3 hover:bg-[#F8FAFC] rounded-xl transition-colors"
            >
              <Bell className="w-5 h-5 text-[#64748B]" />
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#EF4444] rounded-full ring-2 ring-white"
              />
            </motion.button>

            {/* User area */}
            <div className="flex items-center gap-3 pl-4 border-l border-[#E2E8F0] relative">
              {!user ? (
                /* Not logged in — Login button */
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/login"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-200"
                  >
                    <LogIn className="w-4 h-4" />
                    Login
                  </Link>
                </motion.div>
              ) : (
                /* Logged in — name + avatar */
                <>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-[#0F172A]">{displayName}</div>
                    <div className="flex items-center gap-1.5 text-xs text-[#10B981] justify-end">
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-1.5 h-1.5 bg-[#10B981] rounded-full"
                      />
                      <span>Active Now</span>
                    </div>
                  </div>
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setShowProfile((s) => !s)}
                      className="w-11 h-11 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 cursor-pointer overflow-hidden"
                    >
                      {displayPhoto ? (
                        <img src={displayPhoto} alt={displayName} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-white text-sm font-semibold">{displayInitials}</span>
                      )}
                    </motion.div>
                    {showProfile && (
                      <div className="absolute right-0 top-14 w-48 bg-white border border-gray-100 rounded-lg shadow-lg p-2 z-50">
                        <div className="px-3 py-2 border-b border-gray-100 mb-1">
                          <p className="text-sm font-semibold text-gray-800 truncate">{displayName}</p>
                          {user?.email && (
                            <p className="text-xs text-gray-400 truncate">{user.email}</p>
                          )}
                        </div>
                        <Link
                          to="/settings"
                          onClick={() => setShowProfile(false)}
                          className="block px-3 py-2 text-sm text-gray-700 rounded hover:bg-gray-50"
                        >
                          Settings
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-3 py-2 text-sm text-red-600 rounded hover:bg-gray-50 flex items-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" />
                          </svg>
                          Log out
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.header>

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
