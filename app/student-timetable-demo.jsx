"use client"

export default function StudentTimetableDemo() {
  const studentData = {
    id: "STU20240001",
    name: "Aarav Singh",
    className: "Class 12-A",
    rollNo: "01",
    department: "Science",
    email: "aarav@college.edu",
  }

  const timetable = [
    { day: "Monday", subject: "Physics", faculty: "Dr. Sharma", startTime: "09:00", endTime: "10:00", room: "Lab-101" },
    {
      day: "Monday",
      subject: "Chemistry",
      faculty: "Mrs. Patel",
      startTime: "10:15",
      endTime: "11:15",
      room: "Lab-102",
    },
    { day: "Tuesday", subject: "Biology", faculty: "Dr. Kumar", startTime: "09:00", endTime: "10:00", room: "Lab-103" },
    { day: "Tuesday", subject: "Math", faculty: "Prof. Reddy", startTime: "11:30", endTime: "12:30", room: "Room-301" },
    {
      day: "Wednesday",
      subject: "Physics",
      faculty: "Dr. Sharma",
      startTime: "10:15",
      endTime: "11:15",
      room: "Lab-101",
    },
    {
      day: "Wednesday",
      subject: "English",
      faculty: "Ms. Verma",
      startTime: "14:00",
      endTime: "15:00",
      room: "Room-401",
    },
    {
      day: "Thursday",
      subject: "Chemistry",
      faculty: "Mrs. Patel",
      startTime: "09:00",
      endTime: "10:00",
      room: "Lab-102",
    },
    {
      day: "Thursday",
      subject: "History",
      faculty: "Mr. Desai",
      startTime: "10:15",
      endTime: "11:15",
      room: "Room-201",
    },
    { day: "Friday", subject: "Biology", faculty: "Dr. Kumar", startTime: "11:30", endTime: "12:30", room: "Lab-103" },
    {
      day: "Friday",
      subject: "Computer Science",
      faculty: "Mr. Nair",
      startTime: "14:00",
      endTime: "15:00",
      room: "Lab-201",
    },
  ]

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const groupedByDay = days.reduce((acc, day) => {
    acc[day] = timetable.filter((s) => s.day === day)
    return acc
  }, {})

  const totalSubjects = new Set(timetable.map((s) => s.subject)).size

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Class Timetable</h1>
        <p className="text-gray-600 mb-8">Your weekly class schedule</p>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div>
              <div className="text-4xl font-bold">{studentData.rollNo}</div>
              <div className="text-sm opacity-80">Roll No</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Name</div>
              <div className="text-sm opacity-90">{studentData.name}</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Class</div>
              <div className="text-sm opacity-90">{studentData.className}</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Registration</div>
              <div className="text-sm opacity-90">{studentData.id}</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Email</div>
              <div className="text-sm opacity-90">{studentData.email}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-600">{timetable.length}</div>
            <div className="text-sm text-gray-600 mt-2">Classes per Week</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-600">{totalSubjects}</div>
            <div className="text-sm text-gray-600 mt-2">Subjects</div>
          </div>
        </div>

        <div className="space-y-6">
          {Object.entries(groupedByDay).map(
            ([day, sessions]) =>
              sessions.length > 0 && (
                <div key={day} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-purple-600 text-white p-4">
                    <h3 className="text-lg font-bold">{day}</h3>
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100 border-b">
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Time</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Subject</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Faculty</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Room</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessions.map((session, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium">
                            {session.startTime} - {session.endTime}
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold">{session.subject}</td>
                          <td className="px-6 py-4 text-sm">{session.faculty}</td>
                          <td className="px-6 py-4 text-sm font-mono bg-gray-50 rounded px-2 py-1">{session.room}</td>
                          <td className="px-6 py-4 text-sm">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Scheduled
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

        <div className="mt-8 p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <p className="text-sm text-purple-900">
            <strong>Note:</strong> Check for class updates and notifications in your profile. You will be alerted of any
            schedule changes.
          </p>
        </div>
      </div>
    </div>
  )
}
