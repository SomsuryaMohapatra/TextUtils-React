import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [switchText, setSwitchText] = useState("Enable Blue Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (alertMsg, alertType) => {
    setAlert({
      msg: alertMsg,
      type: alertType,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleModes = () => {
    if (mode === "light") {
      setMode("dark");
      setSwitchText("Disbale Blue Dark Mode");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      setSwitchText("Enable Blue Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        {/* For propTypes */}
        {/* NavBar Component */}
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={handleModes}
          switchText={switchText}
        />
        {/* Alert Component */}
        <div className="container my-3">
          <Alert alert={alert} />
        </div>
        <div className="container my-2">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Enter your text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>

        {/* For Default propTypes  */}
        {/* <Navbar /> */}
        {/* {<hr></hr>} */}
        {/* <div className="container my-3">
        <About></About>
      </div> */}
      </Router>
    </>
  );
}

export default App;
