"use client"

import { useState } from "react"

export default function AllTimetables() {
  const [activeTab, setActiveTab] = useState("faculty")

  // Faculty Timetable Data
  const facultyData = {
    id: "FAC001",
    name: "Dr. Sharma",
    department: "Science",
    qualification: "Ph.D. in Physics",
    timetable: [
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
  }

  // Student Timetable Data
  const studentData = {
    id: "STU20240001",
    name: "Aarav Singh",
    className: "Class 12-A",
    rollNo: "01",
    department: "Science",
    timetable: [
      // Monday
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
      // Tuesday
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
      // Wednesday
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
      // Thursday
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
      // Friday
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
      // Saturday
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
  }

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const groupedTimetable = (timetable) => {
    return days.reduce((acc, day) => {
      acc[day] = timetable.filter((s) => s.day === day)
      return acc
    }, {})
  }

  const FacultyTimetableView = () => {
    const grouped = groupedTimetable(facultyData.timetable)
    const totalClasses = facultyData.timetable.length
    const totalStudents = facultyData.timetable.reduce((sum, session) => sum + session.students, 0)
    const uniqueClasses = new Set(facultyData.timetable.map((s) => s.className)).size

    return (
      <>
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold">{facultyData.name.split(" ")[1]}</div>
              <div className="text-sm opacity-80">Faculty ID: {facultyData.id}</div>
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
          </div>
        </div>

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

        <div className="space-y-6">
          {days.map(
            (day) =>
              grouped[day].length > 0 && (
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
                        {grouped[day].map((session, index) => (
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
      </>
    )
  }

  const StudentTimetableView = () => {
    const grouped = groupedTimetable(studentData.timetable)
    const totalSubjects = new Set(studentData.timetable.map((s) => s.subject)).size

    return (
      <>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600">{studentData.timetable.length}</div>
            <div className="text-sm text-muted-foreground mt-2">Classes per Week</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600">{totalSubjects}</div>
            <div className="text-sm text-muted-foreground mt-2">Subjects</div>
          </div>
        </div>

        <div className="space-y-6">
          {days.map(
            (day) =>
              grouped[day].length > 0 && (
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
                          <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {grouped[day].map((session, index) => (
                          <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                            <td className="px-6 py-4 text-sm text-foreground font-medium">
                              {session.startTime} - {session.endTime}
                            </td>
                            <td className="px-6 py-4 text-sm text-foreground font-semibold">{session.subject}</td>
                            <td className="px-6 py-4 text-sm text-foreground">{session.faculty}</td>
                            <td className="px-6 py-4 text-sm text-foreground font-mono bg-muted/30 rounded px-3 py-1 w-fit">
                              {session.room}
                            </td>
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
                </div>
              ),
          )}
        </div>
      </>
    )
  }

  return (
    <div className="p-8 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Timetable Management</h1>
          <p className="text-muted-foreground mb-6">View Faculty and Student Timetables</p>

          {/* Tab Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("faculty")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "faculty"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:bg-muted"
              }`}
            >
              👨‍🏫 Faculty Timetable
            </button>
            <button
              onClick={() => setActiveTab("student")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "student"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:bg-muted"
              }`}
            >
              👨‍🎓 Student Timetable
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "faculty" && <FacultyTimetableView />}
        {activeTab === "student" && <StudentTimetableView />}
      </div>
    </div>
  )
}
