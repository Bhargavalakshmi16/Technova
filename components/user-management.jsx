"use client"

import { useState } from "react"

export default function UserManagement() {
  const initialUsers = [
    { id: 1, name: "Rahul Sharma", email: "rahul.sharma@college.edu", role: "student", dept: "CSE", regNo: "CSE001" },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya.singh@college.edu",
      role: "faculty",
      dept: "CSE",
      dept_name: "Computer Science",
    },
    { id: 3, name: "Amit Patel", email: "amit.patel@college.edu", role: "student", dept: "ECE", regNo: "ECE001" },
    {
      id: 4,
      name: "Dr. Sharma",
      email: "dr.sharma@college.edu",
      role: "faculty",
      dept: "CSE",
      dept_name: "Computer Science",
    },
    { id: 5, name: "Isha Verma", email: "isha.verma@college.edu", role: "student", dept: "IT", regNo: "IT001" },
    {
      id: 6,
      name: "Prof. Kumar",
      email: "prof.kumar@college.edu",
      role: "faculty",
      dept: "IT",
      dept_name: "Information Technology",
    },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")
  const [users, setUsers] = useState(initialUsers)
  const [editingUser, setEditingUser] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [formData, setFormData] = useState({})

  const handleEditClick = (user) => {
    setEditingUser(user)
    setFormData(user)
    setIsEditModalOpen(true)
  }

  const handleSaveUser = () => {
    setUsers(users.map((user) => (user.id === editingUser.id ? formData : user)))
    setIsEditModalOpen(false)
    setEditingUser(null)
  }

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id))
    }
  }

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === "all" || user.role === selectedRole
    return matchesSearch && matchesRole
  })

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Management</h1>
          <p className="text-muted-foreground mt-1">Manage students, faculty, and admin accounts</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
          <span>➕</span>
          <span>Add User</span>
        </button>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-3 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted cursor-pointer hover:bg-muted/70 transition-colors">
            <span className="text-lg">🔽</span>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="bg-transparent text-foreground font-medium focus:outline-none"
            >
              <option value="all">All Roles</option>
              <option value="student">Students</option>
              <option value="faculty">Faculty</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Email</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Role</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Department</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-4 px-4 text-foreground font-medium">{user.name}</td>
                  <td className="py-4 px-4 text-muted-foreground text-sm">{user.email}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.role === "student"
                          ? "bg-blue-500/10 text-blue-600"
                          : user.role === "faculty"
                            ? "bg-purple-500/10 text-purple-600"
                            : "bg-indigo-500/10 text-indigo-600"
                      }`}
                    >
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground text-sm">{user.dept}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditClick(user)}
                        className="p-2 rounded-lg hover:bg-blue-500/10 transition-colors text-lg"
                        title="Edit user"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="p-2 rounded-lg hover:bg-destructive/10 transition-colors text-lg"
                        title="Delete user"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredUsers.length} of {users.length} users
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
              ⬅️ Previous
            </button>
            <button className="px-3 py-2 rounded-lg bg-primary text-primary-foreground">1</button>
            <button className="px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
              Next ➡️
            </button>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card border border-border rounded-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-foreground mb-6">Edit User</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name || ""}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email || ""}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Role</label>
                <select
                  value={formData.role || ""}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Department</label>
                <input
                  type="text"
                  value={formData.dept || ""}
                  onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveUser}
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
