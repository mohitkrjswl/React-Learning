import "./App.css";
import ClockHeading from "./ClockSlogan.jsx/ClockHeading";
import CurrentTime from "./ClockSlogan.jsx/CurrentTime";
import ClockSlogan from "./ClockSlogan.jsx/ClockSlogan";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
