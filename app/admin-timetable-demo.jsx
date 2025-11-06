"use client"

import { useState } from "react"

export default function AdminTimetableDemo() {
  const [timetables, setTimetables] = useState([
    {
      id: 1,
      className: "Class 12-A",
      department: "Science",
      schedule: [
        {
          day: "Monday",
          subject: "Physics",
          faculty: "Dr. Sharma",
          startTime: "09:00",
          endTime: "10:00",
          room: "Lab-101",
        },
        {
          day: "Monday",
          subject: "Chemistry",
          faculty: "Mrs. Patel",
          startTime: "10:15",
          endTime: "11:15",
          room: "Lab-102",
        },
        {
          day: "Tuesday",
          subject: "Biology",
          faculty: "Dr. Kumar",
          startTime: "09:00",
          endTime: "10:00",
          room: "Lab-103",
        },
        {
          day: "Wednesday",
          subject: "Physics",
          faculty: "Dr. Sharma",
          startTime: "10:15",
          endTime: "11:15",
          room: "Lab-101",
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
          day: "Friday",
          subject: "Biology",
          faculty: "Dr. Kumar",
          startTime: "11:30",
          endTime: "12:30",
          room: "Lab-103",
        },
      ],
    },
    {
      id: 2,
      className: "Class 12-B",
      department: "Commerce",
      schedule: [
        {
          day: "Monday",
          subject: "Accounts",
          faculty: "Mr. Singh",
          startTime: "09:00",
          endTime: "10:00",
          room: "Room-201",
        },
        {
          day: "Tuesday",
          subject: "Economics",
          faculty: "Ms. Desai",
          startTime: "10:15",
          endTime: "11:15",
          room: "Room-202",
        },
        {
          day: "Wednesday",
          subject: "Business Studies",
          faculty: "Mr. Gupta",
          startTime: "09:00",
          endTime: "10:00",
          room: "Room-203",
        },
        {
          day: "Thursday",
          subject: "Accounts",
          faculty: "Mr. Singh",
          startTime: "11:30",
          endTime: "12:30",
          room: "Room-201",
        },
        {
          day: "Friday",
          subject: "Economics",
          faculty: "Ms. Desai",
          startTime: "10:15",
          endTime: "11:15",
          room: "Room-202",
        },
      ],
    },
    {
      id: 3,
      className: "Class 11-A",
      department: "Science",
      schedule: [
        {
          day: "Monday",
          subject: "Physics",
          faculty: "Dr. Sharma",
          startTime: "10:15",
          endTime: "11:15",
          room: "Lab-101",
        },
        {
          day: "Tuesday",
          subject: "Chemistry",
          faculty: "Mrs. Patel",
          startTime: "11:30",
          endTime: "12:30",
          room: "Lab-102",
        },
        {
          day: "Wednesday",
          subject: "Biology",
          faculty: "Dr. Kumar",
          startTime: "10:15",
          endTime: "11:15",
          room: "Lab-103",
        },
        {
          day: "Thursday",
          subject: "Math",
          faculty: "Prof. Reddy",
          startTime: "09:00",
          endTime: "10:00",
          room: "Room-301",
        },
        {
          day: "Friday",
          subject: "Physics",
          faculty: "Dr. Sharma",
          startTime: "11:30",
          endTime: "12:30",
          room: "Lab-101",
        },
      ],
    },
  ])

  const [selectedClass, setSelectedClass] = useState(timetables[0])
  const [showAddSession, setShowAddSession] = useState(false)
  const [newSession, setNewSession] = useState({
    day: "Monday",
    subject: "",
    faculty: "",
    startTime: "09:00",
    endTime: "10:00",
    room: "",
  })

  const handleAddSession = () => {
    if (newSession.subject && newSession.faculty && newSession.room) {
      const updatedTimetables = timetables.map((tt) => {
        if (tt.id === selectedClass.id) {
          return { ...tt, schedule: [...tt.schedule, { ...newSession }] }
        }
        return tt
      })
      setTimetables(updatedTimetables)
      setSelectedClass(updatedTimetables.find((tt) => tt.id === selectedClass.id))
      setNewSession({
        day: "Monday",
        subject: "",
        faculty: "",
        startTime: "09:00",
        endTime: "10:00",
        room: "",
      })
      setShowAddSession(false)
      alert("Session added successfully!")
    } else {
      alert("Please fill all fields")
    }
  }

  const handleDeleteSession = (index) => {
    const updatedTimetables = timetables.map((tt) => {
      if (tt.id === selectedClass.id) {
        return { ...tt, schedule: tt.schedule.filter((_, i) => i !== index) }
      }
      return tt
    })
    setTimetables(updatedTimetables)
    setSelectedClass(updatedTimetables.find((tt) => tt.id === selectedClass.id))
  }

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const groupedByDay = days.reduce((acc, day) => {
    acc[day] = selectedClass.schedule.filter((s) => s.day === day)
    return acc
  }, {})

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Timetable Management</h1>
        <p className="text-gray-600 mb-8">Create and manage class timetables for different classes and faculties</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {timetables.map((tt) => (
            <button
              key={tt.id}
              onClick={() => setSelectedClass(tt)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedClass.id === tt.id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-900 border-gray-200 hover:border-blue-400"
              }`}
            >
              <div className="font-bold text-lg">{tt.className}</div>
              <div className="text-sm opacity-75">{tt.department}</div>
              <div className="text-xs opacity-50 mt-1">{tt.schedule.length} sessions</div>
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowAddSession(!showAddSession)}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 mb-6 font-medium"
        >
          {showAddSession ? "Cancel" : "+ Add New Session"}
        </button>

        {showAddSession && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Add New Session</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Day</label>
                <select
                  value={newSession.day}
                  onChange={(e) => setNewSession({ ...newSession, day: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  value={newSession.subject}
                  onChange={(e) => setNewSession({ ...newSession, subject: e.target.value })}
                  placeholder="Physics"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Faculty</label>
                <input
                  type="text"
                  value={newSession.faculty}
                  onChange={(e) => setNewSession({ ...newSession, faculty: e.target.value })}
                  placeholder="Dr. Sharma"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start</label>
                <input
                  type="time"
                  value={newSession.startTime}
                  onChange={(e) => setNewSession({ ...newSession, startTime: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End</label>
                <input
                  type="time"
                  value={newSession.endTime}
                  onChange={(e) => setNewSession({ ...newSession, endTime: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Room</label>
                <input
                  type="text"
                  value={newSession.room}
                  onChange={(e) => setNewSession({ ...newSession, room: e.target.value })}
                  placeholder="Lab-101"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <button
              onClick={handleAddSession}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add Session
            </button>
          </div>
        )}

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
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Faculty</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Room</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessions.map((session, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium">
                            {session.startTime} - {session.endTime}
                          </td>
                          <td className="px-6 py-4 text-sm">{session.subject}</td>
                          <td className="px-6 py-4 text-sm">{session.faculty}</td>
                          <td className="px-6 py-4 text-sm font-mono bg-gray-50 rounded px-2 py-1">{session.room}</td>
                          <td className="px-6 py-4 text-sm">
                            <button
                              onClick={() => handleDeleteSession(selectedClass.schedule.indexOf(session))}
                              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs font-medium"
                            >
                              Delete
                            </button>
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
