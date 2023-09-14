
import Header from './components/Header'
import Content from './components/Content'
import Buttons from './components/Buttons'
import RegisterForm from './components/RegisterForm'
import './App.css'

function App() {


  return (

    <>
      <div className='h-[100vh] mb-24'>
        <Header />

        <Content />
        <Buttons />

      </div>
      <RegisterForm />

    </>
  )
}

export default App
