import Contact from '@/components/Contact'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Header />
      <h1 className="text-4xl font-bold">Hello, World!</h1>
      <Contact />
    </main>
  )
}
