import React from "react"
import GoalManagement from "./GoalManagement"

const UserDetails = ({ user, updateUserGoals }) => {
  if (!user) return null

  return (
    <div className="user-details">
      <h2>{user.name}'s Goals</h2>
      <p>Email: {user.email}</p>
      <GoalManagement goals={user.goals} updateGoals={(updatedGoals) => updateUserGoals(user.id, updatedGoals)} />
    </div>
  )
}

export default UserDetails

