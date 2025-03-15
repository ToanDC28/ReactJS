import Greeting from './RenderingWithCondition/GreetingUser'
import './App.css'

function App() {
  return (
    <>
      <Greeting isLogin={false} name="Toan" />
    </>
  )
}

export default App
