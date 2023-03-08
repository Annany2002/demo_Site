import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Analytics from "./components/Analytics"
import NewsLetter from "./components/Newsletter"
import Cards from "./components/Cards"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards/>
      <Footer />
    </div>
  )
}