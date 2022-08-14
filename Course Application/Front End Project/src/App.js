import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ToastContainer } from 'react-toastify';

import './App.css';
import AddCourse from './Components/AddCourse';
import Header from './Components/Header';
import Home from './Components/Home';
import Menus from './Components/Menus';
import UpdateCourse from './Components/UpdateCourse';
import ViewCourses from './Components/ViewCourses';

function App() {
  return (
    <div>
      <Router>
        <ToastContainer autoClose={2000}></ToastContainer>
        <Container>
          <Header></Header>
          <hr></hr>
          <Row>
            <Col md={4}>
              <Menus></Menus>
            </Col>

            <Col md={8}>
              <Routes>
                <Route path='/' element={<Home />} exact></Route>
                <Route path='/home' element={<Home />} exact></Route>
                <Route path='/addCourse' element={<AddCourse />} exact></Route>
                <Route path='/viewCourses' element={<ViewCourses />} exact></Route>
                <Route path='/updateCourse' element={<UpdateCourse />} exact></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;