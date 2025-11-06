"use client"

export default function AttendanceChart() {
  const data = [
    { name: "Present", value: 1078, color: "bg-blue-500" },
    { name: "Absent", value: 102, color: "bg-red-500" },
    { name: "Late", value: 60, color: "bg-yellow-500" },
  ]

  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div>
        <h2 className="text-xl font-bold text-foreground">Today's Attendance</h2>
        <p className="text-muted-foreground text-sm mt-1">1,240 total students</p>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="var(--muted)" strokeWidth="30" />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="30"
              strokeDasharray={`${(1078 / total) * 282.7} 282.7`}
              strokeDashoffset="70.67"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-foreground">87%</span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-sm text-muted-foreground">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-foreground">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
