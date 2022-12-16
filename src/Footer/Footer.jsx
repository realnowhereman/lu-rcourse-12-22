import Nav from "../Header/Nav";
import styles from'./footer.module.scss'

const Footer = (props) => {
  return (
    <footer>
      <h3>{props.siteData.site_name}</h3>
      <Nav nav = {props.siteData.nav} />
    </footer>
  )
}

export default Footer