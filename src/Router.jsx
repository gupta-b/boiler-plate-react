// import LanguageTester from "./components/language-test";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard"

const Router = () => {

  return (
    <div className="">
      {/* <LanguageTester /> */}
      <BrowserRouter>
        <Routes>
          <Route path="./" exact={true} element={<Dashboard />}></Route>
          <Route path="./Dashboard" exact={true} element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;