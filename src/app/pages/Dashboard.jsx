import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, MessageSquare, Wind, BookOpen, TrendingUp, Calendar, ArrowRight, Award, Target, Zap, Star, CheckCircle, ChevronLeft, ChevronRight, Heart, Sun, Moon, Leaf, Brain, Smile, Music } from "lucide-react";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

/* ─── Data ─────────────────────────────────────────────────────── */
const moodData = [
  { date: "Mon", score: 65, baseline: 55 },
  { date: "Tue", score: 72, baseline: 55 },
  { date: "Wed", score: 68, baseline: 55 },
  { date: "Thu", score: 78, baseline: 55 },
  { date: "Fri", score: 83, baseline: 55 },
  { date: "Sat", score: 80, baseline: 55 },
  { date: "Sun", score: 88, baseline: 55 },
];

const journeyCards = [
  {
    title: "Morning Meditation",
    duration: "5 min",
    type: "Meditation",
    cta: "Start Session",
    gradient: "linear-gradient(160deg,#0f2027 0%,#203a43 50%,#2c5364 100%)",
    glow: "#2c5364",
    icon: Brain,
    iconColor: "#7dd3fc",
    desc: "Begin your day with clarity and calm through a guided visualization.",
    tag: "Recommended",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=440&q=80&fit=crop",
  },
  {
    title: "4-7-8 Breathing",
    duration: "4 min",
    type: "Breathwork",
    cta: "Begin Now",
    gradient: "linear-gradient(160deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)",
    glow: "#0f3460",
    icon: Wind,
    iconColor: "#a5b4fc",
    desc: "A proven technique to reduce anxiety and quiet an overactive mind.",
    tag: "Daily Pick",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=440&q=80&fit=crop",
  },
  {
    title: "Gratitude Journal",
    duration: "5 min",
    type: "Journaling",
    cta: "Open Journal",
    gradient: "linear-gradient(160deg,#1a0533 0%,#2d1b69 50%,#11998e 100%)",
    glow: "#11998e",
    icon: BookOpen,
    iconColor: "#6ee7b7",
    desc: "Write three things you are grateful for and rewire your mindset.",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=440&q=80&fit=crop",
  },
  {
    title: "Mindful Walking",
    duration: "10 min",
    type: "Movement",
    cta: "Let's Walk",
    gradient: "linear-gradient(160deg,#0d1f0f 0%,#1a4a1e 50%,#2d7a35 100%)",
    glow: "#2d7a35",
    icon: Leaf,
    iconColor: "#86efac",
    desc: "Step outside, breathe deeply, and notice the world around you.",
    tag: "Energising",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=440&q=80&fit=crop",
  },
  {
    title: "Sleep Wind-Down",
    duration: "15 min",
    type: "Sleep",
    cta: "Unwind",
    gradient: "linear-gradient(160deg,#0b0c1a 0%,#1a1a40 50%,#2d2b55 100%)",
    glow: "#2d2b55",
    icon: Moon,
    iconColor: "#c4b5fd",
    desc: "Gentle body-scan and ambient sounds to ease you into deep sleep.",
    tag: "Evening",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=440&q=80&fit=crop",
  },
  {
    title: "AI Support Chat",
    duration: "Anytime",
    type: "AI Chat",
    cta: "Chat Now",
    gradient: "linear-gradient(160deg,#1a0a0a 0%,#3d1515 50%,#7f1d1d 100%)",
    glow: "#7f1d1d",
    icon: MessageSquare,
    iconColor: "#fca5a5",
    desc: "Talk privately with your AI companion whenever you need support.",
    tag: "Always Here",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=440&q=80&fit=crop",
  },
];

const exploreCards = [
  {
    title: "Guided Meditation",
    subtitle: "5 min • Beginner",
    description: "Start your day with a calming body-scan meditation.",
    icon: Brain,
    bg: "from-violet-50 to-purple-100",
    accent: "#8B5CF6",
    badge: "Popular",
  },
  {
    title: "Box Breathing",
    subtitle: "4 min • All levels",
    description: "Slow your breath, quiet your nervous system.",
    icon: Wind,
    bg: "from-sky-50 to-blue-100",
    accent: "#3B82F6",
    badge: "Today's Pick",
  },
  {
    title: "Sleep Sounds",
    subtitle: "Ambience • 60 min",
    description: "Rain, forest, and ocean tracks to ease you to sleep.",
    icon: Music,
    bg: "from-indigo-50 to-indigo-100",
    accent: "#6366F1",
    badge: null,
  },
  {
    title: "Gratitude Journal",
    subtitle: "5 min • Daily",
    description: "Write three things you are grateful for today.",
    icon: BookOpen,
    bg: "from-amber-50 to-yellow-100",
    accent: "#F59E0B",
    badge: null,
  },
  {
    title: "Mindful Walk",
    subtitle: "10 min • Outdoors",
    description: "Notice your surroundings, breathe deeply, move gently.",
    icon: Leaf,
    bg: "from-emerald-50 to-green-100",
    accent: "#10B981",
    badge: null,
  },
  {
    title: "Talk to AI",
    subtitle: "Anytime • Private",
    description: "Chat with your AI companion whenever you need support.",
    icon: MessageSquare,
    bg: "from-rose-50 to-pink-100",
    accent: "#EC4899",
    badge: "New",
  },
];

