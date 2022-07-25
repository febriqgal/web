import logo from "./logo.svg";
import "./App.css";
import Nama from "./Nama";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img
            src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/273912539_1401100573682808_2392487613325497796_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBOKEIsY2bfAFQ6EbD07v9O6FF5eEKrx87oUXl4QqvHzySuc5GhFyUNBuDd-Mgl1hIhlksLxzZG6oGGO54w7J2&_nc_ohc=4BLCKkKb7PUAX9y7EdX&_nc_ht=scontent-sin6-3.xx&oh=00_AT8-_2NkGSRDG5kKrMHfSB3871paOALpnLDvdlct6zHmiQ&oe=62E40D90"
            alt="logo"
          />
         
            
         
        </div>
        <Nama children="Febriqgal Purnama" className="h1" />
        <a
          className="App-link"
          href="https://www.instagram.com/febriqgal_"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
