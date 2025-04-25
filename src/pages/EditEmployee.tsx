import React from "react"
import "../styles/EditEmployee.css"

export const EditEmployee = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <div className="modal">
      <form onSubmit={handleSubmit}></form>
    </div>
  )
}
