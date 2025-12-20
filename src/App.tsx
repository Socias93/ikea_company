import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchValue("");
  }, []);

  return (
    <>
      <Navbar onChange={setSearchValue} value={searchValue} />
      <Outlet context={{ searchValue }} />
    </>
  );
}

export default App;
