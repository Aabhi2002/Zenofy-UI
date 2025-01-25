import React, { useState } from "react"

const UserList = ({ users, selectUser, deleteUser }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const sortedUsers = [...filteredUsers].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))

  return (
    <div className="user-list">
      <h2 className="section-title">User List</h2>
      <div className="user-list-controls">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="email">Sort by Email</option>
        </select>
      </div>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id} className="user-item">
            <div className="user-info" onClick={() => selectUser(user)}>
              <strong>{user.name}</strong>
              <br />
              <span className="user-email">{user.email}</span>
              <span className="goal-count">Goals: {user.goals.length}</span>
            </div>
            <button onClick={() => deleteUser(user.id)} className="delete-user-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList

