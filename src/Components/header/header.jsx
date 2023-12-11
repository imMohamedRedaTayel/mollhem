import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import $ from 'jquery'
import Navbar from 'react-bootstrap/Navbar';
import { Link as Scroll} from 'react-scroll';

const Header = () => {
  return <>
    <Navbar expand="lg" className="fixed-top p-0  ">
      <Container>
        <Scroll spy={ true } activeClass='activeNav' smooth={true} offset={ -60 } to='hero' className='p-0 m-0'  href="#home"> 

             <img className='navbar-brand' src="/Image/header/trans 1.png" alt="logo" />
          
        </Scroll>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='ml-3'  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto position-relative p-0   ">
            <Scroll spy={ true } activeClass='activeNav' smooth={true} offset={ -130 } className='nav-link ' to="hero">الرئيسية</Scroll>
            <Scroll spy={ true } activeClass='activeNav' smooth={true} offset={ -140 } className='nav-link' to="about">محاور الدورة</Scroll>
            <Scroll spy={ true } activeClass='activeNav' smooth={true} offset={ -60 } className='nav-link' to="goles">عن المبادرة</Scroll>
            <Scroll spy={ true } activeClass='activeNav' smooth={true} offset={ -60 } className='nav-link' to="services">الهيئة التدريسية</Scroll>
          </Nav>
          <Nav className="mr-auto">
            <button> سجل الآن </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default Header
