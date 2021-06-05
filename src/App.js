import logo from "./logo.svg";

import "./App.css";
import Birthday from "./Birthday/Birthday";
import Tour from "./Tour/Tour";
import Menu from "./FoodMenu/Menu";
import Slide from "./Slider/Slider";
import SliderTest from "./SliderTest/SliderTest";

function App() {
  return (
    <div className="App row">
      <SliderTest />
      <div className="bg-dark p-4 w-100 h-100 m-5"></div>
      <Tour />
      <div className="bg-dark p-4 w-100 h-100 m-5"></div>

      <Menu />
      <div className="bg-dark p-4 w-100 h-100 m-5"></div>

      <Slide />
      <div className="bg-dark p-4 w-100 h-100 m-5"></div>

      <Birthday />
      <div className="bg-dark p-4 w-100 h-100 m-5"></div>
    </div>
  );
}

export default App;
