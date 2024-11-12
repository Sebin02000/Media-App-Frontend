/* eslint-disable no-unused-vars */
import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { GiMusicSpell } from "react-icons/gi";
function Header() {
  return (
    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <GiMusicSpell className='fs-2 me-1'/>
            MEDIA PLAYER
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
  )
}

export default Header