"use client"

import StatCard from "@/components/stat-card"

export default function ClassroomMonitor() {
  const classrooms = [
    {
      id: 1,
      name: "Lab A - Block 1",
      capacity: 50,
      current: 42,
      occupancy: 84,
      subject: "Data Structures",
      faculty: "Dr. Sharma",
      startTime: "09:00",
      endTime: "10:30",
      status: "active",
    },
    {
      id: 2,
      name: "Hall 201",
      capacity: 100,
      current: 58,
      occupancy: 58,
      subject: "Web Development",
      faculty: "Prof. Gupta",
      startTime: "09:30",
      endTime: "11:00",
      status: "active",
    },
    {
      id: 3,
      name: "Lab C - Block 2",
      capacity: 40,
      current: 35,
      occupancy: 87,
      subject: "Database Design",
      faculty: "Dr. Patel",
      startTime: "10:00",
      endTime: "11:30",
      status: "active",
    },
    {
      id: 4,
      name: "Hall 102",
      capacity: 60,
      current: 0,
      occupancy: 0,
      subject: "Algorithms",
      faculty: "Prof. Singh",
      startTime: "--",
      endTime: "--",
      status: "vacant",
    },
  ]

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Classroom Monitoring</h1>
        <p className="text-muted-foreground mt-1">Real-time monitoring and management of all classrooms</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Active Classrooms" value="3" subtitle="Sessions ongoing" icon="📚" trend={0} />
        <StatCard title="Total Capacity" value="250" subtitle="Seats available" icon="📍" trend={0} />
        <StatCard title="Avg Occupancy" value="82%" subtitle="Classroom usage" icon="👥" trend={3} />
        <StatCard title="Peak Hours" value="09:00 - 11:30" subtitle="Busiest time" icon="📈" />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">All Classrooms</h2>
        {classrooms.map((classroom) => (
          <div
            key={classroom.id}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">{classroom.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{classroom.subject}</p>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  classroom.status === "active" ? "bg-green-500/10 text-green-600" : "bg-gray-500/10 text-gray-600"
                }`}
              >
                {classroom.status === "active" ? "Active" : "Vacant"}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <div>
                <p className="text-muted-foreground text-xs font-medium">Faculty</p>
                <p className="text-foreground font-semibold mt-1">{classroom.faculty}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium">Occupancy</p>
                <p className="text-foreground font-semibold mt-1">
                  {classroom.current}/{classroom.capacity}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium">Usage</p>
                <p className="text-foreground font-semibold mt-1">{classroom.occupancy}%</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium">Start Time</p>
                <p className="text-foreground font-semibold mt-1">{classroom.startTime}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium">End Time</p>
                <p className="text-foreground font-semibold mt-1">{classroom.endTime}</p>
              </div>
            </div>

            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${classroom.occupancy}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
