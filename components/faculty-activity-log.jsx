"use client"

export default function FacultyActivityLog() {
  const activities = [
    {
      id: 1,
      faculty: "Dr. Sharma",
      action: "Started class session",
      subject: "Data Structures",
      time: "09:00 AM",
      status: "success",
    },
    {
      id: 2,
      faculty: "Prof. Gupta",
      action: "Marked attendance",
      subject: "Web Development",
      time: "09:15 AM",
      status: "success",
    },
    {
      id: 3,
      faculty: "Dr. Patel",
      action: "Syllabus alert - Only 60% covered",
      subject: "Database Design",
      time: "09:30 AM",
      status: "warning",
    },
    {
      id: 4,
      faculty: "Prof. Singh",
      action: "Submitted session summary",
      subject: "Algorithms",
      time: "09:45 AM",
      status: "success",
    },
    {
      id: 5,
      faculty: "Dr. Kumar",
      action: "Started class session",
      subject: "Networking",
      time: "10:00 AM",
      status: "success",
    },
    {
      id: 6,
      faculty: "Prof. Verma",
      action: "Attendance marking incomplete",
      subject: "AI Basics",
      time: "10:15 AM",
      status: "warning",
    },
  ]

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground">Faculty Activity Log</h2>
        <p className="text-muted-foreground text-sm mt-1">Real-time tracking of faculty operations</p>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-start gap-4 flex-1">
              <div className="mt-1 text-xl">{activity.status === "success" ? "✅" : "⚠️"}</div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{activity.faculty}</p>
                <p className="text-sm text-muted-foreground">{activity.action}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.subject}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>⏱️</span>
              <span>{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
