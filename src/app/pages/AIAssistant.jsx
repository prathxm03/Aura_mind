import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Send, Mic, Sparkles, AlertTriangle, Heart } from "lucide-react";
const initialMessages = [{
  id: 1,
  text: "Hello Sarah! I'm here to support you. How are you feeling today?",
  sender: "ai",
  timestamp: "10:30 AM"
}, {
  id: 2,
  text: "I've been feeling a bit anxious lately. Work has been overwhelming.",
  sender: "user",
  timestamp: "10:32 AM"
}, {
  id: 3,
  text: "I understand that work stress can be really challenging. Thank you for sharing that with me. Would you like to talk more about what's been overwhelming you, or would you prefer some coping strategies to manage the anxiety?",
  sender: "ai",
  timestamp: "10:32 AM"
}];
export function AIAssistant() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    };
    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: "I hear you. Let's work through this together. Can you tell me more about what specific aspects of work are causing you the most stress?",
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "h-full flex",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "flex-1 flex flex-col",
      children: [/*#__PURE__*/_jsx("div", {
        className: "bg-white border-b border-[#E2E8F0] px-8 py-4",
        children: /*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-10 h-10 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center",
            children: /*#__PURE__*/_jsx(Sparkles, {
              className: "w-5 h-5 text-white"
            })
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("h2", {
              className: "text-lg font-semibold text-[#0F172A]",
              children: "AI Wellness Assistant"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-sm text-[#64748B]",
              children: "Available 24/7 • Confidential"
            })]
          })]
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "flex-1 overflow-y-auto p-8 space-y-6",
        children: messages.map(message => /*#__PURE__*/_jsx("div", {
          className: `flex ${message.sender === "user" ? "justify-end" : "justify-start"}`,
          children: /*#__PURE__*/_jsxs("div", {
            className: `flex gap-3 max-w-2xl ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`,
            children: [/*#__PURE__*/_jsx("div", {
              className: `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === "ai" ? "bg-gradient-to-br from-[#10B981] to-[#059669]" : "bg-gradient-to-br from-[#3B82F6] to-[#2563EB]"}`,
              children: message.sender === "ai" ? /*#__PURE__*/_jsx(Sparkles, {
                className: "w-4 h-4 text-white"
              }) : /*#__PURE__*/_jsx("span", {
                className: "text-white text-xs font-medium",
                children: "SJ"
              })
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("div", {
                className: `rounded-2xl px-4 py-3 ${message.sender === "ai" ? "bg-white border border-[#E2E8F0] shadow-sm" : "bg-gradient-to-br from-[#10B981] to-[#059669] text-white"}`,
                children: /*#__PURE__*/_jsx("p", {
                  className: `text-sm ${message.sender === "ai" ? "text-[#0F172A]" : "text-white"}`,
                  children: message.text
                })
              }), /*#__PURE__*/_jsx("p", {
                className: "text-xs text-[#64748B] mt-1 px-1",
                children: message.timestamp
              })]
            })]
          })
        }, message.id))
      }), /*#__PURE__*/_jsxs("div", {
        className: "bg-white border-t border-[#E2E8F0] px-8 py-6",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex gap-3",
          children: [/*#__PURE__*/_jsx("button", {
            className: "p-3 hover:bg-[#F8FAFC] rounded-lg transition-colors",
            children: /*#__PURE__*/_jsx(Mic, {
              className: "w-5 h-5 text-[#64748B]"
            })
          }), /*#__PURE__*/_jsx("input", {
            type: "text",
            value: input,
            onChange: e => setInput(e.target.value),
            onKeyPress: e => e.key === "Enter" && handleSend(),
            placeholder: "Type your message...",
            className: "flex-1 px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent"
          }), /*#__PURE__*/_jsxs("button", {
            onClick: handleSend,
            className: "px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white rounded-lg hover:shadow-md transition-shadow flex items-center gap-2 font-medium",
            children: [/*#__PURE__*/_jsx(Send, {
              className: "w-4 h-4"
            }), "Send"]
          })]
        }), /*#__PURE__*/_jsx("p", {
          className: "text-xs text-[#64748B] mt-3 text-center",
          children: "This AI provides support but is not a replacement for professional help"
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "w-80 bg-white border-l border-[#E2E8F0] p-6 space-y-6 overflow-y-auto",
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("h3", {
          className: "text-sm font-semibold text-[#0F172A] mb-4",
          children: "Conversation Insights"
        }), /*#__PURE__*/_jsxs("div", {
          className: "bg-[#F8FAFC] rounded-lg p-4 mb-4",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex items-center gap-2 mb-2",
            children: [/*#__PURE__*/_jsx(Heart, {
              className: "w-4 h-4 text-[#10B981]"
            }), /*#__PURE__*/_jsx("span", {
              className: "text-xs font-medium text-[#64748B]",
              children: "Emotional State"
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "text-lg font-semibold text-[#0F172A] mb-2",
            children: "Anxious"
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex gap-2 flex-wrap",
            children: [/*#__PURE__*/_jsx("span", {
              className: "px-2 py-1 bg-white border border-[#E2E8F0] rounded text-xs text-[#64748B]",
              children: "Stressed"
            }), /*#__PURE__*/_jsx("span", {
              className: "px-2 py-1 bg-white border border-[#E2E8F0] rounded text-xs text-[#64748B]",
              children: "Overwhelmed"
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-4 mb-4",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex items-center gap-2 mb-2",
            children: [/*#__PURE__*/_jsx(AlertTriangle, {
              className: "w-4 h-4 text-[#F59E0B]"
            }), /*#__PURE__*/_jsx("span", {
              className: "text-xs font-medium text-[#92400E]",
              children: "Risk Assessment"
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "text-lg font-semibold text-[#92400E] mb-1",
            children: "Low-Medium"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-xs text-[#92400E]",
            children: "Monitoring for escalation"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h4", {
            className: "text-sm font-semibold text-[#0F172A] mb-3",
            children: "Recommended Actions"
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-2",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-3",
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-xs font-medium text-[#10B981] mb-1",
                children: "Breathing Exercise"
              }), /*#__PURE__*/_jsx("p", {
                className: "text-xs text-[#64748B]",
                children: "5-4-3-2-1 grounding technique"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-3",
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-xs font-medium text-[#3B82F6] mb-1",
                children: "Journaling"
              }), /*#__PURE__*/_jsx("p", {
                className: "text-xs text-[#64748B]",
                children: "Write about current stressors"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "bg-[#F5F3FF] border border-[#DDD6FE] rounded-lg p-3",
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-xs font-medium text-[#8B5CF6] mb-1",
                children: "Professional Support"
              }), /*#__PURE__*/_jsx("p", {
                className: "text-xs text-[#64748B]",
                children: "Consider scheduling a session"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "border-t border-[#E2E8F0] pt-4",
        children: [/*#__PURE__*/_jsx("h4", {
          className: "text-xs font-semibold text-[#64748B] mb-2",
          children: "Session Information"
        }), /*#__PURE__*/_jsxs("div", {
          className: "space-y-2 text-xs text-[#64748B]",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex justify-between",
            children: [/*#__PURE__*/_jsx("span", {
              children: "Duration"
            }), /*#__PURE__*/_jsx("span", {
              className: "text-[#0F172A] font-medium",
              children: "12 minutes"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex justify-between",
            children: [/*#__PURE__*/_jsx("span", {
              children: "Messages"
            }), /*#__PURE__*/_jsx("span", {
              className: "text-[#0F172A] font-medium",
              children: messages.length
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex justify-between",
            children: [/*#__PURE__*/_jsx("span", {
              children: "Started"
            }), /*#__PURE__*/_jsx("span", {
              className: "text-[#0F172A] font-medium",
              children: "10:30 AM"
            })]
          })]
        })]
      })]
    })]
  });
}