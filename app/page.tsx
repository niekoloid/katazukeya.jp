import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Areas from '@/components/Areas'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Areas />
      <ContactForm />
      <Footer />
    </main>
  )
}