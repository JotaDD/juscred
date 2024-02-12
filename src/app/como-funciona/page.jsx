import Contact from '@/components/Contact'
import CustomHeader from '@/components/CustomHeader'
import Footer from '@/components/Footer'
import React from 'react'

function ComoFunciona() {
  return (
    <main>
      <CustomHeader titleName="Como Funciona" nextImagePath="HeaderImg.svg" />
      <Contact />
      <Footer />
    </main>
  )
}

export default ComoFunciona
