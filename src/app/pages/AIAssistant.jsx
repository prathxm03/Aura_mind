import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
// Added LoaderCircle for the thinking animation
import { Send, Mic, Sparkles, AlertTriangle, Heart, LoaderCircle } from "lucide-react";

const initialMessages = [{
  id: 1,
  text: "Hello! I'm AuraMind. How are you feeling today?",
  sender: "ai",
  timestamp: "10:30 AM"
}];

export function AIAssistant() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // 1. Add User Message to UI
    const userMsg = {
      id: Date.now(),
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      // 2. Call your FastAPI Backend
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_message: currentInput,
          chat_mode: "general", // Matches your Python Enum
          history: messages.map(m => ({ 
            role: m.sender === "ai" ? "assistant" : "user", 
            content: m.text 
          }))
        }),
      });

      if (!response.ok) throw new Error("Backend connection failed");

      const data = await response.json();

      // 3. Add AI Response to UI
      const aiMsg = {
        id: Date.now() + 1,
        text: data.reply,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages(prev => [...prev, aiMsg]);

    } catch (error) {
      console.error("Connection Error:", error);
      // Optional: Add an error message bubble here
    } finally {
      setIsLoading(false);
    }
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
            children: /*#__PURE__*/_jsx(Sparkles, { className: "w-5 h-5 text-white" })
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("h2", { className: "text-lg font-semibold text-[#0F172A]", children: "AI Wellness Assistant" }), 
            /*#__PURE__*/_jsx("p", { className: "text-sm text-[#64748B]", children: "Available 24/7 • Confidential" })]
          })]
        })
      }), 
      /*#__PURE__*/_jsxs("div", {
        className: "flex-1 overflow-y-auto p-8 space-y-6",
        children: [
          messages.map(message => /*#__PURE__*/_jsx("div", {
            className: `flex ${message.sender === "user" ? "justify-end" : "justify-start"}`,
            children: /*#__PURE__*/_jsxs("div", {
              className: `flex gap-3 max-w-2xl ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`,
              children: [/*#__PURE__*/_jsx("div", {
                className: `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === "ai" ? "bg-gradient-to-br from-[#10B981] to-[#059669]" : "bg-gradient-to-br from-[#3B82F6] to-[#2563EB]"}`,
                children: message.sender === "ai" ? /*#__PURE__*/_jsx(Sparkles, { className: "w-4 h-4 text-white" }) : /*#__PURE__*/_jsx("span", { className: "text-white text-xs font-medium", children: "SJ" })
              }), /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("div", {
                  className: `rounded-2xl px-4 py-3 ${message.sender === "ai" ? "bg-white border border-[#E2E8F0] shadow-sm" : "bg-gradient-to-br from-[#10B981] to-[#059669] text-white"}`,
                  children: /*#__PURE__*/_jsx("p", { className: `text-sm ${message.sender === "ai" ? "text-[#0F172A]" : "text-white"}`, children: message.text })
                }), /*#__PURE__*/_jsx("p", { className: "text-xs text-[#64748B] mt-1 px-1", children: message.timestamp })]
              })]
            })
          }, message.id)),
          // LOADING INDICATOR
          isLoading && /*#__PURE__*/_jsx("div", {
            className: "flex justify-start",
            children: /*#__PURE__*/_jsxs("div", {
              className: "flex gap-3 items-center text-[#64748B]",
              children: [
                /*#__PURE__*/_jsx(LoaderCircle, { className: "w-5 h-5 animate-spin text-[#10B981]" }),
                /*#__PURE__*/_jsx("span", { className: "text-xs italic", children: "AuraMind is thinking..." })
              ]
            })
          })
        ]
      }), 
      /*#__PURE__*/_jsxs("div", {
        className: "bg-white border-t border-[#E2E8F0] px-8 py-6",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex gap-3",
          children: [/*#__PURE__*/_jsx("button", { className: "p-3 hover:bg-[#F8FAFC] rounded-lg transition-colors", children: /*#__PURE__*/_jsx(Mic, { className: "w-5 h-5 text-[#64748B]" }) }), 
          /*#__PURE__*/_jsx("input", {
            type: "text",
            value: input,
            disabled: isLoading,
            onChange: e => setInput(e.target.value),
            onKeyPress: e => e.key === "Enter" && handleSend(),
            placeholder: isLoading ? "Waiting for response..." : "Type your message...",
            className: "flex-1 px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#10B981]"
          }), 
          /*#__PURE__*/_jsxs("button", {
            onClick: handleSend,
            disabled: isLoading,
            className: `px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white rounded-lg transition-shadow flex items-center gap-2 font-medium ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`,
            children: [/*#__PURE__*/_jsx(Send, { className: "w-4 h-4" }), isLoading ? "Thinking..." : "Send"]
          })]
        }), /*#__PURE__*/_jsx("p", { className: "text-xs text-[#64748B] mt-3 text-center", children: "This AI provides support but is not a replacement for professional help" })]
      })]
    }), 
    /*#__PURE__*/_jsxs("div", {
      className: "w-80 bg-white border-l border-[#E2E8F0] p-6 space-y-6 overflow-y-auto",
      children: [
        /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h3", { className: "text-sm font-semibold text-[#0F172A] mb-4", children: "Conversation Insights" }), 
          /*#__PURE__*/_jsxs("div", {
            className: "bg-[#F8FAFC] rounded-lg p-4 mb-4",
            children: [/*#__PURE__*/_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [/*#__PURE__*/_jsx(Heart, { className: "w-4 h-4 text-[#10B981]" }), /*#__PURE__*/_jsx("span", { className: "text-xs font-medium text-[#64748B]", children: "Emotional State" })] }), 
            /*#__PURE__*/_jsx("div", { className: "text-lg font-semibold text-[#0F172A] mb-2", children: "Anxious" })]
          })]
        })
      ]
    })]
  });
}