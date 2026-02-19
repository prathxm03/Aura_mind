import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { AIAssistant } from "./pages/AIAssistant";
import { ReliefHub } from "./pages/ReliefHub";
import { MoodAnalytics } from "./pages/MoodAnalytics";
import { RequestSupport } from "./pages/RequestSupport";
import { DoctorDashboard } from "./pages/DoctorDashboard";
import { Settings } from "./pages/Settings";
import { Login } from "./pages/Login";
export const router = createBrowserRouter([{
  path: "/login",
  Component: Login
}, {
  path: "/",
  Component: Layout,
  children: [{
    index: true,
    Component: Dashboard
  }, {
    path: "ai-assistant",
    Component: AIAssistant
  }, {
    path: "relief-hub",
    Component: ReliefHub
  }, {
    path: "mood-analytics",
    Component: MoodAnalytics
  }, {
    path: "request-support",
    Component: RequestSupport
  }, {
    path: "doctor-dashboard",
    Component: DoctorDashboard
  }, {
    path: "settings",
    Component: Settings
  }]
}]);