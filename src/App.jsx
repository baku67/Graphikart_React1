import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Fragment } from 'react'

function App() {

  // - Un seul element racine du return (englober dans une div ou utiliser Fragment pour pas avoir de div dans le HTML)
  // - Toutes les balises doivent etre fermées <img></img>, <input></input>, etc... (ou <input /> ...)
  // - Un component est une fonction déclarée en PascalCase

  // Interpolation dans les attributs et contenu de balises:
  const title = "Bonjour les gense"
  const titleClass = "titleClass"

  // Inline style sous forme d'objet style={{color: 'red'}}, et  syntaxe camelCase "backgroundColor"
  const style = {color: "red", backgroundColor: "blue"}

  // Condition:
  const showTitle = true

  // Evenements:
  const handleClick = () => {
    alert("J\'ai cliqué sur le titre");
  }

  // Listings:
  // Chaque element d'une liste doit avoir une clée unique pour mieu manipuler le DOM lors de transformations
  const todos = [
    "Présenter React",
    "Présenter le JSX",
    "Créer des components",
  ]

  // Echappement par défaut. Bad practice: Si on veut ajouter des balises <strong> par exemple, il faut ajouter l'attribut HTML dangerouslySetInnerHTML={{__html:title}}

  
  // <div></div> ou ( <Fragment></Fragment> ou <></> )
  // React onClick = addEventListener (pas comparable au onClick HTML qui est non recommandé)
  return (
    <Fragment>

      {/* Condition simple */}
      {showTitle && <h1 onClick={handleClick} id='title' className={titleClass} style={style}>{title}</h1>}
      {/* Condtion ternaire */}
      {showTitle ? <h1 onClick={handleClick} id='title' className={titleClass} style={style}>{title}</h1> : <p>ShowTitle false</p>}
      
      <SubTitle color="green" hidden id="subTitleId" className="subTitleClass">Sous-titre personalisé</SubTitle>

      <p>Lorem ipsum</p>

      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}
      </ul>

    </Fragment>
  )
}

// Paramètres (props, children)
// ...props = reste des attributs sous forme de tableau pour pouvoir les passer à l'enfant
function SubTitle({color, children, hidden, ...props}) {
  // if (hidden) {
  //   return null
  // }

  return (
    <h2 style={{color: color}} {...props}>{children}</h2>
  )
}

export default App
