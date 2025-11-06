"use client"

import { useState } from "react"

export default function TimetableManagement() {
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
  const [editingId, setEditingId] = useState(null)

  const handleAddSession = () => {
    if (newSession.subject && newSession.faculty && newSession.room) {
      const updatedTimetables = timetables.map((tt) => {
        if (tt.id === selectedClass.id) {
          return {
            ...tt,
            schedule: [...tt.schedule, { ...newSession }],
          }
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
    }
  }

  const handleDeleteSession = (index) => {
    const updatedTimetables = timetables.map((tt) => {
      if (tt.id === selectedClass.id) {
        return {
          ...tt,
          schedule: tt.schedule.filter((_, i) => i !== index),
        }
      }
      return tt
    })
    setTimetables(updatedTimetables)
    setSelectedClass(updatedTimetables.find((tt) => tt.id === selectedClass.id))
  }

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const groupedByDay = days.reduce((acc, day) => {
    acc[day] = selectedClass.schedule.filter((s) => s.day === day)
    return acc
  }, {})

  return (
    <div className="p-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Timetable Management</h1>
          <p className="text-muted-foreground">
            Create and manage class timetables for different classes and faculties
          </p>
        </div>

        {/* Class Selection */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {timetables.map((tt) => (
            <button
              key={tt.id}
              onClick={() => setSelectedClass(tt)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedClass.id === tt.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-card-foreground border-border hover:border-primary/50"
              }`}
            >
              <div className="font-bold text-lg">{tt.className}</div>
              <div className="text-sm opacity-75">{tt.department}</div>
              <div className="text-xs opacity-50 mt-1">{tt.schedule.length} sessions/week</div>
            </button>
          ))}
        </div>

        {/* Add Session Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowAddSession(!showAddSession)}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            {showAddSession ? "Cancel" : "+ Add New Session"}
          </button>
        </div>

        {/* Add Session Form */}
        {showAddSession && (
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-foreground mb-4">Add New Session</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Day</label>
                <select
                  value={newSession.day}
                  onChange={(e) => setNewSession({ ...newSession, day: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  value={newSession.subject}
                  onChange={(e) => setNewSession({ ...newSession, subject: e.target.value })}
                  placeholder="e.g., Physics"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Faculty Name</label>
                <input
                  type="text"
                  value={newSession.faculty}
                  onChange={(e) => setNewSession({ ...newSession, faculty: e.target.value })}
                  placeholder="e.g., Dr. Sharma"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Start Time</label>
                <input
                  type="time"
                  value={newSession.startTime}
                  onChange={(e) => setNewSession({ ...newSession, startTime: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">End Time</label>
                <input
                  type="time"
                  value={newSession.endTime}
                  onChange={(e) => setNewSession({ ...newSession, endTime: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Room/Lab</label>
                <input
                  type="text"
                  value={newSession.room}
                  onChange={(e) => setNewSession({ ...newSession, room: e.target.value })}
                  placeholder="e.g., Lab-101"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <button
              onClick={handleAddSession}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Add Session
            </button>
          </div>
        )}

        {/* Timetable View by Days */}
        <div className="space-y-6">
          {days.map(
            (day) =>
              groupedByDay[day].length > 0 && (
                <div key={day} className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="bg-primary text-primary-foreground p-4">
                    <h3 className="text-lg font-bold">{day}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-muted border-b border-border">
                          <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Time</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Subject</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Faculty</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Room/Lab</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {groupedByDay[day].map((session, index) => (
                          <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                            <td className="px-6 py-4 text-sm text-foreground font-medium">
                              {session.startTime} - {session.endTime}
                            </td>
                            <td className="px-6 py-4 text-sm text-foreground">{session.subject}</td>
                            <td className="px-6 py-4 text-sm text-foreground">{session.faculty}</td>
                            <td className="px-6 py-4 text-sm text-foreground font-mono bg-muted/30 rounded px-3 py-1 w-fit">
                              {session.room}
                            </td>
                            <td className="px-6 py-4 text-sm">
                              <button
                                onClick={() => handleDeleteSession(selectedClass.schedule.indexOf(session))}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-xs font-medium"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  )
}
