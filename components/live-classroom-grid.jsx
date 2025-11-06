"use client"

export default function LiveClassroomGrid() {
  const classrooms = [
    {
      id: 1,
      name: "Lab A - Block 1",
      subject: "Data Structures",
      faculty: "Dr. Sharma",
      students: 42,
      startTime: "09:00 AM",
      status: "active",
    },
    {
      id: 2,
      name: "Hall 201",
      subject: "Web Development",
      faculty: "Prof. Gupta",
      students: 58,
      startTime: "09:30 AM",
      status: "active",
    },
    {
      id: 3,
      name: "Lab C - Block 2",
      subject: "Database Design",
      faculty: "Dr. Patel",
      students: 35,
      startTime: "10:00 AM",
      status: "active",
    },
    {
      id: 4,
      name: "Hall 102",
      subject: "Algorithms",
      faculty: "Prof. Singh",
      students: 0,
      startTime: "--",
      status: "vacant",
    },
    {
      id: 5,
      name: "Lab B - Block 1",
      subject: "Networking",
      faculty: "Dr. Kumar",
      students: 48,
      startTime: "10:30 AM",
      status: "active",
    },
    {
      id: 6,
      name: "Hall 305",
      subject: "AI Basics",
      faculty: "Prof. Verma",
      students: 52,
      startTime: "11:00 AM",
      status: "active",
    },
  ]

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Live Classrooms</h2>
          <p className="text-muted-foreground text-sm mt-1">Real-time classroom status</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-green-600">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {classrooms.map((classroom) => (
          <div
            key={classroom.id}
            className={`p-4 rounded-lg border transition-all ${
              classroom.status === "active" ? "border-primary/50 bg-primary/5" : "border-border bg-muted/30"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-foreground">{classroom.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{classroom.subject}</p>
              </div>
              <div
                className={`w-2 h-2 rounded-full ${classroom.status === "active" ? "bg-green-500" : "bg-gray-400"}`}
              />
            </div>

            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                Faculty: <span className="text-foreground font-medium">{classroom.faculty}</span>
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-lg">👥</span>
                  <span className="text-muted-foreground">{classroom.students} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">⏰</span>
                  <span className="text-muted-foreground">{classroom.startTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
