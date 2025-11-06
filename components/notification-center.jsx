"use client"

import { useState } from "react"

export default function NotificationCenter() {
  const initialNotifications = [
    {
      id: 1,
      title: "Syllabus Alert",
      message: "Dr. Patel - Database Design course is only 60% complete. Exam in 2 weeks.",
      type: "warning",
      time: "2 hours ago",
      isRead: false,
    },
    {
      id: 2,
      title: "Low Attendance",
      message: "Rahul Sharma (CSE001) attendance dropped below 75%. Current: 72%",
      type: "alert",
      time: "4 hours ago",
      isRead: false,
    },
    {
      id: 3,
      title: "Class Rescheduled",
      message: "Web Development (Hall 201) moved from 9:30 AM to 2:00 PM on Friday",
      type: "info",
      time: "6 hours ago",
      isRead: false,
    },
    {
      id: 4,
      title: "Faculty Marked Absent",
      message: "Prof. Gupta did not start Web Development session at 9:30 AM",
      type: "alert",
      time: "8 hours ago",
      isRead: false,
    },
    {
      id: 5,
      title: "System Update",
      message: "Attendance module updated with new QR verification system",
      type: "success",
      time: "1 day ago",
      isRead: true,
    },
  ]

  const [notifications, setNotifications] = useState(initialNotifications)

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, isRead: true })))
  }

  const handleRemoveNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id))
  }

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map((notif) => (notif.id === id ? { ...notif, isRead: true } : notif)))
  }

  const unreadCount = notifications.filter((n) => !n.isRead).length

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
          <p className="text-muted-foreground mt-1">
            {unreadCount > 0
              ? `${unreadCount} unread notification${unreadCount !== 1 ? "s" : ""}`
              : "All notifications read"}
          </p>
        </div>
        <button
          onClick={handleMarkAllAsRead}
          disabled={unreadCount === 0}
          className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Mark all as read
        </button>
      </div>

      {notifications.length === 0 ? (
        <div className="bg-card border border-border rounded-lg p-12 text-center">
          <p className="text-muted-foreground text-lg">No notifications</p>
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => handleMarkAsRead(notification.id)}
              className={`bg-card border rounded-lg p-6 flex items-start gap-4 cursor-pointer transition-all ${
                !notification.isRead ? "border-l-4 border-l-primary" : ""
              } ${
                notification.type === "warning"
                  ? "border-yellow-500/30 bg-yellow-500/5"
                  : notification.type === "alert"
                    ? "border-red-500/30 bg-red-500/5"
                    : notification.type === "success"
                      ? "border-green-500/30 bg-green-500/5"
                      : "border-blue-500/30 bg-blue-500/5"
              } hover:shadow-md`}
            >
              <div className="text-2xl">
                {notification.type === "warning" && "⚠️"}
                {notification.type === "alert" && "🔴"}
                {notification.type === "success" && "✅"}
                {notification.type === "info" && "⏰"}
              </div>

              <div className="flex-1">
                <h3
                  className={`font-semibold ${!notification.isRead ? "text-foreground font-bold" : "text-muted-foreground"}`}
                >
                  {notification.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{notification.message}</p>
                <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
              </div>

              {!notification.isRead && <span className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0" />}

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemoveNotification(notification.id)
                }}
                className="p-2 rounded-lg hover:bg-destructive/10 transition-colors text-lg flex-shrink-0"
                title="Remove notification"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
