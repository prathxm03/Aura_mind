import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertTriangle, TrendingUp, TrendingDown, Activity, Clock } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
const patients = [{
  id: 1,
  name: "Sarah Johnson",
  age: 28,
  riskScore: 35,
  riskLevel: "Low",
  lastActivity: "2 hours ago",
  emotionalState: "Calm",
  trend: "improving"
}, {
  id: 2,
  name: "Michael Chen",
  age: 34,
  riskScore: 68,
  riskLevel: "Medium",
  lastActivity: "5 hours ago",
  emotionalState: "Anxious",
  trend: "stable"
}, {
  id: 3,
  name: "Emily Rodriguez",
  age: 42,
  riskScore: 82,
  riskLevel: "High",
  lastActivity: "30 min ago",
  emotionalState: "Stressed",
  trend: "declining"
}, {
  id: 4,
  name: "David Kim",
  age: 31,
  riskScore: 45,
  riskLevel: "Low-Medium",
  lastActivity: "1 day ago",
  emotionalState: "Neutral",
  trend: "improving"
}, {
  id: 5,
  name: "Jessica Martinez",
  age: 26,
  riskScore: 25,
  riskLevel: "Low",
  lastActivity: "3 hours ago",
  emotionalState: "Happy",
  trend: "stable"
}];
const selectedPatient = patients[0];
const patientRiskTrend = [{
  date: "Feb 8",
  risk: 55
}, {
  date: "Feb 9",
  risk: 52
}, {
  date: "Feb 10",
  risk: 48
}, {
  date: "Feb 11",
  risk: 45
}, {
  date: "Feb 12",
  risk: 42
}, {
  date: "Feb 13",
  risk: 38
}, {
  date: "Feb 14",
  risk: 35
}];
const patientEmotionalTrend = [{
  date: "Feb 8",
  anxiety: 65,
  mood: 45,
  stress: 70
}, {
  date: "Feb 9",
  anxiety: 60,
  mood: 50,
  stress: 65
}, {
  date: "Feb 10",
  anxiety: 55,
  mood: 58,
  stress: 60
}, {
  date: "Feb 11",
  anxiety: 50,
  mood: 65,
  stress: 55
}, {
  date: "Feb 12",
  anxiety: 45,
  mood: 70,
  stress: 50
}, {
  date: "Feb 13",
  anxiety: 40,
  mood: 75,
  stress: 45
}, {
  date: "Feb 14",
  anxiety: 35,
  mood: 82,
  stress: 40
}];
const moodHistory = [{
  date: "Feb 8",
  score: 45
}, {
  date: "Feb 9",
  score: 50
}, {
  date: "Feb 10",
  score: 58
}, {
  date: "Feb 11",
  score: 65
}, {
  date: "Feb 12",
  score: 70
}, {
  date: "Feb 13",
  score: 75
}, {
  date: "Feb 14",
  score: 82
}];
export function DoctorDashboard() {
  return /*#__PURE__*/_jsxs("div", {
    className: "p-8 space-y-8",
    children: [/*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h1", {
        className: "text-3xl font-semibold text-[#0F172A] mb-2",
        children: "Professional Dashboard"
      }), /*#__PURE__*/_jsx("p", {
        className: "text-[#64748B]",
        children: "Patient monitoring and clinical insights"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-4 gap-6",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-sm text-[#64748B]",
            children: "Total Patients"
          }), /*#__PURE__*/_jsx(Activity, {
            className: "w-5 h-5 text-[#10B981]"
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "text-3xl font-semibold text-[#0F172A]",
          children: "124"
        }), /*#__PURE__*/_jsx("div", {
          className: "text-sm text-[#64748B] mt-1",
          children: "Active cases"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-sm text-[#64748B]",
            children: "High Risk"
          }), /*#__PURE__*/_jsx(AlertTriangle, {
            className: "w-5 h-5 text-[#EF4444]"
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "text-3xl font-semibold text-[#EF4444]",
          children: "8"
        }), /*#__PURE__*/_jsx("div", {
          className: "text-sm text-[#64748B] mt-1",
          children: "Requires attention"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-sm text-[#64748B]",
            children: "Improving"
          }), /*#__PURE__*/_jsx(TrendingUp, {
            className: "w-5 h-5 text-[#10B981]"
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "text-3xl font-semibold text-[#10B981]",
          children: "47"
        }), /*#__PURE__*/_jsx("div", {
          className: "text-sm text-[#64748B] mt-1",
          children: "Positive trends"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-sm text-[#64748B]",
            children: "Scheduled Today"
          }), /*#__PURE__*/_jsx(Clock, {
            className: "w-5 h-5 text-[#3B82F6]"
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "text-3xl font-semibold text-[#0F172A]",
          children: "12"
        }), /*#__PURE__*/_jsx("div", {
          className: "text-sm text-[#64748B] mt-1",
          children: "Sessions pending"
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center justify-between mb-6",
          children: [/*#__PURE__*/_jsx("h3", {
            className: "text-lg font-semibold text-[#0F172A]",
            children: "Patient Overview"
          }), /*#__PURE__*/_jsx("button", {
            className: "text-sm text-[#10B981] font-medium hover:underline",
            children: "View All"
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "space-y-3",
          children: patients.map(patient => /*#__PURE__*/_jsxs("div", {
            className: "flex items-center gap-3 p-3 rounded-lg border border-[#E2E8F0] hover:border-[#10B981] cursor-pointer transition-colors",
            children: [/*#__PURE__*/_jsx("div", {
              className: "w-10 h-10 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center flex-shrink-0",
              children: /*#__PURE__*/_jsx("span", {
                className: "text-white text-sm font-medium",
                children: patient.name.split(" ").map(n => n[0]).join("")
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "flex-1 min-w-0",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "text-sm font-medium text-[#0F172A] truncate",
                  children: patient.name
                }), /*#__PURE__*/_jsxs("span", {
                  className: "text-xs text-[#64748B]",
                  children: [patient.age, "y"]
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-2 mt-0.5",
                children: [/*#__PURE__*/_jsx("span", {
                  className: `text-xs px-2 py-0.5 rounded ${patient.riskLevel === "High" ? "bg-[#FEE2E2] text-[#991B1B]" : patient.riskLevel === "Medium" ? "bg-[#FEF3C7] text-[#92400E]" : "bg-[#D1FAE5] text-[#065F46]"}`,
                  children: patient.riskLevel
                }), patient.trend === "improving" && /*#__PURE__*/_jsx(TrendingUp, {
                  className: "w-3 h-3 text-[#10B981]"
                }), patient.trend === "declining" && /*#__PURE__*/_jsx(TrendingDown, {
                  className: "w-3 h-3 text-[#EF4444]"
                })]
              })]
            }), /*#__PURE__*/_jsx("div", {
              className: "text-right text-xs text-[#64748B]",
              children: patient.lastActivity
            })]
          }, patient.id))
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "lg:col-span-2 space-y-6",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex items-start justify-between mb-6",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex items-center gap-4",
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "text-white text-xl font-medium",
                  children: selectedPatient.name.split(" ").map(n => n[0]).join("")
                })
              }), /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("h3", {
                  className: "text-xl font-semibold text-[#0F172A]",
                  children: selectedPatient.name
                }), /*#__PURE__*/_jsxs("p", {
                  className: "text-sm text-[#64748B]",
                  children: ["Age: ", selectedPatient.age, " • Last active: ", selectedPatient.lastActivity]
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "flex gap-2",
              children: [/*#__PURE__*/_jsx("button", {
                className: "px-4 py-2 bg-[#10B981] text-white rounded-lg text-sm font-medium hover:bg-[#059669] transition-colors",
                children: "Schedule Session"
              }), /*#__PURE__*/_jsx("button", {
                className: "px-4 py-2 bg-white border border-[#E2E8F0] text-[#64748B] rounded-lg text-sm font-medium hover:border-[#10B981] hover:text-[#10B981] transition-colors",
                children: "View Notes"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "grid grid-cols-3 gap-4",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "bg-[#F8FAFC] rounded-lg p-4",
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-xs text-[#64748B] mb-1",
                children: "Risk Score"
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex items-end gap-2",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "text-2xl font-semibold text-[#10B981]",
                  children: selectedPatient.riskScore
                }), /*#__PURE__*/_jsx("div", {
                  className: "text-xs text-[#10B981] mb-1",
                  children: "Low"
                })]
              }), /*#__PURE__*/_jsx("div", {
                className: "mt-2 h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden",
                children: /*#__PURE__*/_jsx("div", {
                  className: "h-full bg-[#10B981] rounded-full",
                  style: {
                    width: `${100 - selectedPatient.riskScore}%`
                  }
                })
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "bg-[#F8FAFC] rounded-lg p-4",
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-xs text-[#64748B] mb-1",
                children: "Emotional State"
              }), /*#__PURE__*/_jsx("div", {
                className: "text-2xl font-semibold text-[#0F172A]",
                children: selectedPatient.emotionalState
              }), /*#__PURE__*/_jsx("div", {
                className: "text-xs text-[#10B981] mt-1",
                children: "Stable"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "bg-[#F8FAFC] rounded-lg p-4",
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-xs text-[#64748B] mb-1",
                children: "Trend"
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/_jsx(TrendingUp, {
                  className: "w-6 h-6 text-[#10B981]"
                }), /*#__PURE__*/_jsx("div", {
                  className: "text-2xl font-semibold text-[#10B981]",
                  children: "+18%"
                })]
              }), /*#__PURE__*/_jsx("div", {
                className: "text-xs text-[#64748B] mt-1",
                children: "Improving"
              })]
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
            children: [/*#__PURE__*/_jsx("h4", {
              className: "text-sm font-semibold text-[#0F172A] mb-4",
              children: "Risk Score Trend"
            }), /*#__PURE__*/_jsx(ResponsiveContainer, {
              width: "100%",
              height: 180,
              children: /*#__PURE__*/_jsxs(AreaChart, {
                data: patientRiskTrend,
                children: [/*#__PURE__*/_jsx("defs", {
                  children: /*#__PURE__*/_jsxs("linearGradient", {
                    id: "riskGradient",
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [/*#__PURE__*/_jsx("stop", {
                      offset: "5%",
                      stopColor: "#10B981",
                      stopOpacity: 0.3
                    }), /*#__PURE__*/_jsx("stop", {
                      offset: "95%",
                      stopColor: "#10B981",
                      stopOpacity: 0
                    })]
                  })
                }), /*#__PURE__*/_jsx(CartesianGrid, {
                  strokeDasharray: "3 3",
                  stroke: "#E2E8F0"
                }), /*#__PURE__*/_jsx(XAxis, {
                  dataKey: "date",
                  stroke: "#64748B",
                  style: {
                    fontSize: 11
                  }
                }), /*#__PURE__*/_jsx(YAxis, {
                  stroke: "#64748B",
                  style: {
                    fontSize: 11
                  }
                }), /*#__PURE__*/_jsx(Tooltip, {
                  contentStyle: {
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "8px"
                  }
                }), /*#__PURE__*/_jsx(Area, {
                  type: "monotone",
                  dataKey: "risk",
                  stroke: "#10B981",
                  strokeWidth: 2,
                  fill: "url(#riskGradient)"
                })]
              })
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
            children: [/*#__PURE__*/_jsx("h4", {
              className: "text-sm font-semibold text-[#0F172A] mb-4",
              children: "Mood History"
            }), /*#__PURE__*/_jsx(ResponsiveContainer, {
              width: "100%",
              height: 180,
              children: /*#__PURE__*/_jsxs(BarChart, {
                data: moodHistory,
                children: [/*#__PURE__*/_jsx(CartesianGrid, {
                  strokeDasharray: "3 3",
                  stroke: "#E2E8F0"
                }), /*#__PURE__*/_jsx(XAxis, {
                  dataKey: "date",
                  stroke: "#64748B",
                  style: {
                    fontSize: 11
                  }
                }), /*#__PURE__*/_jsx(YAxis, {
                  stroke: "#64748B",
                  style: {
                    fontSize: 11
                  }
                }), /*#__PURE__*/_jsx(Tooltip, {
                  contentStyle: {
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "8px"
                  }
                }), /*#__PURE__*/_jsx(Bar, {
                  dataKey: "score",
                  fill: "#10B981",
                  radius: [4, 4, 0, 0]
                })]
              })
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
          children: [/*#__PURE__*/_jsx("h4", {
            className: "text-sm font-semibold text-[#0F172A] mb-4",
            children: "Emotional Indicators"
          }), /*#__PURE__*/_jsx(ResponsiveContainer, {
            width: "100%",
            height: 240,
            children: /*#__PURE__*/_jsxs(LineChart, {
              data: patientEmotionalTrend,
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
                  borderRadius: "8px"
                }
              }), /*#__PURE__*/_jsx(Line, {
                type: "monotone",
                dataKey: "anxiety",
                stroke: "#EF4444",
                strokeWidth: 2,
                dot: {
                  fill: "#EF4444",
                  r: 3
                },
                name: "Anxiety"
              }), /*#__PURE__*/_jsx(Line, {
                type: "monotone",
                dataKey: "mood",
                stroke: "#10B981",
                strokeWidth: 2,
                dot: {
                  fill: "#10B981",
                  r: 3
                },
                name: "Mood"
              }), /*#__PURE__*/_jsx(Line, {
                type: "monotone",
                dataKey: "stress",
                stroke: "#F59E0B",
                strokeWidth: 2,
                dot: {
                  fill: "#F59E0B",
                  r: 3
                },
                name: "Stress"
              })]
            })
          })]
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm",
      children: [/*#__PURE__*/_jsx("h3", {
        className: "text-lg font-semibold text-[#0F172A] mb-4",
        children: "AI-Generated Clinical Insights"
      }), /*#__PURE__*/_jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
        children: [/*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h4", {
            className: "text-sm font-semibold text-[#0F172A] mb-3",
            children: "Behavioral Pattern Detection"
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-3",
            children: [/*#__PURE__*/_jsx("div", {
              className: "bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-4",
              children: /*#__PURE__*/_jsxs("div", {
                className: "flex items-start gap-3",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "w-2 h-2 bg-[#10B981] rounded-full mt-2"
                }), /*#__PURE__*/_jsxs("div", {
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "text-sm font-medium text-[#0F172A] mb-1",
                    children: "Positive Coping Strategy"
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-sm text-[#64748B]",
                    children: "Patient consistently uses breathing exercises during high-stress periods, showing improved self-regulation skills."
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
                    children: "Sleep Pattern Improvement"
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-sm text-[#64748B]",
                    children: "Sleep quality metrics have improved by 35% over the past two weeks, correlating with reduced anxiety scores."
                  })]
                })]
              })
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h4", {
            className: "text-sm font-semibold text-[#0F172A] mb-3",
            children: "Risk Alerts & Recommendations"
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-3",
            children: [/*#__PURE__*/_jsx("div", {
              className: "bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-4",
              children: /*#__PURE__*/_jsxs("div", {
                className: "flex items-start gap-3",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "w-2 h-2 bg-[#10B981] rounded-full mt-2"
                }), /*#__PURE__*/_jsxs("div", {
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "text-sm font-medium text-[#0F172A] mb-1",
                    children: "Low Risk Assessment"
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-sm text-[#64748B]",
                    children: "Current risk indicators remain stable. Continue monitoring emotional patterns weekly."
                  })]
                })]
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-4",
              children: /*#__PURE__*/_jsxs("div", {
                className: "flex items-start gap-3",
                children: [/*#__PURE__*/_jsx(AlertTriangle, {
                  className: "w-4 h-4 text-[#F59E0B] mt-0.5"
                }), /*#__PURE__*/_jsxs("div", {
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "text-sm font-medium text-[#0F172A] mb-1",
                    children: "Therapy Recommendation"
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-sm text-[#64748B]",
                    children: "Consider introducing CBT techniques for anxiety management in next session."
                  })]
                })]
              })
            })]
          })]
        })]
      })]
    })]
  });
}