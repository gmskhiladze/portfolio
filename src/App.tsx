import './App.scss';
import Header from "./components/greetPage/header/header";
import Socials from "./components/greetPage/socials/socials";
import Welcome from "./components/greetPage/welcome/welcome";

function App() {
  return (
      <>
        <nav className={"nav"}>
            <Header/>
        </nav>

        <div className={"welcome__area"}>
            <Welcome/>
        </div>

        <div className={"side__nav"}>
            <Socials/>
        </div>
      </>
  );
}

export default App;
