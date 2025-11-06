"use client"

import { useState } from "react"

export default function FacultyTimetable() {
  const facultyList = [
    {
      id: "FAC001",
      name: "Dr. Sharma",
      department: "Science",
      qualification: "Ph.D. in Physics",
    },
    {
      id: "FAC002",
      name: "Prof. Gupta",
      department: "Science",
      qualification: "M.Sc. in Chemistry",
    },
    {
      id: "FAC003",
      name: "Dr. Patel",
      department: "Commerce",
      qualification: "Ph.D. in Economics",
    },
    {
      id: "FAC004",
      name: "Ms. Singh",
      department: "Science",
      qualification: "M.Sc. in Biology",
    },
    {
      id: "FAC005",
      name: "Mr. Kumar",
      department: "Arts",
      qualification: "M.A. in English",
    },
    {
      id: "FAC006",
      name: "Dr. Verma",
      department: "Commerce",
      qualification: "Ph.D. in Accounts",
    },
  ]

  const facultyTimetables = {
    FAC001: [
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
    ],
    FAC002: [
      {
        day: "Monday",
        subject: "Chemistry",
        className: "Class 12-A",
        startTime: "11:30",
        endTime: "12:30",
        room: "Lab-202",
        students: 45,
      },
      {
        day: "Tuesday",
        subject: "Chemistry",
        className: "Class 12-B",
        startTime: "09:00",
        endTime: "10:00",
        room: "Lab-202",
        students: 42,
      },
      {
        day: "Tuesday",
        subject: "Chemistry",
        className: "Class 11-A",
        startTime: "10:15",
        endTime: "11:15",
        room: "Lab-202",
        students: 48,
      },
      {
        day: "Wednesday",
        subject: "Chemistry Lab",
        className: "Class 12-B",
        startTime: "14:00",
        endTime: "15:30",
        room: "Lab-203",
        students: 42,
      },
      {
        day: "Thursday",
        subject: "Chemistry",
        className: "Class 11-A",
        startTime: "11:30",
        endTime: "12:30",
        room: "Lab-202",
        students: 48,
      },
      {
        day: "Friday",
        subject: "Chemistry",
        className: "Class 12-A",
        startTime: "10:15",
        endTime: "11:15",
        room: "Lab-202",
        students: 45,
      },
    ],
    FAC003: [
      {
        day: "Monday",
        subject: "Economics",
        className: "Class 12-C",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-305",
        students: 38,
      },
      {
        day: "Monday",
        subject: "Economics",
        className: "Class 11-C",
        startTime: "10:15",
        endTime: "11:15",
        room: "Room-305",
        students: 40,
      },
      {
        day: "Wednesday",
        subject: "Business Studies",
        className: "Class 12-C",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-305",
        students: 38,
      },
      {
        day: "Thursday",
        subject: "Economics",
        className: "Class 11-C",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-305",
        students: 40,
      },
      {
        day: "Friday",
        subject: "Business Studies",
        className: "Class 12-C",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-305",
        students: 38,
      },
    ],
    FAC004: [
      {
        day: "Tuesday",
        subject: "Biology",
        className: "Class 12-A",
        startTime: "14:00",
        endTime: "15:00",
        room: "Lab-301",
        students: 45,
      },
      {
        day: "Wednesday",
        subject: "Biology",
        className: "Class 12-B",
        startTime: "09:00",
        endTime: "10:00",
        room: "Lab-301",
        students: 42,
      },
      {
        day: "Wednesday",
        subject: "Biology Lab",
        className: "Class 11-A",
        startTime: "14:00",
        endTime: "15:30",
        room: "Lab-302",
        students: 48,
      },
      {
        day: "Thursday",
        subject: "Biology",
        className: "Class 12-A",
        startTime: "10:15",
        endTime: "11:15",
        room: "Lab-301",
        students: 45,
      },
      {
        day: "Friday",
        subject: "Biology",
        className: "Class 12-B",
        startTime: "11:30",
        endTime: "12:30",
        room: "Lab-301",
        students: 42,
      },
    ],
    FAC005: [
      {
        day: "Monday",
        subject: "English",
        className: "Class 12-D",
        startTime: "10:15",
        endTime: "11:15",
        room: "Room-405",
        students: 42,
      },
      {
        day: "Tuesday",
        subject: "English",
        className: "Class 11-D",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-405",
        students: 44,
      },
      {
        day: "Wednesday",
        subject: "English Literature",
        className: "Class 12-D",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-405",
        students: 42,
      },
      {
        day: "Thursday",
        subject: "English",
        className: "Class 11-D",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-405",
        students: 44,
      },
      {
        day: "Friday",
        subject: "English Literature",
        className: "Class 12-D",
        startTime: "10:15",
        endTime: "11:15",
        room: "Room-405",
        students: 42,
      },
    ],
    FAC006: [
      {
        day: "Monday",
        subject: "Accounts",
        className: "Class 12-C",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-306",
        students: 38,
      },
      {
        day: "Tuesday",
        subject: "Accounts",
        className: "Class 12-C",
        startTime: "11:30",
        endTime: "12:30",
        room: "Room-306",
        students: 38,
      },
      {
        day: "Wednesday",
        subject: "Accounts",
        className: "Class 11-C",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-306",
        students: 40,
      },
      {
        day: "Thursday",
        subject: "Accounts",
        className: "Class 11-C",
        startTime: "14:00",
        endTime: "15:00",
        room: "Room-306",
        students: 40,
      },
      {
        day: "Friday",
        subject: "Accounts",
        className: "Class 12-C",
        startTime: "09:00",
        endTime: "10:00",
        room: "Room-306",
        students: 38,
      },
    ],
  }

  const [selectedFacultyId, setSelectedFacultyId] = useState("FAC001")

  const selectedFaculty = facultyList.find((f) => f.id === selectedFacultyId)
  const facultyTimetable = facultyTimetables[selectedFacultyId] || []

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const groupedByDay = days.reduce((acc, day) => {
    acc[day] = facultyTimetable.filter((s) => s.day === day)
    return acc
  }, {})

  const totalClasses = facultyTimetable.length
  const totalStudents = facultyTimetable.reduce((sum, session) => sum + session.students, 0)
  const uniqueClasses = new Set(facultyTimetable.map((s) => s.className)).size

  return (
    <div className="p-8 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Faculty Timetables</h1>
          <p className="text-muted-foreground">Select a faculty member to view their schedule</p>
        </div>

        <div className="mb-8 bg-card border border-border rounded-lg p-6">
          <label className="block text-sm font-semibold text-foreground mb-4">Select Faculty Member</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {facultyList.map((faculty) => (
              <button
                key={faculty.id}
                onClick={() => setSelectedFacultyId(faculty.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedFacultyId === faculty.id
                    ? "border-primary bg-primary/10"
                    : "border-border bg-muted/30 hover:border-primary/50"
                }`}
              >
                <div className="font-semibold text-foreground">{faculty.name}</div>
                <div className="text-sm text-muted-foreground">{faculty.department}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Faculty Info Card */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold">{selectedFaculty.name.split(" ")[1]}</div>
              <div className="text-sm opacity-80">Faculty ID: {selectedFaculty.id}</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Name</div>
              <div className="text-sm opacity-90">{selectedFaculty.name}</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Department</div>
              <div className="text-sm opacity-90">{selectedFaculty.department}</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Qualification</div>
              <div className="text-sm opacity-90">{selectedFaculty.qualification}</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-primary">{totalClasses}</div>
            <div className="text-sm text-muted-foreground mt-2">Classes per Week</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-primary">{uniqueClasses}</div>
            <div className="text-sm text-muted-foreground mt-2">Unique Classes</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-primary">{totalStudents}</div>
            <div className="text-sm text-muted-foreground mt-2">Total Students</div>
          </div>
        </div>

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
                          <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Class</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Room/Lab</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Students</th>
                        </tr>
                      </thead>
                      <tbody>
                        {groupedByDay[day].map((session, index) => (
                          <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                            <td className="px-6 py-4 text-sm text-foreground font-medium">
                              {session.startTime} - {session.endTime}
                            </td>
                            <td className="px-6 py-4 text-sm text-foreground">{session.subject}</td>
                            <td className="px-6 py-4 text-sm text-foreground font-semibold">{session.className}</td>
                            <td className="px-6 py-4 text-sm text-foreground font-mono bg-muted/30 rounded px-3 py-1 w-fit">
                              {session.room}
                            </td>
                            <td className="px-6 py-4 text-sm">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {session.students} students
                              </span>
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
