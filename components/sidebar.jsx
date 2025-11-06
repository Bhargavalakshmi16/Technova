"use client"

export default function Sidebar({ currentPage, setCurrentPage }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "classrooms", label: "Classrooms", icon: "🏢" },
    { id: "users", label: "Users", icon: "👥" },
    { id: "faculty-timetable", label: "Faculty Timetable", icon: "👨‍🏫" },
    { id: "student-timetable", label: "Student Timetable", icon: "📚" },
    { id: "analytics", label: "Analytics", icon: "📈" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
  ]

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      console.log("[v0] User logged out")
      alert("Logged out successfully!")
    }
  }

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <span className="text-sidebar-primary-foreground font-bold text-lg">SC</span>
          </div>
          <div>
            <h1 className="text-sidebar-foreground font-bold text-lg">SCFMP</h1>
            <p className="text-sidebar-accent-foreground text-xs">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = currentPage === item.id
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/20"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border space-y-2">
        <button
          onClick={() => setCurrentPage("settings")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            currentPage === "settings"
              ? "bg-sidebar-primary text-sidebar-primary-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent/20"
          }`}
        >
          <span className="text-xl">⚙️</span>
          <span className="font-medium text-sm">Settings</span>
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-red-500/10 hover:text-red-500 transition-colors"
        >
          <span className="text-xl">🚪</span>
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </aside>
  )
}
