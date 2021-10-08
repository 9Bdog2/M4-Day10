import "./App.css";
import "react-bootstrap";
import LeftSidebar from "./components/LeftSidebar";
import BottomNavbar from "./components/BottomNavbar";
import TopNavbar from "./components/TopNavbar";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <TopNavbar />
        <LeftSidebar />
        <Body />
        <BottomNavbar />
      </div>
    </div>
  );
}

export default App;
