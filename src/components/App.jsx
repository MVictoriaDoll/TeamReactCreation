import '../styles/App.scss';
import Footer from './pages/Footer';
import Header from './pages/Header';
import NewProject from './projects/NewProject';
import Landing from './Landing';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';



function App() {

  //Global variables
  const [uploadProjectPicture, setUploadProjectPicture] = useState('');

  const [allValues, setAllValues] = useState({
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: ''
  });


  //Upload pictures 
  const handleUploadPicture = (uploadProjectPicture) => {
    setUploadProjectPicture(uploadProjectPicture);
    console.log(uploadProjectPicture);
  }

  //Get input values
  const handleInputValue = (nameProperty, valueProperty) => {
    const newValues = {...allValues, [nameProperty]: valueProperty};
    setAllValues(newValues);

    console.log(newValues);
  }


  return (
    <div className="container">

      <Header />
      <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/"  element={<NewProject uploadProjectPicture={uploadProjectPicture} handleUploadPicture={handleUploadPicture} handleInputValue = {handleInputValue} allValues={allValues}/>} />
      </Routes>


      <Footer />
      
    </div>
  )
}

export default App;