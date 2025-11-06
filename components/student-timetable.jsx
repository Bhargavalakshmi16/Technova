"use client"

import { useState } from "react"

export default function StudentTimetable() {
  const [classes] = useState([
    {
      id: 1,
      className: "Class 12-A",
      department: "Science",
      totalStudents: 45,
    },
    {
      id: 2,
      className: "Class 12-B",
      department: "Commerce",
      totalStudents: 42,
    },
    {
      id: 3,
      className: "Class 11-A",
      department: "Science",
      totalStudents: 48,
    },
    {
      id: 4,
      className: "Class 11-B",
      department: "Arts",
      totalStudents: 50,
    },
  ])

  const [selectedClass, setSelectedClass] = useState(classes[0])

  const classTimetables = {
    1: [
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
        day: "Monday",
        subject: "Math",
        faculty: "Prof. Reddy",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-301",
      },
      {
        day: "Monday",
        subject: "English",
        faculty: "Ms. Verma",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-401",
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
        day: "Tuesday",
        subject: "Physics",
        faculty: "Dr. Sharma",
        startTime: "10:15",
        endTime: "11:15",
        room: "Lab-101",
      },
      {
        day: "Tuesday",
        subject: "History",
        faculty: "Mr. Desai",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-201",
      },
      {
        day: "Tuesday",
        subject: "Computer Science",
        faculty: "Mr. Nair",
        startTime: "14:00",
        endTime: "15:00",
        room: "Lab-201",
      },

      {
        day: "Wednesday",
        subject: "Chemistry",
        faculty: "Mrs. Patel",
        startTime: "09:00",
        endTime: "10:00",
        room: "Lab-102",
      },
      {
        day: "Wednesday",
        subject: "Math",
        faculty: "Prof. Reddy",
        startTime: "10:15",
        endTime: "11:15",
        room: "Room-301",
      },
      {
        day: "Wednesday",
        subject: "Physical Education",
        faculty: "Coach Mehta",
        startTime: "11:30",
        endTime: "12:30",
        room: "Sports Hall",
      },
      {
        day: "Wednesday",
        subject: "Geography",
        faculty: "Ms. Singh",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-305",
      },

      {
        day: "Thursday",
        subject: "Biology",
        faculty: "Dr. Kumar",
        startTime: "09:00",
        endTime: "10:00",
        room: "Lab-103",
      },
      {
        day: "Thursday",
        subject: "English",
        faculty: "Ms. Verma",
        startTime: "10:15",
        endTime: "11:15",
        room: "Room-401",
      },
      {
        day: "Thursday",
        subject: "Chemistry",
        faculty: "Mrs. Patel",
        startTime: "11:30",
        endTime: "12:30",
        room: "Lab-102",
      },
      {
        day: "Thursday",
        subject: "Economics",
        faculty: "Mr. Gupta",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-402",
      },

      {
        day: "Friday",
        subject: "Physics",
        faculty: "Dr. Sharma",
        startTime: "09:00",
        endTime: "10:00",
        room: "Lab-101",
      },
      {
        day: "Friday",
        subject: "Computer Science",
        faculty: "Mr. Nair",
        startTime: "10:15",
        endTime: "11:15",
        room: "Lab-201",
      },
      {
        day: "Friday",
        subject: "History",
        faculty: "Mr. Desai",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-201",
      },
      {
        day: "Friday",
        subject: "Art & Design",
        faculty: "Ms. Pandey",
        startTime: "14:00",
        endTime: "15:00",
        room: "Art Studio",
      },

      {
        day: "Saturday",
        subject: "Math",
        faculty: "Prof. Reddy",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-301",
      },
      {
        day: "Saturday",
        subject: "Biology Lab",
        faculty: "Dr. Kumar",
        startTime: "10:15",
        endTime: "11:45",
        room: "Lab-103",
      },
      {
        day: "Saturday",
        subject: "Extracurricular Activity",
        faculty: "Various",
        startTime: "14:00",
        endTime: "15:30",
        room: "Multi-Purpose Hall",
      },
    ],
    2: [
      {
        day: "Monday",
        subject: "Accounts",
        faculty: "Mr. Singh",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-201",
      },
      {
        day: "Monday",
        subject: "Economics",
        faculty: "Ms. Desai",
        startTime: "10:15",
        endTime: "11:15",
        room: "Room-202",
      },
      {
        day: "Monday",
        subject: "Business Studies",
        faculty: "Mr. Gupta",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-203",
      },
      {
        day: "Monday",
        subject: "English",
        faculty: "Ms. Verma",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-401",
      },

      {
        day: "Tuesday",
        subject: "Business Studies",
        faculty: "Mr. Gupta",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-203",
      },
      {
        day: "Tuesday",
        subject: "Accounts",
        faculty: "Mr. Singh",
        startTime: "10:15",
        endTime: "11:15",
        room: "Room-201",
      },
      {
        day: "Tuesday",
        subject: "Marketing",
        faculty: "Ms. Joshi",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-204",
      },
      { day: "Tuesday", subject: "Law", faculty: "Mr. Mishra", startTime: "14:00", endTime: "15:00", room: "Room-205" },

      {
        day: "Wednesday",
        subject: "Economics",
        faculty: "Ms. Desai",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-202",
      },
      {
        day: "Wednesday",
        subject: "Secretarial Practice",
        faculty: "Mrs. Chopra",
        startTime: "10:15",
        endTime: "11:15",
        room: "Room-206",
      },
      {
        day: "Wednesday",
        subject: "IT Applications",
        faculty: "Mr. Nair",
        startTime: "11:30",
        endTime: "12:30",
        room: "Lab-201",
      },
      {
        day: "Wednesday",
        subject: "Physical Education",
        faculty: "Coach Mehta",
        startTime: "14:00",
        endTime: "15:00",
        room: "Sports Hall",
      },

      {
        day: "Thursday",
        subject: "Accounts",
        faculty: "Mr. Singh",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-201",
      },
      {
        day: "Thursday",
        subject: "Business Studies",
        faculty: "Mr. Gupta",
        startTime: "10:15",
        endTime: "11:15",
        room: "Room-203",
      },
      {
        day: "Thursday",
        subject: "Economics",
        faculty: "Ms. Desai",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-202",
      },
      {
        day: "Thursday",
        subject: "Hindi",
        faculty: "Mr. Sharma",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-403",
      },

      {
        day: "Friday",
        subject: "Accounts Practical",
        faculty: "Mr. Singh",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-201",
      },
      {
        day: "Friday",
        subject: "Business Studies",
        faculty: "Mr. Gupta",
        startTime: "10:15",
        endTime: "11:15",
        room: "Room-203",
      },
      {
        day: "Friday",
        subject: "Marketing",
        faculty: "Ms. Joshi",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-204",
      },
      {
        day: "Friday",
        subject: "Computer Lab",
        faculty: "Mr. Nair",
        startTime: "14:00",
        endTime: "15:00",
        room: "Lab-201",
      },

      {
        day: "Saturday",
        subject: "Law",
        faculty: "Mr. Mishra",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-205",
      },
      {
        day: "Saturday",
        subject: "Secretarial Practice Lab",
        faculty: "Mrs. Chopra",
        startTime: "10:15",
        endTime: "11:45",
        room: "Room-206",
      },
      {
        day: "Saturday",
        subject: "Cultural Activity",
        faculty: "Various",
        startTime: "14:00",
        endTime: "15:30",
        room: "Auditorium",
      },
    ],
    3: [
      {
        day: "Monday",
        subject: "Physics",
        faculty: "Dr. Sharma",
        startTime: "10:15",
        endTime: "11:15",
        room: "Lab-101",
      },
      {
        day: "Monday",
        subject: "Chemistry",
        faculty: "Mrs. Patel",
        startTime: "11:30",
        endTime: "12:30",
        room: "Lab-102",
      },
      {
        day: "Monday",
        subject: "Math",
        faculty: "Prof. Reddy",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-301",
      },

      {
        day: "Tuesday",
        subject: "Biology",
        faculty: "Dr. Kumar",
        startTime: "10:15",
        endTime: "11:15",
        room: "Lab-103",
      },
      {
        day: "Tuesday",
        subject: "English",
        faculty: "Ms. Verma",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-401",
      },
      {
        day: "Tuesday",
        subject: "History",
        faculty: "Mr. Desai",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-201",
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
        day: "Wednesday",
        subject: "Chemistry",
        faculty: "Mrs. Patel",
        startTime: "11:30",
        endTime: "12:30",
        room: "Lab-102",
      },
      {
        day: "Wednesday",
        subject: "Computer Science",
        faculty: "Mr. Nair",
        startTime: "14:00",
        endTime: "15:00",
        room: "Lab-201",
      },

      {
        day: "Thursday",
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
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-301",
      },
      {
        day: "Thursday",
        subject: "Geography",
        faculty: "Ms. Singh",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-305",
      },

      {
        day: "Friday",
        subject: "Physics Lab",
        faculty: "Dr. Sharma",
        startTime: "10:15",
        endTime: "11:45",
        room: "Lab-101",
      },
      {
        day: "Friday",
        subject: "Chemistry",
        faculty: "Mrs. Patel",
        startTime: "12:00",
        endTime: "13:00",
        room: "Lab-102",
      },
      {
        day: "Friday",
        subject: "Physical Education",
        faculty: "Coach Mehta",
        startTime: "14:00",
        endTime: "15:00",
        room: "Sports Hall",
      },

      {
        day: "Saturday",
        subject: "Biology Lab",
        faculty: "Dr. Kumar",
        startTime: "10:15",
        endTime: "11:45",
        room: "Lab-103",
      },
      {
        day: "Saturday",
        subject: "Math",
        faculty: "Prof. Reddy",
        startTime: "12:00",
        endTime: "13:00",
        room: "Room-301",
      },
      {
        day: "Saturday",
        subject: "Extracurricular Activity",
        faculty: "Various",
        startTime: "14:00",
        endTime: "15:30",
        room: "Multi-Purpose Hall",
      },
    ],
    4: [
      {
        day: "Monday",
        subject: "English",
        faculty: "Ms. Verma",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-401",
      },
      {
        day: "Monday",
        subject: "History",
        faculty: "Mr. Desai",
        startTime: "10:15",
        endTime: "11:15",
        room: "Room-201",
      },
      {
        day: "Monday",
        subject: "Geography",
        faculty: "Ms. Singh",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-305",
      },
      {
        day: "Monday",
        subject: "Political Science",
        faculty: "Mr. Patel",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-303",
      },

      {
        day: "Tuesday",
        subject: "Hindi",
        faculty: "Mr. Sharma",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-403",
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
        day: "Tuesday",
        subject: "Sociology",
        faculty: "Mrs. Rao",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-304",
      },
      {
        day: "Tuesday",
        subject: "Psychology",
        faculty: "Dr. Menon",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-306",
      },

      {
        day: "Wednesday",
        subject: "English Literature",
        faculty: "Ms. Verma",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-401",
      },
      {
        day: "Wednesday",
        subject: "History",
        faculty: "Mr. Desai",
        startTime: "10:15",
        endTime: "11:15",
        room: "Room-201",
      },
      {
        day: "Wednesday",
        subject: "Political Science",
        faculty: "Mr. Patel",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-303",
      },
      {
        day: "Wednesday",
        subject: "Art Appreciation",
        faculty: "Ms. Pandey",
        startTime: "14:00",
        endTime: "15:00",
        room: "Art Studio",
      },

      {
        day: "Thursday",
        subject: "Geography",
        faculty: "Ms. Singh",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-305",
      },
      {
        day: "Thursday",
        subject: "Sociology",
        faculty: "Mrs. Rao",
        startTime: "10:15",
        endTime: "11:15",
        room: "Room-304",
      },
      {
        day: "Thursday",
        subject: "Economics",
        faculty: "Ms. Desai",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-202",
      },
      {
        day: "Thursday",
        subject: "Sanskrit",
        faculty: "Mr. Nair",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-408",
      },

      {
        day: "Friday",
        subject: "English",
        faculty: "Ms. Verma",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-401",
      },
      {
        day: "Friday",
        subject: "Psychology",
        faculty: "Dr. Menon",
        startTime: "10:15",
        endTime: "11:15",
        room: "Room-306",
      },
      {
        day: "Friday",
        subject: "Physical Education",
        faculty: "Coach Mehta",
        startTime: "11:30",
        endTime: "12:30",
        room: "Sports Hall",
      },
      {
        day: "Friday",
        subject: "Library Period",
        faculty: "Librarian",
        startTime: "14:00",
        endTime: "15:00",
        room: "Library",
      },

      {
        day: "Saturday",
        subject: "Debate & Discussion",
        faculty: "Ms. Verma",
        startTime: "09:00",
        endTime: "10:30",
        room: "Auditorium",
      },
      {
        day: "Saturday",
        subject: "Social Service",
        faculty: "Various",
        startTime: "11:00",
        endTime: "12:30",
        room: "Various",
      },
      {
        day: "Saturday",
        subject: "Games & Sports",
        faculty: "Coach Mehta",
        startTime: "14:00",
        endTime: "15:30",
        room: "Sports Complex",
      },
    ],
  }

  const currentTimetable = classTimetables[selectedClass.id]
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const groupedByDay = days.reduce((acc, day) => {
    acc[day] = currentTimetable.filter((s) => s.day === day)
    return acc
  }, {})

  const totalClasses = currentTimetable.length
  const uniqueSubjects = new Set(currentTimetable.map((s) => s.subject)).size

  return (
    <div className="p-8 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Class Timetable</h1>
          <p className="text-muted-foreground">View your class schedule</p>
        </div>

        {/* Class Selection */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {classes.map((classItem) => (
            <button
              key={classItem.id}
              onClick={() => setSelectedClass(classItem)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedClass.id === classItem.id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-card text-card-foreground border-border hover:border-blue-600/50"
              }`}
            >
              <div className="font-bold text-lg">{classItem.className}</div>
              <div className="text-sm opacity-75">{classItem.department}</div>
              <div className="text-xs opacity-50 mt-1">{classItem.totalStudents} Students</div>
            </button>
          ))}
        </div>

        {/* Class Info Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-lg font-semibold">Class</div>
              <div className="text-2xl font-bold">{selectedClass.className}</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Department</div>
              <div className="text-2xl font-bold">{selectedClass.department}</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Total Students</div>
              <div className="text-2xl font-bold">{selectedClass.totalStudents}</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600">{totalClasses}</div>
            <div className="text-sm text-muted-foreground mt-2">Classes per Week</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600">{uniqueSubjects}</div>
            <div className="text-sm text-muted-foreground mt-2">Different Subjects</div>
          </div>
        </div>

        {/* Timetable View by Days */}
        <div className="space-y-6">
          {days.map(
            (day) =>
              groupedByDay[day].length > 0 && (
                <div key={day} className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="bg-blue-600 text-white p-4">
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
                        </tr>
                      </thead>
                      <tbody>
                        {groupedByDay[day].map((session, index) => (
                          <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                            <td className="px-6 py-4 text-sm text-foreground font-medium">
                              {session.startTime} - {session.endTime}
                            </td>
                            <td className="px-6 py-4 text-sm text-foreground font-semibold">{session.subject}</td>
                            <td className="px-6 py-4 text-sm text-foreground">{session.faculty}</td>
                            <td className="px-6 py-4 text-sm text-foreground font-mono bg-muted/30 rounded px-3 py-1 w-fit">
                              {session.room}
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
