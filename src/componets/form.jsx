import React from 'react'

function handleSubmit(e) {
  e.preventDefault()
  console.log(e.target.name.value)
  console.log(e.target.email.value)
  console.log(e.target.password.value)
}
function form() {
  return (
    <div>
      <div>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default form
