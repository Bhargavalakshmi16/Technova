"use client"

export default function AnalyticsPage() {
  const attendanceData = [
    { day: "Mon", present: 92, absent: 8 },
    { day: "Tue", present: 95, absent: 5 },
    { day: "Wed", present: 98, absent: 2 },
    { day: "Thu", present: 90, absent: 10 },
    { day: "Fri", present: 87, absent: 13 },
  ]

  const syllabusData = [
    { course: "Data Structures", completed: 65 },
    { course: "Web Development", completed: 78 },
    { course: "Database Design", completed: 60 },
    { course: "Algorithms", completed: 85 },
    { course: "Networking", completed: 72 },
  ]

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics & Reports</h1>
          <p className="text-muted-foreground mt-1">Detailed insights into classroom and attendance metrics</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
          <span>📥</span>
          <span>Export Report</span>
        </button>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-input w-fit">
        <span className="text-lg">📅</span>
        <select className="bg-transparent text-foreground font-medium focus:outline-none">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last Quarter</option>
          <option>Last Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">Weekly Attendance Trends (%)</h2>
          <div className="space-y-4">
            {attendanceData.map((data, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{data.day}</span>
                  <span className="text-sm text-muted-foreground">{data.present}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-green-500 h-full rounded-full transition-all"
                    style={{ width: `${data.present}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">Syllabus Completion Status (%)</h2>
          <div className="space-y-4">
            {syllabusData.map((data, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{data.course}</span>
                  <span className="text-sm text-muted-foreground">{data.completed}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-blue-500 h-full rounded-full transition-all"
                    style={{ width: `${data.completed}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-6">Faculty Punctuality Report (Weekly)</h2>
        <div className="space-y-6">
          {[
            { week: "Week 1", onTime: 95, late: 5 },
            { week: "Week 2", onTime: 92, late: 8 },
            { week: "Week 3", onTime: 98, late: 2 },
            { week: "Week 4", onTime: 94, late: 6 },
          ].map((data, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{data.week}</span>
                <div className="flex gap-4 text-sm">
                  <span className="text-green-500">On Time: {data.onTime}%</span>
                  <span className="text-red-500">Late: {data.late}%</span>
                </div>
              </div>
              <div className="flex h-3 rounded-full overflow-hidden gap-1">
                <div className="bg-green-500 rounded-full" style={{ width: `${data.onTime}%` }} />
                <div className="bg-red-500 rounded-full" style={{ width: `${data.late}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-muted-foreground text-sm font-medium">Department Wise Attendance</p>
          <h3 className="text-3xl font-bold text-foreground mt-2">87.4%</h3>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">CSE</span>
              <span className="text-foreground font-medium">89%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">ECE</span>
              <span className="text-foreground font-medium">86%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">IT</span>
              <span className="text-foreground font-medium">87%</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-muted-foreground text-sm font-medium">Classroom Utilization</p>
          <h3 className="text-3xl font-bold text-foreground mt-2">82%</h3>
          <div className="mt-4">
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all" style={{ width: "82%" }} />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Average daily occupancy</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-muted-foreground text-sm font-medium">Total Sessions This Week</p>
          <h3 className="text-3xl font-bold text-foreground mt-2">156</h3>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Completed</span>
              <span className="text-green-500 font-medium">148</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Cancelled</span>
              <span className="text-red-500 font-medium">8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
