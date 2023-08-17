
import { useState } from 'react';
import {
  BrowserRouter,

  Route,
  Routes,

} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); // by default, light mode
  const [alert, setAlert] = useState(null); // by default, alert is null

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
 const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')

  document.body.classList.remove('bg-warning')

  document.body.classList.remove('bg-success')

  document.body.classList.remove('bg-danger')
}


  const toggleMode = (cls) => {
    //to chnge clr//pr agr ek bar set hogya clr tho dubara cnge krne k liye relod krna hga
    //so remove bodyclass func use kr rhe upr m.jb v toggle ho,chnge hojae
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <BrowserRouter>
      <Navbar title="TextUtils" aboutUs="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* using exact taki exact url match ho */}
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text" mode={mode} />} />
          <Route
           exact path="/about"
            element={<About />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;