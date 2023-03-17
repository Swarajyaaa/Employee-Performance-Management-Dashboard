import { Route, Routes } from "react-router-dom";
import Homepage from "./Screens/Homepage/Homepage";
import Layout from "./Layout";
import SamplePage from "./Screens/SamplePage/SamplePage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
      />
      <Route
        path="/sample"
        element={
          <Layout>
            <SamplePage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
