import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import HowWorks from '@/components/HowWorks'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="text-4xl font-bold">Hello, World!</h1>
      <HowWorks />
      <Contact />
    </main>
  )
}
