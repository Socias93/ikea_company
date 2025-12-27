import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSearchValue("");
  }, [location.key]);

  return (
    <>
      <Navbar onChange={setSearchValue} value={searchValue} />
      <Outlet context={{ searchValue, setSearchValue }} />
    </>
  );
}

export default App;
