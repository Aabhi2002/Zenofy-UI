import React from "react"

const GoalTrackingDashboard = ({ users }) => {
  const totalGoals = users.reduce((sum, user) => sum + user.goals.length, 0)
  const completedGoals = users.reduce(
    (sum, user) => sum + user.goals.filter((goal) => goal.status === "Completed").length,
    0,
  )
  const completionPercentage = totalGoals > 0 ? ((completedGoals / totalGoals) * 100).toFixed(2) : 0

  return (
    <div className="goal-tracking-dashboard">
      <h2 className="section-title">Goal Tracking Dashboard</h2>
      <div className="dashboard-stats">
        <div className="stat">
          <span className="stat-value">{totalGoals}</span>
          <span className="stat-label">Total Goals</span>
        </div>
        <div className="stat">
          <span className="stat-value">{completedGoals}</span>
          <span className="stat-label">Completed Goals</span>
        </div>
        <div className="stat">
          <span className="stat-value">{completionPercentage}%</span>
          <span className="stat-label">Completion Rate</span>
        </div>
      </div>
    </div>
  )
}

export default GoalTrackingDashboard

