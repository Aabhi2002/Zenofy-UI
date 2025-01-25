import React, { useState } from "react"

const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email) {
      addUser({ name, email })
      setName("")
      setEmail("")
    }
  }

  return (
    <div className="add-user-form">
      <h2 className="section-title">Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="user-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="user-input"
        />
        <button type="submit" className="add-user-btn">
          Add User
        </button>
      </form>
    </div>
  )
}

export default AddUserForm

