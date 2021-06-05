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
      <Tour />
      <Menu />
      <Slide />

      <Birthday />
    </div>
  );
}

export default App;
