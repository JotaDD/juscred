import Faq from '@/components/Faq'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello, World!</h1>
      <Faq />
      <Contact />
    </main>
  )
}
