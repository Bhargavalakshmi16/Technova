"use client"

import StatCard from "@/components/stat-card"
import LiveClassroomGrid from "@/components/live-classroom-grid"
import AttendanceChart from "@/components/attendance-chart"
import FacultyActivityLog from "@/components/faculty-activity-log"

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Real-time monitoring of classroom operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Classes" value="12" subtitle="Currently in session" icon="📚" trend={8} />
        <StatCard title="Total Students" value="1,240" subtitle="Across all departments" icon="👥" trend={5} />
        <StatCard title="Avg Attendance" value="87%" subtitle="Today's average" icon="⚡" trend={2} />
        <StatCard title="Response Time" value="1.2s" subtitle="System latency" icon="⏱️" trend={-15} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LiveClassroomGrid />
        </div>
        <div>
          <AttendanceChart />
        </div>
      </div>

      <FacultyActivityLog />
    </div>
  )
}