const wellnessPillars = [
  { label: "Mind", pct: 78, color: "#8B5CF6", icon: Brain },
  { label: "Body", pct: 65, color: "#10B981", icon: Target },
  { label: "Sleep", pct: 70, color: "#3B82F6", icon: Moon },
  { label: "Social", pct: 55, color: "#F59E0B", icon: Smile },
];

const recentActivity = [
  { type: "Meditation Session", time: "2 hours ago", status: "Completed", icon: Brain, color: "#8B5CF6" },
  { type: "AI Chat", time: "5 hours ago", status: "Completed", icon: MessageSquare, color: "#3B82F6" },
  { type: "Mood Check-in", time: "1 day ago", status: "Logged", icon: Activity, color: "#10B981" },
  { type: "Breathing Exercise", time: "2 days ago", status: "Completed", icon: Wind, color: "#06B6D4" },
];

const affirmations = [
  "You are enough, exactly as you are.",
  "Every step forward is progress worth celebrating.",
  "Your feelings are valid and you are not alone.",
  "Today you chose to take care of yourself — that is brave.",
  "Healing happens one gentle moment at a time.",
];

const aiRecs = [
  {
    title: "Morning Routine",
    desc: "A 5-minute meditation to start your day with clarity.",
    icon: Sun,
    color: "#10B981",
    bg: "bg-emerald-50",
    tag: "High Priority",
    tagBg: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Sleep Quality",
    desc: "Journal before bed to process the day's emotions.",
    icon: Moon,
    color: "#6366F1",
    bg: "bg-indigo-50",
    tag: "Tonight",
    tagBg: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "Move Your Body",
    desc: "Even a 10-min walk dramatically lifts your mood.",
    icon: Leaf,
    color: "#F59E0B",
    bg: "bg-amber-50",
    tag: "This Afternoon",
    tagBg: "bg-amber-100 text-amber-700",
  },
];

const achievements = [
  {
    title: "7 Day Streak",
    desc: "Checked in 7 days in a row",
    icon: Award,
    color: "#F59E0B",
    bg: "from-amber-50 to-yellow-50",
  },
  {
    title: "Wellness Warrior",
    desc: "Completed 10+ wellness sessions",
    icon: Zap,
    color: "#8B5CF6",
    bg: "from-violet-50 to-purple-50",
  },
  {
    title: "Mindful Master",
    desc: "30 minutes of meditation this week",
    icon: Star,
    color: "#10B981",
    bg: "from-emerald-50 to-green-50",
  },
];

/* ─── Small helper ─────────────────────────────────────────────── */
function SectionTitle({ children, sub }) {
  return _jsxs("div", {
    className: "mb-5",
    children: [
      _jsx("h2", { className: "text-lg font-semibold text-gray-800 leading-snug", children }),
      sub && _jsx("p", { className: "text-sm text-gray-500 mt-0.5", children: sub }),
    ],
  });
}

