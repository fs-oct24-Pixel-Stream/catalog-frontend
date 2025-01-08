import { HashRouter as Router, Routes } from "react-router";
import { App } from './App';
import { Route } from "react-router";
import { PhonesPage } from "./pages/PhonesPage/PhonesPage";



// Before testing keep in mind to use # in url. e.g http://localHost/#/phones because of HashRouter.

export const Root = () => (
  <Router>
    
    {/* Header */}

    <Routes>

      <Route path="/" element={<App />}>
        
        {/* TODO Default page <Route index element={<Home/>}/> */}
        <Route path="/phones" element={<PhonesPage/>} /> {/* TODO CREATE Phones Page*/} 
        {/* field for other Routes */}

      </Route>

    </Routes>
    {/* Footer */}

  </Router>
)
