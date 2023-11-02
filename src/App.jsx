import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Fragment } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const countIncr = () => {
    setCount(count + 1)
  }



  let [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 18,
  })

  // Pas de "mutation" en REACT
  const ageIncr = () => {
    // "récupère toutes les propriétés de l'objet person original, et change la valeur de age"
    setPerson({...person, age: person.age +1})
  }


  
  return (
    <Fragment>
      <h1>HOOK: useState</h1>

      <p>Compteur: {count}</p>
      <button onClick={countIncr}>Incrémenter le compteur</button>


      <p>Personne: {person.firstName} {person.lastName} ({person.age}ans)</p>
      <button onClick={ageIncr}>+1 an</button> 

    </Fragment>
  )
}


export default App
