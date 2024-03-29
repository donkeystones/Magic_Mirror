import './App.css'
import Busstops from './components/busstops'
import Clock from './components/clock'
import Weather from './components/weather'

function App() {

  return (
    <>
      <div className="container">
        <Clock />
        <div className="mid">
          <Weather />
          <Busstops />
        </div>
        <div className="bot"></div>
      </div> 
    </>
  )
}

export default App
