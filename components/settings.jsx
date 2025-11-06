"use client"

import { useState } from "react"

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsAlerts: false,
    weeklyReports: true,
    darkMode: true,
    lowAttendanceThreshold: 75,
    autoMarkAttendance: false,
  })

  const [savedMessage, setSavedMessage] = useState("")

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleInputChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSaveSettings = () => {
    setSavedMessage("Settings saved successfully!")
    setTimeout(() => setSavedMessage(""), 3000)
    console.log("[v0] Settings saved:", settings)
  }

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Configure admin dashboard preferences</p>
      </div>

      {savedMessage && (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-600">{savedMessage}</div>
      )}

      <div className="grid grid-cols-1 gap-8">
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">Notifications</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <h3 className="font-medium text-foreground">Email Notifications</h3>
                <p className="text-sm text-muted-foreground mt-1">Receive alerts via email</p>
              </div>
              <button
                onClick={() => handleToggle("emailNotifications")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.emailNotifications ? "bg-primary" : "bg-muted"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.emailNotifications ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <h3 className="font-medium text-foreground">SMS Alerts</h3>
                <p className="text-sm text-muted-foreground mt-1">Receive critical alerts via SMS</p>
              </div>
              <button
                onClick={() => handleToggle("smsAlerts")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.smsAlerts ? "bg-primary" : "bg-muted"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.smsAlerts ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-foreground">Weekly Reports</h3>
                <p className="text-sm text-muted-foreground mt-1">Send weekly summary reports</p>
              </div>
              <button
                onClick={() => handleToggle("weeklyReports")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.weeklyReports ? "bg-primary" : "bg-muted"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.weeklyReports ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">Attendance Settings</h2>
          <div className="space-y-6">
            <div className="pb-4 border-b border-border">
              <h3 className="font-medium text-foreground mb-2">Low Attendance Threshold (%)</h3>
              <p className="text-sm text-muted-foreground mb-3">Alert when attendance drops below this percentage</p>
              <input
                type="number"
                min="0"
                max="100"
                value={settings.lowAttendanceThreshold}
                onChange={(e) => handleInputChange("lowAttendanceThreshold", Number.parseInt(e.target.value))}
                className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-foreground">Auto-mark Attendance</h3>
                <p className="text-sm text-muted-foreground mt-1">Automatically mark attendance from QR codes</p>
              </div>
              <button
                onClick={() => handleToggle("autoMarkAttendance")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.autoMarkAttendance ? "bg-primary" : "bg-muted"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.autoMarkAttendance ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">Appearance</h2>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-foreground">Dark Mode</h3>
              <p className="text-sm text-muted-foreground mt-1">Use dark theme for dashboard</p>
            </div>
            <button
              onClick={() => handleToggle("darkMode")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.darkMode ? "bg-primary" : "bg-muted"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.darkMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-foreground">
          Reset to Defaults
        </button>
        <button
          onClick={handleSaveSettings}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          Save Settings
        </button>
      </div>
    </div>
  )
}
