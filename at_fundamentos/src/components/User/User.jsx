import './User.css'

function User({ name, catchPrhase }) {
  return (
    <div className='user-card'>
      <h2>{name}</h2>
      <p>{catchPrhase}</p>
    </div>
  )
}

export default User