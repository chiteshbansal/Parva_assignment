import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Main from "./components/Parva_Team/Parva_Team";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* Divided the whole page in three parts 
        Implemented all the parts separately and 
        then imported then here  */}
      <NavigationBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
