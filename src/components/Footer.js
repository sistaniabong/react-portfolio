import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

// import { MDBIcon} from 'mdbreact';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';



export default function Footer() {
  return (
    <MDBFooter className='bg-light text-center text-white fixed-bottom'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>

          <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/sistania-bong/'>
            LinkedIn
            </MDBBtn>

        <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='https://github.com/sistaniabong'>
            Github
        </MDBBtn>
        </section>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2022 Sistania Bong
      </div>
    </MDBFooter>
  );
}