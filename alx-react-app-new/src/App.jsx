import React from 'react'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import MainContent from './components/MainContent'
import Footer from '../alx-react-app/src/components/Flav'
import Counter from './components/Counter'

function App() {
  return (
    <>
<Header/>
<UserProfile name="Don", age="18", bio="Thrive"/>
<MainContent/>
<Footer/>
<Counter/>
</>
  )
}

export default App