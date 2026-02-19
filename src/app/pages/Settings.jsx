import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Moon, Sun, Bell, Lock, User, LogOut } from "lucide-react";

export function Settings() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("en");
    const navigate = useNavigate();

    function handleSave(e) {
        e.preventDefault();
        // persist settings - placeholder
        localStorage.setItem("settings", JSON.stringify({ notifications, darkMode, language }));
        alert("Settings saved");
    }

    function handleLogout() {
        localStorage.clear();
        navigate("/");
    }

    return /*#__PURE__*/_jsxs("div", {
        className: "p-6 max-w-3xl mx-auto",
        children: [/*#__PURE__*/_jsxs("header", {
            className: "mb-6",
            children: [/*#__PURE__*/_jsx("h1", {
                className: "text-2xl font-semibold text-gray-800",
                children: "Settings"
            }), /*#__PURE__*/_jsx("p", {
                className: "text-sm text-gray-600 mt-1",
                children: "Manage your general account preferences"
            })]
        }), /*#__PURE__*/_jsxs("form", {
            onSubmit: handleSave,
            className: "space-y-6 bg-white border border-gray-100 rounded-lg p-6 shadow-sm",
            children: [/*#__PURE__*/_jsxs("section", {
                children: [/*#__PURE__*/_jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [/*#__PURE__*/_jsxs("div", {
                        children: [/*#__PURE__*/_jsx(Bell, {
                            className: "w-5 h-5 text-gray-600"
                        }), /*#__PURE__*/_jsx("h3", {
                            className: "text-sm font-medium text-gray-800",
                            children: "Notifications"
                        })]
                    }), /*#__PURE__*/_jsxs("label", {
                        className: "inline-flex items-center gap-2",
                        children: [/*#__PURE__*/_jsx("input", {
                            type: "checkbox",
                            checked: notifications,
                            onChange: () => setNotifications(v => !v),
                            className: "rounded-md"
                        }), /*#__PURE__*/_jsx("span", {
                            className: "text-sm text-gray-600",
                            children: notifications ? "On" : "Off"
                        })]
                    })]
                }), /*#__PURE__*/_jsx("p", {
                    className: "text-xs text-gray-500 mt-2",
                    children: "Receive product updates, reminders and activity alerts."
                })]
            }), /*#__PURE__*/_jsxs("section", {
                children: [/*#__PURE__*/_jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [/*#__PURE__*/_jsxs("div", {
                        children: [/*#__PURE__*/_jsx(User, {
                            className: "w-5 h-5 text-gray-600"
                        }), /*#__PURE__*/_jsx("h3", {
                            className: "text-sm font-medium text-gray-800",
                            children: "Account"
                        })]
                    }), /*#__PURE__*/_jsxs("div", {
                        className: "text-sm text-gray-600 text-right",
                        children: [/*#__PURE__*/_jsx("div", {
                            children: "Sarah Johnson"
                        }), /*#__PURE__*/_jsx("div", {
                            className: "text-xs text-gray-400",
                            children: "sarah@example.com"
                        })]
                    })]
                }), /*#__PURE__*/_jsx("p", {
                    className: "text-xs text-gray-500 mt-2",
                    children: "Manage your account information and privacy settings from here."
                })]
            }), /*#__PURE__*/_jsxs("section", {
                children: [/*#__PURE__*/_jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [/*#__PURE__*/_jsxs("div", {
                        children: [/*#__PURE__*/_jsx(Lock, {
                            className: "w-5 h-5 text-gray-600"
                        }), /*#__PURE__*/_jsx("h3", {
                            className: "text-sm font-medium text-gray-800",
                            children: "Privacy"
                        })]
                    }), /*#__PURE__*/_jsx("div", {
                        className: "text-sm text-gray-600",
                        children: "Standard"
                    })]
                }), /*#__PURE__*/_jsx("p", {
                    className: "text-xs text-gray-500 mt-2",
                    children: "Control what information is visible to others."
                })]
            }), /*#__PURE__*/_jsxs("section", {
                children: [/*#__PURE__*/_jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [/*#__PURE__*/_jsxs("div", {
                        children: [darkMode ? /*#__PURE__*/_jsx(Moon, {
                            className: "w-5 h-5 text-gray-600"
                        }) : /*#__PURE__*/_jsx(Sun, {
                            className: "w-5 h-5 text-gray-600"
                        }), /*#__PURE__*/_jsx("h3", {
                            className: "text-sm font-medium text-gray-800",
                            children: "Appearance"
                        })]
                    }), /*#__PURE__*/_jsxs("label", {
                        className: "inline-flex items-center gap-2",
                        children: [/*#__PURE__*/_jsx("input", {
                            type: "checkbox",
                            checked: darkMode,
                            onChange: () => setDarkMode(d => !d),
                            className: "rounded-md"
                        }), /*#__PURE__*/_jsx("span", {
                            className: "text-sm text-gray-600",
                            children: darkMode ? "Dark" : "Light"
                        })]
                    })]
                }), /*#__PURE__*/_jsx("p", {
                    className: "text-xs text-gray-500 mt-2",
                    children: "Toggle light or dark theme."
                })]
            }), /*#__PURE__*/_jsxs("section", {
                children: [/*#__PURE__*/_jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [/*#__PURE__*/_jsx("div", {
                        children: [/*#__PURE__*/_jsx("h3", {
                            className: "text-sm font-medium text-gray-800",
                            children: "Language"
                        }), /*#__PURE__*/_jsx("p", {
                            className: "text-xs text-gray-500 mt-1",
                            children: "Preferred language"
                        })]
                    }), /*#__PURE__*/_jsx("select", {
                        value: language,
                        onChange: e => setLanguage(e.target.value),
                        className: "border border-gray-200 rounded-md px-3 py-2 text-sm",
                        children: [/*#__PURE__*/_jsx("option", {
                            value: "en",
                            children: "English"
                        }), /*#__PURE__*/_jsx("option", {
                            value: "es",
                            children: "Spanish"
                        })]
                    })]
                }), /*#__PURE__*/_jsx("div", {
                    className: "flex items-center justify-between mt-6",
                    children: /*#__PURE__*/_jsxs("div", {
                        className: "flex gap-3",
                        children: [/*#__PURE__*/_jsx("button", {
                            type: "submit",
                            className: "px-4 py-2 bg-emerald-600 text-white rounded-md text-sm font-medium",
                            children: "Save changes"
                        }), /*#__PURE__*/_jsx("button", {
                            type: "button",
                            onClick: handleLogout,
                            className: "px-4 py-2 border border-gray-200 rounded-md text-sm text-gray-700 flex items-center gap-2",
                            children: [/*#__PURE__*/_jsx(LogOut, {
                                className: "w-4 h-4"
                            }), "Log out"]
                        })]
                    })
                })]
            })]
        })]
    });
}

export default Settings;
