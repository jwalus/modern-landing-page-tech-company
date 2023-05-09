import { Navbar, Hero, Features, Testimonials, CTA, Footer } from './components'

const App = () => (
    <div className='overflow-x-hidden body'>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
)

export default App