import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 bg-dark">
      <MDBContainer fluid className="text-center text-md-left ">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="title text-white">Footer Content</h5>
            <p className="text-white">
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 text-white">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Pritbor.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;