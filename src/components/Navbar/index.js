import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const isDark = value.isDarkTheme
      const {toggleTheme} = value
      const onChage = () => {
        toggleTheme()
      }
      const logo = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const theme = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const bg = isDark ? 'n-c1 d-c1' : 'n-c1'
      const text = isDark ? 'n-h1 d-h1' : 'n-h1'

      return (
        <div className={bg}>
          <img src={logo} alt="website logo" className="n-img1" />
          <ul className="n-c2">
            <li>
              <Link className={text} to="/">
                Home
              </Link>
            </li>
            <li>
              {' '}
              <Link className={text} to="/about">
                about
              </Link>
            </li>
          </ul>
          <button className="n-b1" type="button" onClick={onChage}>
            <img src={theme} alt="theme" className="n-img1" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
