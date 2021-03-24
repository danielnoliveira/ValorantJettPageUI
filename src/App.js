import RiotLogo from './assets/riot games.png';
import ValorantLogo from './assets/logo.png';
import UserProfile from './assets/user_icon.png';
import ArrowDown from './assets/Polygon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header__menu">
          <div className="header__icons">
            <img src={RiotLogo} alt="Riot Games" className="icons__riot" />
            <span className="vertical_bar"></span>
            <img src={ValorantLogo} alt="Valorant" className="icons__valorant" />
          </div>
          <nav>
            <ul>
              <li><a href="#Game">game</a></li>
              <li><a href="#Champions">champions</a></li>
              <li className="dropdown__menu">
                news
                <img src={ArrowDown} alt="arrow down" />
                <div className="menu__container"></div>
              </li>
              <li><a href="#PatchNotes">patch notes</a></li>
              <li className="dropdown__menu">
                discover
                <img src={ArrowDown} alt="arrow down" />
                <div className="menu__container"></div>
              </li>
              <li><a href="#Esports">esports</a></li>
              <li><a href="#Universe">universe</a></li>
              <li><a href="#Shop">shop</a></li>
              <li><a href="#Support">support</a></li>
            </ul>
          </nav>
        </div>
        <div className="header__user">
          <img src={UserProfile} alt="user prolife" />
          <span className="user__name">unepickid</span>
          <img src={ArrowDown} alt="arrow down" />
        </div>
      </header>
    </div>
  );
}

export default App;
