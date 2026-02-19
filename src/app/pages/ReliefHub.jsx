import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Play, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
const categories = [{
  name: "All",
  count: 48
}, {
  name: "Anxiety Relief",
  count: 12
}, {
  name: "Stress Relief",
  count: 15
}, {
  name: "Sleep Support",
  count: 10
}, {
  name: "Panic Support",
  count: 6
}, {
  name: "Focus Support",
  count: 5
}];
const contentItems = [{
  id: 1,
  title: "5-Minute Calm Breathing",
  category: "Anxiety Relief",
  duration: "5 min",
  image: "https://images.unsplash.com/photo-1767542484661-570b591d24a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwbWVkaXRhdGlvbiUyMG5hdHVyZSUyMHplbnxlbnwxfHx8fDE3NzEzNDk3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  type: "Guided Exercise"
}, {
  id: 2,
  title: "Deep Breathing for Anxiety",
  category: "Anxiety Relief",
  duration: "8 min",
  image: "https://images.unsplash.com/photo-1758599880425-7862af0a4b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGJyZWF0aGluZyUyMGV4ZXJjaXNlJTIweW9nYXxlbnwxfHx8fDE3NzEzNDk3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  type: "Audio"
}, {
  id: 3,
  title: "Progressive Muscle Relaxation",
  category: "Stress Relief",
  duration: "15 min",
  image: "https://images.unsplash.com/photo-1722094250550-4993fa28a51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlc3MlMjByZWxpZWYlMjB3ZWxsbmVzcyUyMGNhbG18ZW58MXx8fHwxNzcxMzQ5Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  type: "Video"
}, {
  id: 4,
  title: "Sleep Meditation Journey",
  category: "Sleep Support",
  duration: "20 min",
  image: "https://images.unsplash.com/photo-1758273239813-cecda76c6c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlcCUyMHJlbGF4YXRpb24lMjBuaWdodCUyMGNhbG18ZW58MXx8fHwxNzcxMzQ5Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  type: "Audio"
}, {
  id: 5,
  title: "Mindful Focus Exercise",
  category: "Focus Support",
  duration: "10 min",
  image: "https://images.unsplash.com/photo-1760349748527-8f8371b20fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2N1cyUyMGNvbmNlbnRyYXRpb24lMjBtaW5kZnVsbmVzc3xlbnwxfHx8fDE3NzEzNDk3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  type: "Guided Exercise"
}, {
  id: 6,
  title: "Body Scan Meditation",
  category: "Stress Relief",
  duration: "12 min",
  image: "https://images.unsplash.com/photo-1767542484661-570b591d24a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwbWVkaXRhdGlvbiUyMG5hdHVyZSUyMHplbnxlbnwxfHx8fDE3NzEzNDk3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  type: "Audio"
}, {
  id: 7,
  title: "Panic Attack First Aid",
  category: "Panic Support",
  duration: "5 min",
  image: "https://images.unsplash.com/photo-1758599880425-7862af0a4b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGJyZWF0aGluZyUyMGV4ZXJjaXNlJTIweW9nYXxlbnwxfHx8fDE3NzEzNDk3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  type: "Guided Exercise"
}, {
  id: 8,
  title: "Evening Wind Down",
  category: "Sleep Support",
  duration: "18 min",
  image: "https://images.unsplash.com/photo-1758273239813-cecda76c6c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlcCUyMHJlbGF4YXRpb24lMjBuaWdodCUyMGNhbG18ZW58MXx8fHwxNzcxMzQ5Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  type: "Video"
}];
export function ReliefHub() {
  return /*#__PURE__*/_jsxs("div", {
    className: "p-8 space-y-8",
    children: [/*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h1", {
        className: "text-3xl font-semibold text-[#0F172A] mb-2",
        children: "Relief Hub"
      }), /*#__PURE__*/_jsx("p", {
        className: "text-[#64748B]",
        children: "Evidence-based tools for emotional wellness"
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "flex gap-3 overflow-x-auto pb-2",
      children: categories.map(category => /*#__PURE__*/_jsxs("button", {
        className: `px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${category.name === "All" ? "bg-[#10B981] text-white" : "bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#10B981] hover:text-[#10B981]"}`,
        children: [category.name, /*#__PURE__*/_jsxs("span", {
          className: "ml-2 text-xs opacity-75",
          children: ["(", category.count, ")"]
        })]
      }, category.name))
    }), /*#__PURE__*/_jsx("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
      children: contentItems.map(item => /*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "relative aspect-video overflow-hidden bg-[#F1F5F9]",
          children: [/*#__PURE__*/_jsx(ImageWithFallback, {
            src: item.image,
            alt: item.title,
            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          }), /*#__PURE__*/_jsx("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
            children: /*#__PURE__*/_jsx("div", {
              className: "w-12 h-12 bg-white/90 rounded-full flex items-center justify-center",
              children: /*#__PURE__*/_jsx(Play, {
                className: "w-6 h-6 text-[#10B981] ml-1"
              })
            })
          }), /*#__PURE__*/_jsxs("div", {
            className: "absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1",
            children: [/*#__PURE__*/_jsx(Clock, {
              className: "w-3 h-3 text-white"
            }), /*#__PURE__*/_jsx("span", {
              className: "text-xs text-white font-medium",
              children: item.duration
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "p-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-xs text-[#10B981] font-medium mb-1",
            children: item.category
          }), /*#__PURE__*/_jsx("h3", {
            className: "font-semibold text-[#0F172A] mb-2",
            children: item.title
          }), /*#__PURE__*/_jsx("div", {
            className: "flex items-center justify-between",
            children: /*#__PURE__*/_jsx("span", {
              className: "text-xs px-2 py-1 bg-[#F1F5F9] text-[#64748B] rounded",
              children: item.type
            })
          })]
        })]
      }, item.id))
    }), /*#__PURE__*/_jsx("div", {
      className: "bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl p-8 text-white",
      children: /*#__PURE__*/_jsxs("div", {
        className: "max-w-2xl",
        children: [/*#__PURE__*/_jsx("h2", {
          className: "text-2xl font-semibold mb-2",
          children: "Daily Wellness Challenge"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-white/90 mb-6",
          children: "Complete today's mindfulness exercise and earn your daily wellness badge. Consistency is key to emotional wellbeing."
        }), /*#__PURE__*/_jsx("button", {
          className: "px-6 py-3 bg-white text-[#10B981] rounded-lg font-medium hover:shadow-lg transition-shadow",
          children: "Start Today's Challenge"
        })]
      })
    })]
  });
}