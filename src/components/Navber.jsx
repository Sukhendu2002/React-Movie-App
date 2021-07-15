import React, { useState } from "react";
import logo from "../logo.svg";
import "../components/Navber.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import axios from "axios";
const API_KEY = "bbb41346";

function Navber() {
  // --------------Hoocks-------------
  const [searchQuery, setSearchQuery] = useState();
  const [timeOutId, setTimeOutId] = useState();
  const [movieList, setMovieList] = useState([]);
  // ------------Faching Data-------------

  const fetchData = async (searchString) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    console.log(res);
    setMovieList(res.data.search);
  };

  // ----------Search Bouncing----------
  const onTextChange = (event) => {
    clearTimeout(timeOutId);
    setSearchQuery(event.target.value);
    const timeOut = setTimeOutId(() => fetchData(event.target.value), 500);
    setTimeOutId(timeOut);
  };
  return (
    <div className="navber">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="./">React Movie App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex jc-">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  value={searchQuery}
                  placeholder="Search movie"
                  className="mr-2"
                  aria-label="Search"
                  onChange={onTextChange}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navber;
