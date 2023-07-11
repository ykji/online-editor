import DataProvider from "../context/DataProvider";
import Home from "./Home";

function App() {
  return (
    <>
      <DataProvider>
        <Home />
      </DataProvider>
    </>
  );
}

export default App;
