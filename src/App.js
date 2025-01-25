import React, { useState, useEffect } from "react"
import UserList from "../src/components/UserList"
import AddUserForm from "../src/components/AddUserForm"
import UserDetails from "../src/components/UserDetails"
import GoalTrackingDashboard from "../src/components/GoalTrackingDashboard"
import Modal from "../src/components/Modal"
import "../src/components/style.css"

const App = () => {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Simulating fetching users from an API
    const fetchUsers = async () => {
      // In a real application, you would fetch data from an API here
      const mockUsers = [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          goals: [
            { id: 1, title: "Complete Project A", deadline: "2023-12-31", status: "In Progress" },
            { id: 2, title: "Learn React", deadline: "2023-10-15", status: "Completed" },
          ],
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          goals: [{ id: 3, title: "Finish Course", deadline: "2023-11-30", status: "In Progress" }],
        },
      ]
      setUsers(mockUsers)
    }

    fetchUsers()
  }, [])

  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1, goals: [] }])
  }

  const selectUser = (user) => {
    setSelectedUser(user)
    setShowModal(true)
  }

  const updateUserGoals = (userId, updatedGoals) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, goals: updatedGoals } : user)))
    if (selectedUser && selectedUser.id === userId) {
      setSelectedUser({ ...selectedUser, goals: updatedGoals })
    }
  }

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId))
    if (selectedUser && selectedUser.id === userId) {
      setSelectedUser(null)
      setShowModal(false)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>User Dashboard</h1>
      </header>
      <main className="app-main">
        <GoalTrackingDashboard users={users} />
        <AddUserForm addUser={addUser} />
        <UserList users={users} selectUser={selectUser} deleteUser={deleteUser} />
      </main>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UserDetails user={selectedUser} updateUserGoals={updateUserGoals} />
        </Modal>
      )}
    </div>
  )
}

export default App

