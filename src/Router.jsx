// import LanguageTester from "./components/language-test";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {Dashboard, HomePage} from "./pages"

const Router = () => {

  return (
    <div className="">
      {/* <LanguageTester /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<HomePage />}></Route>
          <Route path="/Dashboard" exact={true} element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;