import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import HeroSection from './component/Hero-section/HeroSection'
import Shop from './component/Shop/Shop'

function App() {


  return (
    <div className="App">
      {/* header section  */} 
      <Header></Header> 
      {/* Hero section  */} 
      <HeroSection></HeroSection> 
      {/* Shop section  */} 
      <Shop></Shop> 
      {/* footer section  */} 
      <Footer></Footer>
    </div>
  )
}

export default App
