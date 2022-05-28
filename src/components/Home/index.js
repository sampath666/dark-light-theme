import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const isDark = value.isDarkTheme
      const text = isDark ? 'd-h-h1 h-h1' : 'l-h-h1 h-h1'
      const bg = isDark ? 'd-h-c h-c' : 'h-c'
      const img = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      return (
        <div className={bg}>
          <div className="h-card">
            <img className="img1" src={img} alt="home" />
            <h1 className={text}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
