import { navMenuItems } from "../constants"

const Nav = () => {
  return (
    <nav className="nav">
        {
            navMenuItems.map(link => (
                <a key={link.id} href={link.href} className="nav-link cursor-pointer">
                {link.label}
                </a>
            ))
        }
    </nav>
  )
}

export default Nav