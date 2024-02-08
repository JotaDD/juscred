import Faq from '@/components/Faq'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen container flex-col items-center justify-between ">
      <h1 className="text-4xl font-bold mb-[800px]">Hello, World!</h1>
      <Faq />
      <Contact />
    </main>
  )
}
