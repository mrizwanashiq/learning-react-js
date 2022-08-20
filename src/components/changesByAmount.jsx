export default function ChangesByAmount({handleClick}) {
  return (
    <form onSubmit={handleClick}>
      <input type='number' name='number' placeholder='Change by Amount'/>
      <button type='submit'>Change by amount</button>
    </form>
  )
}