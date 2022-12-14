const Header = (props) => {
  return (
    <header >
        <h1>{props.sitename}</h1>
        <h3>{props.slogan}</h3>
        <Nav />
    </header>
  )
}

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </nav>
  )
}

export default Header;