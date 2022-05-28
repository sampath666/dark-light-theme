import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const isDark = value.isDarkTheme
      const text = isDark ? 'd-a-h1 a-h1' : 'l-a-h1 a-h1'
      const bg = isDark ? 'd-a-c a-c' : 'a-c'
      const img = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <div className={bg}>
          <div className="a-card">
            <img className="a-img1" src={img} alt="home" />
            <h1 className={text}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
