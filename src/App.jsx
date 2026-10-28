import './App.css'
import Personnel from './personnel.jsx'
import Competences from './competence.jsx'
import Experiences from './experience.jsx'

function App() {
  return (
    <main className="cv-container">
      <Personnel />
      <hr />
      <Competences />
      <hr />
      <Experiences />
    </main>
  )
}

export default App
