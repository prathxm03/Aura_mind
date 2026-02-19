import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { UserCircle, Phone, MessageSquare, Video, Calendar } from "lucide-react";
export function RequestSupport() {
  const [formData, setFormData] = useState({
    name: "",
    emotionalState: "",
    issueCategory: "",
    urgency: "",
    contactMethod: "",
    description: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "p-8 max-w-4xl mx-auto",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "mb-8",
      children: [/*#__PURE__*/_jsx("h1", {
        className: "text-3xl font-semibold text-[#0F172A] mb-2",
        children: "Request Professional Support"
      }), /*#__PURE__*/_jsx("p", {
        className: "text-[#64748B]",
        children: "Connect with a licensed mental health professional. We'll match you with the right specialist for your needs."
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-4",
        children: [/*#__PURE__*/_jsx(Calendar, {
          className: "w-5 h-5 text-[#10B981] mb-2"
        }), /*#__PURE__*/_jsx("div", {
          className: "text-sm font-medium text-[#0F172A] mb-1",
          children: "Quick Response"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-xs text-[#64748B]",
          children: "Get matched within 24 hours"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-4",
        children: [/*#__PURE__*/_jsx(UserCircle, {
          className: "w-5 h-5 text-[#3B82F6] mb-2"
        }), /*#__PURE__*/_jsx("div", {
          className: "text-sm font-medium text-[#0F172A] mb-1",
          children: "Licensed Professionals"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-xs text-[#64748B]",
          children: "Verified therapists & counselors"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "bg-[#F5F3FF] border border-[#DDD6FE] rounded-lg p-4",
        children: [/*#__PURE__*/_jsx(MessageSquare, {
          className: "w-5 h-5 text-[#8B5CF6] mb-2"
        }), /*#__PURE__*/_jsx("div", {
          className: "text-sm font-medium text-[#0F172A] mb-1",
          children: "Confidential"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-xs text-[#64748B]",
          children: "HIPAA compliant & secure"
        })]
      })]
    }), /*#__PURE__*/_jsxs("form", {
      onSubmit: handleSubmit,
      className: "bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm space-y-6",
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("label", {
          className: "block text-sm font-medium text-[#0F172A] mb-2",
          children: "Full Name"
        }), /*#__PURE__*/_jsx("input", {
          type: "text",
          name: "name",
          value: formData.name,
          onChange: handleChange,
          placeholder: "Enter your full name",
          className: "w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent",
          required: true
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("label", {
          className: "block text-sm font-medium text-[#0F172A] mb-2",
          children: "Current Emotional State"
        }), /*#__PURE__*/_jsxs("select", {
          name: "emotionalState",
          value: formData.emotionalState,
          onChange: handleChange,
          className: "w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent",
          required: true,
          children: [/*#__PURE__*/_jsx("option", {
            value: "",
            children: "Select your current state"
          }), /*#__PURE__*/_jsx("option", {
            value: "calm",
            children: "Calm"
          }), /*#__PURE__*/_jsx("option", {
            value: "anxious",
            children: "Anxious"
          }), /*#__PURE__*/_jsx("option", {
            value: "stressed",
            children: "Stressed"
          }), /*#__PURE__*/_jsx("option", {
            value: "depressed",
            children: "Depressed"
          }), /*#__PURE__*/_jsx("option", {
            value: "overwhelmed",
            children: "Overwhelmed"
          }), /*#__PURE__*/_jsx("option", {
            value: "crisis",
            children: "In Crisis"
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("label", {
          className: "block text-sm font-medium text-[#0F172A] mb-2",
          children: "Primary Concern"
        }), /*#__PURE__*/_jsxs("select", {
          name: "issueCategory",
          value: formData.issueCategory,
          onChange: handleChange,
          className: "w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent",
          required: true,
          children: [/*#__PURE__*/_jsx("option", {
            value: "",
            children: "Select issue category"
          }), /*#__PURE__*/_jsx("option", {
            value: "anxiety",
            children: "Anxiety & Panic"
          }), /*#__PURE__*/_jsx("option", {
            value: "depression",
            children: "Depression"
          }), /*#__PURE__*/_jsx("option", {
            value: "stress",
            children: "Stress Management"
          }), /*#__PURE__*/_jsx("option", {
            value: "trauma",
            children: "Trauma & PTSD"
          }), /*#__PURE__*/_jsx("option", {
            value: "relationships",
            children: "Relationship Issues"
          }), /*#__PURE__*/_jsx("option", {
            value: "grief",
            children: "Grief & Loss"
          }), /*#__PURE__*/_jsx("option", {
            value: "addiction",
            children: "Addiction"
          }), /*#__PURE__*/_jsx("option", {
            value: "other",
            children: "Other"
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("label", {
          className: "block text-sm font-medium text-[#0F172A] mb-2",
          children: "Urgency Level"
        }), /*#__PURE__*/_jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-4 gap-3",
          children: [{
            value: "low",
            label: "Low",
            color: "border-[#E2E8F0] hover:border-[#10B981]"
          }, {
            value: "medium",
            label: "Medium",
            color: "border-[#E2E8F0] hover:border-[#F59E0B]"
          }, {
            value: "high",
            label: "High",
            color: "border-[#E2E8F0] hover:border-[#EF4444]"
          }, {
            value: "urgent",
            label: "Urgent",
            color: "border-[#E2E8F0] hover:border-[#DC2626]"
          }].map(option => /*#__PURE__*/_jsxs("label", {
            className: `flex items-center justify-center px-4 py-3 border ${option.color} rounded-lg cursor-pointer transition-colors ${formData.urgency === option.value ? "bg-[#F0FDF4] border-[#10B981] text-[#10B981]" : "bg-white text-[#64748B]"}`,
            children: [/*#__PURE__*/_jsx("input", {
              type: "radio",
              name: "urgency",
              value: option.value,
              checked: formData.urgency === option.value,
              onChange: handleChange,
              className: "sr-only",
              required: true
            }), /*#__PURE__*/_jsx("span", {
              className: "text-sm font-medium",
              children: option.label
            })]
          }, option.value))
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("label", {
          className: "block text-sm font-medium text-[#0F172A] mb-2",
          children: "Preferred Contact Method"
        }), /*#__PURE__*/_jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-3",
          children: [{
            value: "video",
            label: "Video Call",
            icon: Video
          }, {
            value: "phone",
            label: "Phone Call",
            icon: Phone
          }, {
            value: "message",
            label: "Messaging",
            icon: MessageSquare
          }].map(option => /*#__PURE__*/_jsxs("label", {
            className: `flex flex-col items-center justify-center px-4 py-4 border rounded-lg cursor-pointer transition-colors ${formData.contactMethod === option.value ? "bg-[#F0FDF4] border-[#10B981] text-[#10B981]" : "bg-white border-[#E2E8F0] text-[#64748B] hover:border-[#10B981]"}`,
            children: [/*#__PURE__*/_jsx("input", {
              type: "radio",
              name: "contactMethod",
              value: option.value,
              checked: formData.contactMethod === option.value,
              onChange: handleChange,
              className: "sr-only",
              required: true
            }), /*#__PURE__*/_jsx(option.icon, {
              className: "w-6 h-6 mb-2"
            }), /*#__PURE__*/_jsx("span", {
              className: "text-sm font-medium",
              children: option.label
            })]
          }, option.value))
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("label", {
          className: "block text-sm font-medium text-[#0F172A] mb-2",
          children: "Tell us more about your situation (Optional)"
        }), /*#__PURE__*/_jsx("textarea", {
          name: "description",
          value: formData.description,
          onChange: handleChange,
          placeholder: "Share any additional details that might help us match you with the right professional...",
          rows: 4,
          className: "w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent resize-none"
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "bg-[#FEF2F2] border border-[#FEE2E2] rounded-lg p-4",
        children: /*#__PURE__*/_jsxs("p", {
          className: "text-sm text-[#991B1B]",
          children: [/*#__PURE__*/_jsx("strong", {
            children: "If you're in crisis or having thoughts of self-harm:"
          }), " Please call the National Suicide Prevention Lifeline at 988 or use the Emergency SOS button for immediate help."]
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: "flex gap-4",
        children: [/*#__PURE__*/_jsx("button", {
          type: "submit",
          className: "flex-1 px-6 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white rounded-lg font-semibold hover:shadow-lg transition-shadow",
          children: "Submit Request"
        }), /*#__PURE__*/_jsx("button", {
          type: "button",
          className: "px-6 py-4 bg-white border border-[#E2E8F0] text-[#64748B] rounded-lg font-medium hover:border-[#10B981] hover:text-[#10B981] transition-colors",
          children: "Cancel"
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "mt-8 bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
      children: [/*#__PURE__*/_jsx("h3", {
        className: "text-lg font-semibold text-[#0F172A] mb-4",
        children: "What to Expect Next"
      }), /*#__PURE__*/_jsxs("div", {
        className: "space-y-4",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex gap-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "flex-shrink-0 w-8 h-8 bg-[#10B981] text-white rounded-full flex items-center justify-center text-sm font-semibold",
            children: "1"
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("div", {
              className: "text-sm font-medium text-[#0F172A] mb-1",
              children: "Request Review"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-sm text-[#64748B]",
              children: "Our team will review your request and match you with an appropriate specialist"
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex gap-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "flex-shrink-0 w-8 h-8 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-semibold",
            children: "2"
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("div", {
              className: "text-sm font-medium text-[#0F172A] mb-1",
              children: "Professional Match"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-sm text-[#64748B]",
              children: "You'll receive information about your matched professional within 24 hours"
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex gap-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "flex-shrink-0 w-8 h-8 bg-[#8B5CF6] text-white rounded-full flex items-center justify-center text-sm font-semibold",
            children: "3"
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("div", {
              className: "text-sm font-medium text-[#0F172A] mb-1",
              children: "Schedule Session"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-sm text-[#64748B]",
              children: "Book your first session at a time that works for you"
            })]
          })]
        })]
      })]
    })]
  });
}