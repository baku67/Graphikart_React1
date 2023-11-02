import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Fragment } from 'react'

function App() {

  // Form 1 (controlé par REACT), permet de rerendre le DOM (dynamisme pendant la frappe par exemple)
  let [firstName, setFirstName] = useState("Basile")

  const handleChange = (e) => {
    setFirstName(e.target.value)
  }

  const clearInput = () => {
    setFirstName('')
  }

  let [checked, setChecked] = useState(false)
  const toggleCheck = () => {
    setChecked(!checked)
  }


  // Form 2 (non controlé par REACT)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(new FormData(e.target))
    console.log(new FormData(e.target).get('firstName2'))
  }



  
  return (
    <Fragment>
      <h1>Forms</h1>


      <h2>Form controlé par REACT</h2>
      <form>
        <input onChange={handleChange} type="text" name="firstName" value={firstName}></input>
        {firstName}

        <br></br>
        <button onClick={clearInput} type="button">Clear</button>
      </form>


      <h2>Form non controlé par REACT (libre)</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName2" defaultValue="default"></input>

        <br></br>
        Check <input type="checkbox" checked={checked} onChange={toggleCheck}></input>

        <button disabled={!checked}>Envoyer</button>
      </form>


    </Fragment>
  )
}


export default App
