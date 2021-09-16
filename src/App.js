import { Container, Row } from "react-bootstrap";
import { Menu } from "./components/Menu";
import { Slider } from "./components/Slider";
import { Videos } from "./components/Videos";


function App() {
  return (
    <div >
      <Menu />
      <Slider />
      <div className="fondoVideo ">
        <Container className="">
          <Row >
              <Videos />
              <Videos />
              <Videos />
          </Row>
        </Container >
      </div>
    </div>
  );
}

export default App;
