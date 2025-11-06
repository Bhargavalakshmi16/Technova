"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Dashboard from "@/components/dashboard"
import ClassroomMonitor from "@/components/classroom-monitor"
import UserManagement from "@/components/user-management"
import AnalyticsPage from "@/components/analytics-page"
import NotificationCenter from "@/components/notification-center"
import Settings from "@/components/settings"
import FacultyTimetable from "@/components/faculty-timetable"
import StudentTimetable from "@/components/student-timetable"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("dashboard")

  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-1 overflow-auto">
        {currentPage === "dashboard" && <Dashboard />}
        {currentPage === "classrooms" && <ClassroomMonitor />}
        {currentPage === "users" && <UserManagement />}
        {currentPage === "analytics" && <AnalyticsPage />}
        {currentPage === "notifications" && <NotificationCenter />}
        {currentPage === "settings" && <Settings />}
        {currentPage === "faculty-timetable" && <FacultyTimetable />}
        {currentPage === "student-timetable" && <StudentTimetable />}
      </main>
    </div>
  )
}
