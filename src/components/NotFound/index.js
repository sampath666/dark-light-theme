import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const isDark = value.isDarkTheme
      const text = isDark ? 'd-nt-h1 nt-h1' : 'l-n-h1 nt-h1'
      const bg = isDark ? 'd-nt-c nt-c' : 'nt-c'
      const smalltext = isDark ? 'd-nt-h1 n-p1' : 'n-p1'

      return (
        <div className={bg}>
          <div className="n-card">
            <img
              className="nt-img1"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="notfound"
            />
            <h1 className={text}>Lost Your Way?</h1>
            <p className={smalltext}>
              We Cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
