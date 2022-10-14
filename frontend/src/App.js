import { Container } from "react-bootstrap";
import Jobs from "./Jobs";
import SearchBar from "./SearchBar";

function App() {
  return (
    <Container className="my-4">
      <h1 className="mb-4">Ads Search Website</h1>
      {/* <SearchBar/> */}
      <Jobs />
    </Container>
  );
}

export default App;
