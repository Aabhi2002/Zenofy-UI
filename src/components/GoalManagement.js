import React, { useState } from "react"

const GoalManagement = ({ goals, updateGoals }) => {
  const [newGoal, setNewGoal] = useState({ title: "", deadline: "" })

  const addGoal = (e) => {
    e.preventDefault()
    if (newGoal.title && newGoal.deadline) {
      const updatedGoals = [...goals, { ...newGoal, id: Date.now(), status: "In Progress" }]
      updateGoals(updatedGoals)
      setNewGoal({ title: "", deadline: "" })
    }
  }

  const updateGoal = (id, updates) => {
    const updatedGoals = goals.map((goal) => (goal.id === id ? { ...goal, ...updates } : goal))
    updateGoals(updatedGoals)
  }

  const toggleStatus = (id) => {
    const goal = goals.find((g) => g.id === id)
    updateGoal(id, { status: goal.status === "In Progress" ? "Completed" : "In Progress" })
  }

  return (
    <div className="goal-management">
      <h3 className="section-title">Manage Goals</h3>
      <form onSubmit={addGoal} className="add-goal-form">
        <input
          type="text"
          placeholder="Goal Title"
          value={newGoal.title}
          onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
          required
          className="goal-input"
        />
        <input
          type="date"
          value={newGoal.deadline}
          onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
          required
          className="goal-input"
        />
        <button type="submit" className="add-goal-btn">
          Add Goal
        </button>
      </form>

      <h3 className="section-title">Current Goals</h3>
      <ul className="goal-list">
        {goals.map((goal) => (
          <li key={goal.id} className={`goal ${goal.status.toLowerCase().replace(" ", "-")} goal-item`}>
            <div className="goal-content">
              <h4 className="goal-title">{goal.title}</h4>
              <p className="goal-deadline">Deadline: {goal.deadline}</p>
            </div>
            <div className="goal-actions">
              <input
                type="date"
                value={goal.deadline}
                onChange={(e) => updateGoal(goal.id, { deadline: e.target.value })}
                className="goal-input"
              />
              <button onClick={() => toggleStatus(goal.id)} className="toggle-status">
                {goal.status}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GoalManagement

