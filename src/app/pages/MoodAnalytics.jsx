import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TrendingUp, TrendingDown, Calendar } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
const moodTrendData = [{
  date: "Feb 1",
  score: 65,
  anxiety: 45,
  energy: 70
}, {
  date: "Feb 3",
  score: 68,
  anxiety: 42,
  energy: 72
}, {
  date: "Feb 5",
  score: 72,
  anxiety: 38,
  energy: 75
}, {
  date: "Feb 7",
  score: 70,
  anxiety: 40,
  energy: 73
}, {
  date: "Feb 9",
  score: 75,
  anxiety: 35,
  energy: 78
}, {
  date: "Feb 11",
  score: 78,
  anxiety: 32,
  energy: 80
}, {
  date: "Feb 13",
  score: 80,
  anxiety: 30,
  energy: 82
}, {
  date: "Feb 15",
  score: 82,
  anxiety: 28,
  energy: 85
}];
const emotionalDistribution = [{
  name: "Calm",
  value: 35,
  color: "#10B981"
}, {
  name: "Happy",
  value: 25,
  color: "#3B82F6"
}, {
  name: "Anxious",
  value: 20,
  color: "#F59E0B"
}, {
  name: "Stressed",
  value: 12,
  color: "#EF4444"
}, {
  name: "Sad",
  value: 8,
  color: "#8B5CF6"
}];
const weeklyScores = [{
  week: "Week 1",
  score: 68
}, {
  week: "Week 2",
  score: 72
}, {
  week: "Week 3",
  score: 75
}, {
  week: "Week 4",
  score: 80
}];
const emotionalHistory = [{
  date: "Feb 17",
  time: "9:00 AM",
  emotion: "Calm",
  score: 82,
  note: "Morning meditation helped"
}, {
  date: "Feb 16",
  time: "3:00 PM",
  emotion: "Anxious",
  score: 65,
  note: "Work deadline stress"
}, {
  date: "Feb 15",
  time: "8:00 PM",
  emotion: "Happy",
  score: 85,
  note: "Great workout session"
}, {
  date: "Feb 14",
  time: "2:00 PM",
  emotion: "Calm",
  score: 78,
  note: "Breathing exercise"
}, {
  date: "Feb 13",
  time: "11:00 AM",
  emotion: "Stressed",
  score: 60,
  note: "Busy morning"
}];
export function MoodAnalytics() {
  return /*#__PURE__*/_jsxs("div", {
    className: "p-8 space-y-8",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "flex items-center justify-between",
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("h1", {
          className: "text-3xl font-semibold text-[#0F172A] mb-2",
          children: "Mood Analytics"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-[#64748B]",
          children: "Track and understand your emotional patterns"
        })]
      }), /*#__PURE__*/_jsxs("button", {
        className: "flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] rounded-lg text-[#64748B] hover:border-[#10B981] hover:text-[#10B981] transition-colors",
        children: [/*#__PURE__*/_jsx(Calendar, {
          className: "w-4 h-4"
        }), "Last 30 Days"]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-4 gap-6",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
        children: [/*#__PURE__*/_jsx("div", {
          className: "text-sm text-[#64748B] mb-2",
          children: "Average Mood Score"
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex items-end gap-2",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-3xl font-semibold text-[#0F172A]",
            children: "82"
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex items-center gap-1 text-[#10B981] mb-1",
            children: [/*#__PURE__*/_jsx(TrendingUp, {
              className: "w-4 h-4"
            }), /*#__PURE__*/_jsx("span", {
              className: "text-sm font-medium",
              children: "+12%"
            })]
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
        children: [/*#__PURE__*/_jsx("div", {
          className: "text-sm text-[#64748B] mb-2",
          children: "Anxiety Level"
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex items-end gap-2",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-3xl font-semibold text-[#0F172A]",
            children: "28"
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex items-center gap-1 text-[#10B981] mb-1",
            children: [/*#__PURE__*/_jsx(TrendingDown, {
              className: "w-4 h-4"
            }), /*#__PURE__*/_jsx("span", {
              className: "text-sm font-medium",
              children: "-18%"
            })]
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
        children: [/*#__PURE__*/_jsx("div", {
          className: "text-sm text-[#64748B] mb-2",
          children: "Energy Level"
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex items-end gap-2",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-3xl font-semibold text-[#0F172A]",
            children: "85"
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex items-center gap-1 text-[#10B981] mb-1",
            children: [/*#__PURE__*/_jsx(TrendingUp, {
              className: "w-4 h-4"
            }), /*#__PURE__*/_jsx("span", {
              className: "text-sm font-medium",
              children: "+15%"
            })]
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
        children: [/*#__PURE__*/_jsx("div", {
          className: "text-sm text-[#64748B] mb-2",
          children: "Check-ins"
        }), /*#__PURE__*/_jsx("div", {
          className: "text-3xl font-semibold text-[#0F172A]",
          children: "28"
        }), /*#__PURE__*/_jsx("div", {
          className: "text-sm text-[#64748B] mt-1",
          children: "This month"
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "lg:col-span-2 bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "mb-6",
          children: [/*#__PURE__*/_jsx("h3", {
            className: "text-lg font-semibold text-[#0F172A] mb-1",
            children: "Emotional Trends"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-sm text-[#64748B]",
            children: "Your mood, anxiety, and energy levels over time"
          })]
        }), /*#__PURE__*/_jsx(ResponsiveContainer, {
          width: "100%",
          height: 320,
          children: /*#__PURE__*/_jsxs(LineChart, {
            data: moodTrendData,
            children: [/*#__PURE__*/_jsx(CartesianGrid, {
              strokeDasharray: "3 3",
              stroke: "#E2E8F0"
            }), /*#__PURE__*/_jsx(XAxis, {
              dataKey: "date",
              stroke: "#64748B",
              style: {
                fontSize: 12
              }
            }), /*#__PURE__*/_jsx(YAxis, {
              stroke: "#64748B",
              style: {
                fontSize: 12
              }
            }), /*#__PURE__*/_jsx(Tooltip, {
              contentStyle: {
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
              }
            }), /*#__PURE__*/_jsx(Legend, {}), /*#__PURE__*/_jsx(Line, {
              type: "monotone",
              dataKey: "score",
              stroke: "#10B981",
              strokeWidth: 2,
              dot: {
                fill: "#10B981",
                r: 4
              },
              name: "Mood Score"
            }), /*#__PURE__*/_jsx(Line, {
              type: "monotone",
              dataKey: "anxiety",
              stroke: "#EF4444",
              strokeWidth: 2,
              dot: {
                fill: "#EF4444",
                r: 4
              },
              name: "Anxiety"
            }), /*#__PURE__*/_jsx(Line, {
              type: "monotone",
              dataKey: "energy",
              stroke: "#3B82F6",
              strokeWidth: 2,
              dot: {
                fill: "#3B82F6",
                r: 4
              },
              name: "Energy"
            })]
          })
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "mb-6",
          children: [/*#__PURE__*/_jsx("h3", {
            className: "text-lg font-semibold text-[#0F172A] mb-1",
            children: "Emotion Distribution"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-sm text-[#64748B]",
            children: "Your most common emotions"
          })]
        }), /*#__PURE__*/_jsx(ResponsiveContainer, {
          width: "100%",
          height: 200,
          children: /*#__PURE__*/_jsxs(PieChart, {
            children: [/*#__PURE__*/_jsx(Pie, {
              data: emotionalDistribution,
              cx: "50%",
              cy: "50%",
              innerRadius: 60,
              outerRadius: 80,
              paddingAngle: 2,
              dataKey: "value",
              children: emotionalDistribution.map((entry, index) => /*#__PURE__*/_jsx(Cell, {
                fill: entry.color
              }, `cell-${index}`))
            }), /*#__PURE__*/_jsx(Tooltip, {})]
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "mt-4 space-y-2",
          children: emotionalDistribution.map(item => /*#__PURE__*/_jsxs("div", {
            className: "flex items-center justify-between text-sm",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-3 h-3 rounded-full",
                style: {
                  backgroundColor: item.color
                }
              }), /*#__PURE__*/_jsx("span", {
                className: "text-[#64748B]",
                children: item.name
              })]
            }), /*#__PURE__*/_jsxs("span", {
              className: "font-medium text-[#0F172A]",
              children: [item.value, "%"]
            })]
          }, item.name))
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "mb-6",
          children: [/*#__PURE__*/_jsx("h3", {
            className: "text-lg font-semibold text-[#0F172A] mb-1",
            children: "Weekly Progress"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-sm text-[#64748B]",
            children: "Average scores by week"
          })]
        }), /*#__PURE__*/_jsx(ResponsiveContainer, {
          width: "100%",
          height: 240,
          children: /*#__PURE__*/_jsxs(BarChart, {
            data: weeklyScores,
            children: [/*#__PURE__*/_jsx(CartesianGrid, {
              strokeDasharray: "3 3",
              stroke: "#E2E8F0"
            }), /*#__PURE__*/_jsx(XAxis, {
              dataKey: "week",
              stroke: "#64748B",
              style: {
                fontSize: 12
              }
            }), /*#__PURE__*/_jsx(YAxis, {
              stroke: "#64748B",
              style: {
                fontSize: 12
              }
            }), /*#__PURE__*/_jsx(Tooltip, {
              contentStyle: {
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
              }
            }), /*#__PURE__*/_jsx(Bar, {
              dataKey: "score",
              fill: "#10B981",
              radius: [8, 8, 0, 0]
            })]
          })
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "lg:col-span-2 bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "mb-6",
          children: [/*#__PURE__*/_jsx("h3", {
            className: "text-lg font-semibold text-[#0F172A] mb-1",
            children: "AI Emotional Insights"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-sm text-[#64748B]",
            children: "Patterns and recommendations based on your data"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-4",
            children: /*#__PURE__*/_jsxs("div", {
              className: "flex items-start gap-3",
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-2 h-2 bg-[#10B981] rounded-full mt-2"
              }), /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("div", {
                  className: "text-sm font-medium text-[#0F172A] mb-1",
                  children: "Positive Trend Detected"
                }), /*#__PURE__*/_jsx("p", {
                  className: "text-sm text-[#64748B]",
                  children: "Your overall mood has improved by 12% this month. Morning meditation sessions appear to correlate with better daily scores."
                })]
              })]
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-4",
            children: /*#__PURE__*/_jsxs("div", {
              className: "flex items-start gap-3",
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-2 h-2 bg-[#3B82F6] rounded-full mt-2"
              }), /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("div", {
                  className: "text-sm font-medium text-[#0F172A] mb-1",
                  children: "Pattern Recognition"
                }), /*#__PURE__*/_jsx("p", {
                  className: "text-sm text-[#64748B]",
                  children: "Anxiety levels tend to peak on weekday afternoons. Consider scheduling stress-relief exercises around 2-4 PM."
                })]
              })]
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-4",
            children: /*#__PURE__*/_jsxs("div", {
              className: "flex items-start gap-3",
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-2 h-2 bg-[#F59E0B] rounded-full mt-2"
              }), /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("div", {
                  className: "text-sm font-medium text-[#0F172A] mb-1",
                  children: "Recommendation"
                }), /*#__PURE__*/_jsx("p", {
                  className: "text-sm text-[#64748B]",
                  children: "Your energy levels are highest in mornings. Try scheduling important tasks or exercise sessions before noon."
                })]
              })]
            })
          })]
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "mb-6",
        children: [/*#__PURE__*/_jsx("h3", {
          className: "text-lg font-semibold text-[#0F172A] mb-1",
          children: "Recent Emotional Log"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-sm text-[#64748B]",
          children: "Your mood check-ins and notes"
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "space-y-4",
        children: emotionalHistory.map((entry, index) => /*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-4 pb-4 border-b border-[#E2E8F0] last:border-0",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "text-center min-w-[80px]",
            children: [/*#__PURE__*/_jsx("div", {
              className: "text-sm font-medium text-[#0F172A]",
              children: entry.date
            }), /*#__PURE__*/_jsx("div", {
              className: "text-xs text-[#64748B]",
              children: entry.time
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex-1 flex items-center gap-4",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex-1",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-2 mb-1",
                children: [/*#__PURE__*/_jsx("span", {
                  className: "text-sm font-medium text-[#0F172A]",
                  children: entry.emotion
                }), /*#__PURE__*/_jsxs("span", {
                  className: "text-xs px-2 py-0.5 bg-[#F1F5F9] text-[#64748B] rounded",
                  children: ["Score: ", entry.score]
                })]
              }), /*#__PURE__*/_jsx("p", {
                className: "text-sm text-[#64748B]",
                children: entry.note
              })]
            }), /*#__PURE__*/_jsx("div", {
              className: "flex-1 max-w-[200px]",
              children: /*#__PURE__*/_jsx("div", {
                className: "h-2 bg-[#F1F5F9] rounded-full overflow-hidden",
                children: /*#__PURE__*/_jsx("div", {
                  className: "h-full bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full",
                  style: {
                    width: `${entry.score}%`
                  }
                })
              })
            })]
          })]
        }, index))
      })]
    })]
  });
}