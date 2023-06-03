import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  // const [switchText, setSwitchText] = useState("Enable Blue Dark Mode");
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

  const removeClassList = ()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondar');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-muted');
    document.body.classList.remove('bg-white');
  }

  const handleModes = (cls) => {
    removeClassList();
    document.body.classList.add('bg-'+cls);
    if(cls === 'primary'){
      setMode('primary');
      document.body.style.backgroundColor = "#042743";
      showAlert("Primary Mode has been enabled", "success");
      document.title = "TextUtils - Primary Mode";
    }else if(cls === 'success'){
      setMode('success');
      document.body.style.backgroundColor = "#042743";
      showAlert("Success Mode has been enabled", "success");
      document.title = "TextUtils - Success Mode";
    } else if(cls === 'warning'){
      setMode('warning');
      document.body.style.backgroundColor = "#042743";
      showAlert("Warning Mode has been enabled", "success");
      document.title = "TextUtils - Warning Mode";
    } else if(cls === 'danger'){
      setMode('danger');
      document.body.style.backgroundColor = "#042743";
      showAlert("Danger Mode has been enabled", "success");
      document.title = "TextUtils - Danger Mode";
    }else if(cls === 'light'){
      setMode('light');
      document.body.style.backgroundColor = "#042743";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
    // if (mode === "light") {
    //   setMode("dark");
    //   setSwitchText("Disbale Blue Dark Mode");
    //   document.body.style.backgroundColor = "#042743";
    //   showAlert("Dark Mode has been enabled", "success");
    //   document.title = "TextUtils - Dark Mode";
    // } else {
    //   setMode("light");
    //   setSwitchText("Enable Blue Dark Mode");
    //   document.body.style.backgroundColor = "white";
    //   showAlert("Light Mode has been enabled", "success");
    //   document.title = "TextUtils - Light Mode";
    // }
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
          // switchText={switchText}
        />
        {/* Alert Component */}
        <div className="container my-3">
          <Alert alert={alert} />
        </div>
        <div className="container my-2">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
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