/* ─── Dashboard ────────────────────────────────────────────────── */
export function Dashboard() {
  const [activeCard, setActiveCard] = useState(0);
  const [affIdx] = useState(() => Math.floor(Math.random() * affirmations.length));
  const carouselRef = useRef(null);
  const dragStartX = useRef(null);
  const totalCards = journeyCards.length;

  function prevCard() { setActiveCard(i => (i - 1 + totalCards) % totalCards); }
  function nextCard() { setActiveCard(i => (i + 1) % totalCards); }

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prevCard();
      else if (e.key === "ArrowRight") nextCard();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [totalCards]);

  function scrollCarousel(dir) {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  }

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const GreetIcon = hour < 12 ? Sun : hour < 18 ? Smile : Moon;

  const stats = [
    {
      label: "Emotional State",
      value: "Calm",
      sub: "82 / 100",
      icon: Heart,
      iconColor: "text-rose-400",
      bar: 82,
      barColor: "bg-rose-400",
    },
    {
      label: "Risk Level",
      value: "Low",
      sub: "Stable this week",
      icon: TrendingUp,
      iconColor: "text-blue-400",
      badge: "Excellent",
      badgeColor: "bg-blue-50 text-blue-600",
    },
    {
      label: "Sessions Done",
      value: "12",
      sub: "This month",
      icon: CheckCircle,
      iconColor: "text-emerald-400",
    },
    {
      label: "Next Session",
      value: "Today",
      sub: "Guided breathing · 4 min",
      icon: Calendar,
      iconColor: "text-violet-400",
    },
  ];

  return _jsx("div", {
    className: "min-h-screen bg-[#F7F9F6]",
    children: _jsxs("div", {
      className: "p-6 max-w-7xl mx-auto space-y-8",
      children: [

        /* ── Hero Banner ─────────────────────────────── */
        _jsxs(motion.div, {
          initial: { opacity: 0, y: -16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#d1fae5] via-[#e0f2fe] to-[#ede9fe] p-8 shadow-sm",
          children: [
            _jsx("div", { className: "pointer-events-none absolute -top-12 -right-12 w-56 h-56 rounded-full bg-white/30 blur-3xl" }),
            _jsx("div", { className: "pointer-events-none absolute bottom-0 left-8 w-40 h-40 rounded-full bg-emerald-300/20 blur-2xl" }),
            _jsxs("div", {
              className: "relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
              children: [
                _jsxs("div", {
                  children: [
                    _jsxs("div", {
                      className: "flex items-center gap-2 mb-1",
                      children: [
                        _jsx(GreetIcon, { className: "w-5 h-5 text-emerald-600" }),
                        _jsx("span", { className: "text-sm font-medium text-emerald-700", children: greeting }),
                      ],
                    }),
                    _jsx("h1", { className: "text-3xl font-bold text-gray-800 leading-tight", children: "Sarah" }),
                    _jsx("p", {
                      className: "text-gray-600 mt-1 max-w-md text-sm leading-relaxed italic",
                      children: `"${affirmations[affIdx]}"`,
                    }),
                  ],
                }),
                _jsxs(motion.div, {
                  whileHover: { scale: 1.03 },
                  className: "flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-sm border border-white/50 shrink-0",
                  children: [
                    _jsxs("div", {
                      className: "flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-md",
                      children: [
                        _jsx("span", { className: "text-2xl leading-none", children: "🔥" }),
                        _jsx("span", { className: "text-[10px] font-bold text-white mt-0.5", children: "STREAK" }),
                      ],
                    }),
                    _jsxs("div", {
                      children: [
                        _jsx("div", { className: "text-2xl font-bold text-gray-800", children: "7 Days" }),
                        _jsx("div", { className: "text-xs text-gray-500", children: "Keep going!" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        /* ── Today's Wellness Journey — 3-D Coverflow ── */
        _jsxs(motion.div, {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.08 },
          className: "relative overflow-hidden rounded-3xl bg-[#080d12] py-10 px-6",
          children: [
            /* Ambient glow behind active card */
            _jsx(motion.div, {
              key: activeCard,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.6 },
              className: "pointer-events-none absolute inset-0",
              style: {
                background: `radial-gradient(ellipse 60% 55% at 50% 60%, ${journeyCards[activeCard].glow}55 0%, transparent 70%)`,
              },
            }),

            /* Header */
            _jsxs("div", {
              className: "relative z-10 flex items-end justify-between mb-8 px-2",
              children: [
                _jsxs("div", {
                  children: [
                    _jsx("h2", { className: "text-xl font-bold text-white", children: "Today's Wellness Journey" }),
                    _jsx("p", { className: "text-sm text-white/40 mt-0.5", children: "Swipe through and choose your next session" }),
                  ],
                }),
                _jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    _jsx(motion.button, {
                      whileHover: { scale: 1.12 },
                      whileTap: { scale: 0.9 },
                      onClick: prevCard,
                      className: "w-9 h-9 rounded-full border border-white/15 bg-white/8 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors",
                      children: _jsx(ChevronLeft, { className: "w-4 h-4" }),
                    }),
                    _jsx(motion.button, {
                      whileHover: { scale: 1.12 },
                      whileTap: { scale: 0.9 },
                      onClick: nextCard,
                      className: "w-9 h-9 rounded-full border border-white/15 bg-white/8 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors",
                      children: _jsx(ChevronRight, { className: "w-4 h-4" }),
                    }),
                  ],
                }),
              ],
            }),

            /* Coverflow track — drag / swipe to navigate */
            _jsx("div", {
              className: "relative z-10 flex items-center justify-center select-none",
              onMouseDown: (e) => { dragStartX.current = e.clientX; },
              onMouseUp: (e) => {
                if (dragStartX.current !== null) {
                  const delta = e.clientX - dragStartX.current;
                  if (delta > 50) prevCard();
                  else if (delta < -50) nextCard();
                  dragStartX.current = null;
                }
              },
              onMouseLeave: () => { dragStartX.current = null; },
              onTouchStart: (e) => { dragStartX.current = e.touches[0].clientX; },
              onTouchEnd: (e) => {
                if (dragStartX.current !== null) {
                  const delta = e.changedTouches[0].clientX - dragStartX.current;
                  if (delta > 50) prevCard();
                  else if (delta < -50) nextCard();
                  dragStartX.current = null;
                }
              },
              style: { height: 280, perspective: "1200px", cursor: "grab" },
              children: journeyCards.map((card, i) => {
                const offset = i - activeCard;
                const absOff = Math.abs(offset);
                const isCenter = offset === 0;
                const visible = absOff <= 2;
                if (!visible) return null;

                const rotateY = offset * 42;
                const translateX = offset * 200;
                const translateZ = isCenter ? 80 : -absOff * 120;
                const scale = isCenter ? 1 : Math.max(0.62, 1 - absOff * 0.2);
                const opacity = isCenter ? 1 : Math.max(0.25, 1 - absOff * 0.38);
                const zIndex = 10 - absOff;
                const CardIcon = card.icon;

                return _jsxs(motion.div, {
                  key: card.title,
                  onClick: () => isCenter ? null : setActiveCard(i),
                  animate: { rotateY, translateX, translateZ, scale, opacity },
                  transition: { type: "spring", stiffness: 420, damping: 40, mass: 0.75 },
                  className: "absolute rounded-2xl overflow-hidden shadow-2xl",
                  style: {
                    width: 220,
                    height: 300,
                    background: "#080d12",
                    zIndex,
                    cursor: isCenter ? "default" : "pointer",
                    transformStyle: "preserve-3d",
                  },
                  children: [
                    /* background photograph */
                    _jsx("img", {
                      src: card.image,
                      alt: card.title,
                      draggable: false,
                      className: "absolute inset-0 w-full h-full object-cover pointer-events-none",
                      style: { opacity: isCenter ? 0.55 : 0.32 },
                    }),
                    /* colour-gradient overlay */
                    _jsx("div", {
                      className: "absolute inset-0",
                      style: { background: card.gradient, opacity: 0.72 },
                    }),
                    /* inner glow */
                    _jsx("div", {
                      className: "absolute inset-0",
                      style: { background: `radial-gradient(circle at 50% 20%, ${card.iconColor}22, transparent 65%)` },
                    }),

                    /* top badge */
                    _jsx("div", {
                      className: "absolute top-4 left-4",
                      children: _jsx("span", {
                        className: "text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider",
                        style: { background: `${card.iconColor}22`, color: card.iconColor, border: `1px solid ${card.iconColor}40` },
                        children: card.tag,
                      }),
                    }),

                    /* center icon */
                    isCenter && _jsx(motion.div, {
                      initial: { scale: 0.7, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      transition: { delay: 0.08 },
                      className: "absolute top-12 left-0 right-0 flex justify-center",
                      children: _jsx("div", {
                        className: "w-14 h-14 rounded-2xl flex items-center justify-center",
                        style: { background: `${card.iconColor}18`, border: `1.5px solid ${card.iconColor}30` },
                        children: _jsx(CardIcon, { className: "w-7 h-7", style: { color: card.iconColor } }),
                      }),
                    }),

                    /* non-center icon — smaller */
                    !isCenter && _jsx("div", {
                      className: "absolute top-14 left-0 right-0 flex justify-center",
                      children: _jsx(CardIcon, { className: "w-8 h-8 opacity-40", style: { color: card.iconColor } }),
                    }),

                    /* bottom content */
                    _jsxs("div", {
                      className: "absolute bottom-0 left-0 right-0 px-5 pb-5 pt-10",
                      style: { background: "linear-gradient(to top,rgba(0,0,0,0.82) 0%,transparent 100%)" },
                      children: [
                        _jsx("p", {
                          className: "text-[10px] font-semibold uppercase tracking-widest mb-1",
                          style: { color: card.iconColor },
                          children: `${card.type} · ${card.duration}`,
                        }),
                        _jsx("h3", { className: "text-white font-bold text-base leading-snug", children: card.title }),
                        isCenter && _jsx(motion.p, {
                          initial: { opacity: 0, y: 6 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: 0.12 },
                          className: "text-white/55 text-xs mt-1 leading-relaxed",
                          children: card.desc,
                        }),
                      ],
                    }),

                    /* CTA button — center only */
                    isCenter && _jsxs(motion.button, {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.2 },
                      whileHover: { scale: 1.03, y: -1 },
                      whileTap: { scale: 0.97 },
                      className: "absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-2.5 rounded-2xl text-[13px] font-bold tracking-wide shadow-lg",
                      style: {
                        background: `linear-gradient(135deg, ${card.iconColor}ee, ${card.iconColor}99)`,
                        color: "#080d12",
                        boxShadow: `0 4px 18px ${card.iconColor}55`,
                      },
                      children: [
                        card.cta,
                        _jsx(ArrowRight, { className: "w-3.5 h-3.5" }),
                      ],
                    }),
                  ],
                }, card.title);
              }),
            }),

            /* Dot indicators */
            _jsx("div", {
              className: "relative z-10 flex justify-center gap-2 mt-8",
              children: journeyCards.map((_, i) =>
                _jsx(motion.button, {
                  key: i,
                  onClick: () => setActiveCard(i),
                  animate: {
                    width: i === activeCard ? 24 : 6,
                    opacity: i === activeCard ? 1 : 0.3,
                  },
                  transition: { type: "spring", stiffness: 400, damping: 28 },
                  className: "h-1.5 rounded-full bg-white",
                })
              ),
            }),
          ],
        }),

        /* ── Stats Row ───────────────────────────────── */
        _jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
          children: stats.map((card, i) =>
            _jsxs(motion.div, {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.12 + i * 0.07 },
              whileHover: { y: -3 },
              className: "bg-white rounded-2xl border border-gray-100 p-5 shadow-sm cursor-pointer",
              children: [
                _jsxs("div", {
                  className: "flex items-center justify-between mb-3",
                  children: [
                    _jsx("span", { className: "text-xs font-medium text-gray-500", children: card.label }),
                    _jsx(card.icon, { className: `w-5 h-5 ${card.iconColor}` }),
                  ],
                }),
                _jsx("div", { className: "text-2xl font-bold text-gray-800 mb-1", children: card.value }),
                _jsx("p", { className: "text-xs text-gray-400 mb-2", children: card.sub }),
                card.bar !== undefined && _jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    _jsx("div", {
                      className: "flex-1 h-2 bg-gray-100 rounded-full overflow-hidden",
                      children: _jsx(motion.div, {
                        initial: { width: 0 },
                        animate: { width: `${card.bar}%` },
                        transition: { duration: 1.1, delay: 0.5 + i * 0.1 },
                        className: `h-full ${card.barColor} rounded-full`,
                      }),
                    }),
                    _jsx("span", { className: "text-xs font-semibold text-gray-600", children: `${card.bar}%` }),
                  ],
                }),
                card.badge && _jsx("span", {
                  className: `inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${card.badgeColor}`,
                  children: card.badge,
                }),
              ],
            }, i)
          ),
        }),

        /* ── Explore Carousel ────────────────────────── */
        _jsxs(motion.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.25 },
          children: [
            _jsxs("div", {
              className: "flex items-end justify-between mb-4",
              children: [
                _jsx(SectionTitle, {
                  children: "Explore Today's Activities",
                  sub: "Hand-picked for your wellness journey",
                }),
                _jsxs("div", {
                  className: "flex gap-2 shrink-0 mb-5",
                  children: [
                    _jsx(motion.button, {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: () => scrollCarousel(-1),
                      className: "w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:border-emerald-400 transition-colors",
                      children: _jsx(ChevronLeft, { className: "w-4 h-4 text-gray-600" }),
                    }),
                    _jsx(motion.button, {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: () => scrollCarousel(1),
                      className: "w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:border-emerald-400 transition-colors",
                      children: _jsx(ChevronRight, { className: "w-4 h-4 text-gray-600" }),
                    }),
                  ],
                }),
              ],
            }),
            _jsx("div", {
              ref: carouselRef,
              className: "flex gap-4 overflow-x-auto pb-3",
              style: { scrollbarWidth: "none", msOverflowStyle: "none" },
              children: exploreCards.map((card, i) =>
                _jsxs(motion.div, {
                  initial: { opacity: 0, x: 30 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.28 + i * 0.06 },
                  whileHover: { y: -6 },
                  className: `relative shrink-0 w-60 rounded-2xl bg-gradient-to-br ${card.bg} border border-white/60 p-5 shadow-sm cursor-pointer overflow-hidden`,
                  children: [
                    card.badge && _jsx("span", {
                      className: "absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full text-white",
                      style: { background: card.accent },
                      children: card.badge,
                    }),
                    _jsx("div", {
                      className: "w-11 h-11 rounded-xl flex items-center justify-center mb-4",
                      style: { background: `${card.accent}18` },
                      children: _jsx(card.icon, { className: "w-6 h-6", style: { color: card.accent } }),
                    }),
                    _jsx("h3", { className: "text-sm font-bold text-gray-800 mb-0.5", children: card.title }),
                    _jsx("p", { className: "text-[11px] font-medium text-gray-400 mb-2", children: card.subtitle }),
                    _jsx("p", { className: "text-xs text-gray-500 leading-relaxed mb-4", children: card.description }),
                    _jsxs("div", {
                      className: "flex items-center gap-1 text-xs font-semibold",
                      style: { color: card.accent },
                      children: ["Start now", _jsx(ArrowRight, { className: "w-3.5 h-3.5" })],
                    }),
                  ],
                }, i)
              ),
            }),
          ],
        }),

        /* ── Mood Chart + Wellness Pillars ───────────── */
        _jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
          children: [
            _jsxs(motion.div, {
              initial: { opacity: 0, x: -16 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.35 },
              className: "lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm",
              children: [
                _jsx(SectionTitle, {
                  children: "Mood Trend",
                  sub: "Your emotional wellbeing across the week",
                }),
                _jsx(ResponsiveContainer, {
                  width: "100%",
                  height: 240,
                  children: _jsxs(AreaChart, {
                    data: moodData,
                    children: [
                      _jsx("defs", {
                        children: _jsxs("linearGradient", {
                          id: "moodGrad", x1: "0", y1: "0", x2: "0", y2: "1",
                          children: [
                            _jsx("stop", { offset: "5%", stopColor: "#10B981", stopOpacity: 0.35 }),
                            _jsx("stop", { offset: "95%", stopColor: "#10B981", stopOpacity: 0 }),
                          ],
                        }),
                      }),
                      _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#F1F5F9" }),
                      _jsx(XAxis, { dataKey: "date", stroke: "#94A3B8", style: { fontSize: 11 } }),
                      _jsx(YAxis, { stroke: "#94A3B8", style: { fontSize: 11 }, domain: [40, 100] }),
                      _jsx(Tooltip, {
                        contentStyle: {
                          backgroundColor: "#fff",
                          border: "1px solid #E2E8F0",
                          borderRadius: "12px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                          fontSize: 12,
                        },
                        formatter: (val) => [`${val}%`, "Mood"],
                      }),
                      _jsx(Area, {
                        type: "monotone",
                        dataKey: "score",
                        stroke: "#10B981",
                        strokeWidth: 2.5,
                        fill: "url(#moodGrad)",
                        dot: { fill: "#10B981", r: 4, strokeWidth: 2, stroke: "#fff" },
                        activeDot: { r: 6 },
                      }),
                    ],
                  }),
                }),
              ],
            }),

            _jsxs(motion.div, {
              initial: { opacity: 0, x: 16 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.4 },
              className: "bg-white rounded-2xl border border-gray-100 p-6 shadow-sm",
              children: [
                _jsx(SectionTitle, {
                  children: "Wellness Pillars",
                  sub: "Balance across key life areas",
                }),
                _jsx("div", {
                  className: "space-y-5",
                  children: wellnessPillars.map((p, i) =>
                    _jsxs("div", {
                      key: p.label,
                      children: [
                        _jsxs("div", {
                          className: "flex items-center justify-between mb-1.5",
                          children: [
                            _jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                _jsx(p.icon, { className: "w-4 h-4", style: { color: p.color } }),
                                _jsx("span", { className: "text-sm font-medium text-gray-700", children: p.label }),
                              ],
                            }),
                            _jsx("span", { className: "text-sm font-bold text-gray-700", children: `${p.pct}%` }),
                          ],
                        }),
                        _jsx("div", {
                          className: "h-2.5 bg-gray-100 rounded-full overflow-hidden",
                          children: _jsx(motion.div, {
                            initial: { width: 0 },
                            animate: { width: `${p.pct}%` },
                            transition: { duration: 1.1, delay: 0.5 + i * 0.1 },
                            className: "h-full rounded-full",
                            style: { background: p.color },
                          }),
                        }),
                      ],
                    })
                  ),
                }),
              ],
            }),
          ],
        }),

        /* ── AI Recommendations + Daily Affirmation ──── */
        _jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
          children: [
            _jsxs(motion.div, {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.45 },
              className: "lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm",
              children: [
                _jsx(SectionTitle, {
                  children: "AI Recommendations",
                  sub: "Personalized to your current emotional state",
                }),
                _jsx("div", {
                  className: "grid sm:grid-cols-3 gap-4",
                  children: aiRecs.map((r, i) =>
                    _jsxs(motion.div, {
                      key: r.title,
                      initial: { opacity: 0, y: 8 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.48 + i * 0.07 },
                      whileHover: { y: -4 },
                      className: `${r.bg} rounded-xl p-4 cursor-pointer border border-white shadow-sm`,
                      children: [
                        _jsx("div", {
                          className: "w-9 h-9 rounded-lg flex items-center justify-center mb-3",
                          style: { background: `${r.color}18` },
                          children: _jsx(r.icon, { className: "w-5 h-5", style: { color: r.color } }),
                        }),
                        _jsx("h4", { className: "text-sm font-semibold text-gray-800 mb-1", children: r.title }),
                        _jsx("p", { className: "text-xs text-gray-500 leading-relaxed mb-3", children: r.desc }),
                        _jsx("span", {
                          className: `text-[10px] font-bold px-2 py-0.5 rounded-full ${r.tagBg}`,
                          children: r.tag,
                        }),
                      ],
                    })
                  ),
                }),
              ],
            }),

            _jsxs(motion.div, {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5 },
              className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#d1fae5] via-[#e0f2fe] to-[#ddd6fe] border border-white/60 p-6 shadow-sm flex flex-col justify-between",
              children: [
                _jsx("div", { className: "absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/20 blur-2xl pointer-events-none" }),
                _jsxs("div", {
                  className: "relative z-10 flex-1",
                  children: [
                    _jsx("div", { className: "text-4xl mb-3", children: "🌿" }),
                    _jsx("h4", { className: "text-sm font-semibold text-gray-700 mb-2", children: "Daily Affirmation" }),
                    _jsx("blockquote", {
                      className: "text-gray-700 text-sm font-medium leading-relaxed italic",
                      children: `"${affirmations[affIdx]}"`,
                    }),
                  ],
                }),
                _jsx("button", {
                  className: "relative z-10 mt-5 w-full py-2 rounded-xl bg-white/60 backdrop-blur-sm text-sm font-semibold text-gray-700 border border-white/50 hover:bg-white/80 transition-colors",
                  children: "Save to Journal",
                }),
              ],
            }),
          ],
        }),

        /* ── Recent Activity ─────────────────────────── */
        _jsxs(motion.div, {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.55 },
          className: "bg-white rounded-2xl border border-gray-100 p-6 shadow-sm",
          children: [
            _jsxs("div", {
              className: "flex items-center justify-between mb-5",
              children: [
                _jsx(SectionTitle, { children: "Recent Activity" }),
                _jsxs("button", {
                  className: "text-sm text-emerald-600 font-medium hover:underline flex items-center gap-1 mb-5",
                  children: ["View all", _jsx(ArrowRight, { className: "w-4 h-4" })],
                }),
              ],
            }),
            _jsx("div", {
              className: "divide-y divide-gray-50",
              children: recentActivity.map((a, i) =>
                _jsxs(motion.div, {
                  initial: { opacity: 0, x: -12 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.58 + i * 0.06 },
                  whileHover: { x: 4, backgroundColor: "#F8FAFC" },
                  className: "flex items-center justify-between py-3.5 px-3 rounded-xl cursor-pointer transition-colors",
                  children: [
                    _jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [
                        _jsx("div", {
                          className: "w-10 h-10 rounded-xl flex items-center justify-center bg-gray-50",
                          children: _jsx(a.icon, { className: "w-5 h-5", style: { color: a.color } }),
                        }),
                        _jsxs("div", {
                          children: [
                            _jsx("div", { className: "text-sm font-semibold text-gray-800", children: a.type }),
                            _jsx("div", { className: "text-xs text-gray-400 mt-0.5", children: a.time }),
                          ],
                        }),
                      ],
                    }),
                    _jsx("span", {
                      className: "text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-600",
                      children: a.status,
                    }),
                  ],
                }, i)
              ),
            }),
          ],
        }),

        /* ── Achievements ────────────────────────────── */
        _jsxs(motion.div, {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.62 },
          children: [
            _jsxs("div", {
              className: "flex items-center justify-between mb-4",
              children: [
                _jsx(SectionTitle, { children: "Achievements" }),
                _jsxs("button", {
                  className: "text-sm text-emerald-600 font-medium hover:underline flex items-center gap-1 mb-5",
                  children: ["View all", _jsx(ArrowRight, { className: "w-4 h-4" })],
                }),
              ],
            }),
            _jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
              children: achievements.map((ach, i) =>
                _jsxs(motion.div, {
                  key: ach.title,
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.65 + i * 0.07 },
                  whileHover: { y: -4 },
                  className: `bg-gradient-to-br ${ach.bg} border border-white rounded-2xl p-5 shadow-sm cursor-pointer flex items-center gap-4`,
                  children: [
                    _jsx("div", {
                      className: "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
                      style: { background: `${ach.color}18` },
                      children: _jsx(ach.icon, { className: "w-6 h-6", style: { color: ach.color } }),
                    }),
                    _jsxs("div", {
                      children: [
                        _jsx("h4", { className: "text-sm font-bold text-gray-800", children: ach.title }),
                        _jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: ach.desc }),
                      ],
                    }),
                  ],
                })
              ),
            }),
          ],
        }),

        /* ── Footer ─────────────────────────────────── */
        _jsxs("footer", {
          className: "mt-2 rounded-2xl border border-emerald-100 overflow-hidden",
          style: { background: "linear-gradient(135deg,#f0fdf4 0%,#ecfdf5 60%,#f0f9ff 100%)" },
          children: [
            /* Thin top accent */
            _jsx("div", {
              className: "h-[2px]",
              style: { background: "linear-gradient(90deg,#10B981,#06B6D4,#8B5CF6)" },
            }),

            _jsxs("div", {
              className: "px-6 py-5",
              children: [
                _jsxs("div", {
                  className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                  children: [
                    /* Brand */
                    _jsxs("div", {
                      className: "flex items-center gap-2.5",
                      children: [
                        _jsx("div", {
                          className: "w-7 h-7 rounded-lg flex items-center justify-center shrink-0",
                          style: { background: "linear-gradient(135deg,#10B981,#06B6D4)" },
                          children: _jsx(Brain, { className: "w-3.5 h-3.5 text-white" }),
                        }),
                        _jsxs("div", {
                          children: [
                            _jsx("span", { className: "text-sm font-black text-gray-800 tracking-tight", children: "AuraMind" }),
                            _jsx("p", { className: "text-[11px] text-gray-400 leading-none mt-0.5", children: "Your mental wellness companion" }),
                          ],
                        }),
                      ],
                    }),

                    /* Nav links */
                    _jsx("div", {
                      className: "flex flex-wrap items-center gap-x-5 gap-y-1",
                      children: ["Features", "Help Centre", "Privacy", "Terms", "Contact"].map(item =>
                        _jsx("a", {
                          key: item,
                          href: "#",
                          className: "text-xs text-gray-500 hover:text-emerald-600 transition-colors",
                          children: item,
                        })
                      ),
                    }),

                    /* Stats */
                    _jsx("div", {
                      className: "flex items-center gap-4",
                      children: [["50K+", "Users"], ["4.9★", "Rating"], ["1M+", "Sessions"]].map(([n, l]) =>
                        _jsxs("div", {
                          key: l,
                          className: "text-center",
                          children: [
                            _jsx("div", { className: "text-xs font-black text-emerald-700", children: n }),
                            _jsx("div", { className: "text-[9px] text-gray-400 uppercase tracking-wide", children: l }),
                          ],
                        })
                      ),
                    }),
                  ],
                }),

                _jsx("div", { className: "h-px my-3 bg-emerald-100" }),

                _jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    _jsx("p", {
                      className: "text-[11px] text-gray-400",
                      children: `© ${new Date().getFullYear()} AuraMind. All rights reserved.`,
                    }),
                    _jsxs("div", {
                      className: "flex items-center gap-1 text-[11px] text-gray-400",
                      children: [
                        _jsx(Heart, { className: "w-3 h-3 text-rose-400" }),
                        "Mental health matters",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

      ],
    }),
  });
}

export default Dashboard;
