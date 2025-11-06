"use client"

export default function FacultyTimetableDemo() {
  const facultyData = {
    id: "FAC001",
    name: "Dr. Sharma",
    department: "Science",
    qualification: "Ph.D. in Physics",
    email: "sharma@college.edu",
    phone: "+91-9876543210",
  }

  const timetable = [
    {
      day: "Monday",
      subject: "Physics",
      className: "Class 12-A",
      startTime: "09:00",
      endTime: "10:00",
      room: "Lab-101",
      students: 45,
    },
    {
      day: "Monday",
      subject: "Physics",
      className: "Class 12-B",
      startTime: "10:15",
      endTime: "11:15",
      room: "Lab-101",
      students: 42,
    },
    {
      day: "Tuesday",
      subject: "Physics",
      className: "Class 11-A",
      startTime: "10:15",
      endTime: "11:15",
      room: "Lab-101",
      students: 48,
    },
    {
      day: "Wednesday",
      subject: "Physics",
      className: "Class 12-A",
      startTime: "10:15",
      endTime: "11:15",
      room: "Lab-101",
      students: 45,
    },
    {
      day: "Thursday",
      subject: "Physics Lab",
      className: "Class 12-B",
      startTime: "11:30",
      endTime: "12:30",
      room: "Lab-102",
      students: 42,
    },
    {
      day: "Friday",
      subject: "Physics",
      className: "Class 11-A",
      startTime: "11:30",
      endTime: "12:30",
      room: "Lab-101",
      students: 48,
    },
  ]

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const groupedByDay = days.reduce((acc, day) => {
    acc[day] = timetable.filter((s) => s.day === day)
    return acc
  }, {})

  const totalClasses = timetable.length
  const totalStudents = timetable.reduce((sum, s) => sum + s.students, 0)

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Faculty Timetable</h1>
        <p className="text-gray-600 mb-8">View your assigned classes and schedule</p>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div>
              <div className="text-4xl font-bold">{facultyData.name.split(" ")[1]}</div>
              <div className="text-sm opacity-80">ID: {facultyData.id}</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Name</div>
              <div className="text-sm opacity-90">{facultyData.name}</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Department</div>
              <div className="text-sm opacity-90">{facultyData.department}</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Qualification</div>
              <div className="text-sm opacity-90">{facultyData.qualification}</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Email</div>
              <div className="text-sm opacity-90">{facultyData.email}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600">{totalClasses}</div>
            <div className="text-sm text-gray-600 mt-2">Classes per Week</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600">{new Set(timetable.map((s) => s.className)).size}</div>
            <div className="text-sm text-gray-600 mt-2">Unique Classes</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600">{totalStudents}</div>
            <div className="text-sm text-gray-600 mt-2">Total Students</div>
          </div>
        </div>

        <div className="space-y-6">
          {Object.entries(groupedByDay).map(
            ([day, sessions]) =>
              sessions.length > 0 && (
                <div key={day} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-blue-600 text-white p-4">
                    <h3 className="text-lg font-bold">{day}</h3>
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100 border-b">
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Time</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Subject</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Class</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Room</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Students</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessions.map((session, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium">
                            {session.startTime} - {session.endTime}
                          </td>
                          <td className="px-6 py-4 text-sm">{session.subject}</td>
                          <td className="px-6 py-4 text-sm font-semibold">{session.className}</td>
                          <td className="px-6 py-4 text-sm font-mono bg-gray-50 rounded px-2 py-1">{session.room}</td>
                          <td className="px-6 py-4 text-sm">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {session.students}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  )
}
