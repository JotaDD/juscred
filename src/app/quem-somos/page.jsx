import Contact from '@/components/Contact'
import CustomHeader from '@/components/CustomHeader'
import Footer from '@/components/Footer'
import React from 'react'

function QuemSomos() {
  return (
    <main>
      <CustomHeader titleName="Quem Somos" nextImagePath="HeaderImg.svg" />
      <Contact />
      <Footer />
    </main>
  )
}

export default QuemSomos
