import Prandes from '@/Components/Prandes/prandes'
import Services from '@/Components/Servicess/services'
import About from '@/Components/about/about'
import Contact from '@/Components/contact/contact'
import Goles from '@/Components/goles/goles'
import Header from '@/Components/header/header'
import Hero from '@/Components/hero/hero'
import Lecturers from '@/Components/lecturers/lecturers'
import ReactGasp from '@/Components/reactGasp'
import Video from '@/Components/videoss/video'
import React from 'react'


const index = () => {
  return <>
    <Header/>
    <Hero/>
    <Prandes/>
    <About/>
    <ReactGasp/>
    <Goles/>
    <Video/>
    <Services/>
    <Lecturers/>
    <Contact/>
  </>
}

export default index