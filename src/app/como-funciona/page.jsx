import Contact from '@/components/Contact'
import CustomHeader from '@/components/CustomHeader'
import Footer from '@/components/Footer'
import InformationContent from '@/components/InformationContent'
import React from 'react'
import content from './content'

function ComoFunciona() {
  return (
    <main>
      <CustomHeader titleName="Como funciona" nextImagePath="HeaderImg.svg" />
      <InformationContent title="Sobre Juscred" contentArray={content} />
      <Contact />
      <Footer />
    </main>
  )
}

export default ComoFunciona
