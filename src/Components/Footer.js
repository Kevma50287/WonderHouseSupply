import { Grid } from "@mui/material"
import { Link } from "react-router-dom"
import GroupLogo from "../ProjectImajes/5 links center/Group 10.png"

export default function Footer() {
  return (
    <Grid container id="footer">
      <Grid item id="footerLinkContainer" className="center" xs={12} sm={3} md={3}>
        <Link to="/" className="footer-route">
          <img className="footer-route wonderLogo" src={GroupLogo} alt="group logo" />
        </Link>
        <Link to="/about" className="footer-route">ABOUT</Link>
        <Link to="/products" className="footer-route">PRODUCTS</Link>
        <Link to="/services" className="footer-route">SERVICES</Link>
      </Grid>
      <Grid item xs={12} sm={3} md={3} id="FooterDetailContainer" >
        <h3 className="footer-detail-title">FIND US AT</h3>
        <p className="footer-detail">2019 Stillwell Avenue</p>
        <p className="footer-detail">Brooklyn, NY 11223</p>
        <br />
        <h3 className="footer-detail-title">OR GIVE US A CALL</h3>
        <p className="footer-detail">718-XXX-XXXX</p>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <iframe
          id="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5886.472318232128!2d-73.98784844715247!3d40.597243648296796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb06e2dcd4ffb2593!2sWonder%20House%20Supply%20INC.!5e0!3m2!1sen!2sus!4v1661391826710!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wonder House Supply Google Map"></iframe>
      </Grid>
    </Grid>
  )
}
