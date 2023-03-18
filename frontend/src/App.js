import { Route, Routes } from "react-router-dom";
import Homepage from "./Screens/Homepage/Homepage";
import Layout from "./Layout";
import SamplePage from "./Screens/SamplePage/SamplePage";
import AllProjectsPage from "./Screens/AllProjectsPage/AllProjectsPage";
import SingleProjectPage from "./Screens/SingleProjectPage/SingleProjectPage";

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
        path="/projects"
        element={
          <Layout>
            <AllProjectsPage />
          </Layout>
        }
      />
       <Route
        path="/projects/:id"
        element={
          <Layout>
            <SingleProjectPage />
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
