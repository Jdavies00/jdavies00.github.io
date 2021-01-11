import React, { useState, useEffect } from 'react';
import { Navbar, Button, Jumbotron, Container } from 'reactstrap';
import { AppProvider } from './Untilities/AppContext';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Blog from "./components/Blog"
import Resume from "./components/Pdf"
import HomePage from "./components/Home"


function App() {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  return (
    <>
      <Router>
        <AppProvider>
          <Navbar className="sticky-top" style={{ backgroundColor: '#233744' }} >
            <Container fluid>
              <NavLink style={{ color: 'white'}} to="/"><Button  style={{backgroundColor:"#51AEB5", color:"#DEE7E9"}}> Home</Button> </NavLink>
              <NavLink style={{ color: 'white' }} to="/Resume"><Button style={{backgroundColor:"#51AEB5", color:"#DEE7E9"}}> Resume</Button> </NavLink>
              <NavLink style={{ color: 'white' }} to="/Blog"><Button style={{backgroundColor:"#51AEB5", color:"#DEE7E9"}}>Blog</Button> </NavLink>

              <ButtonDropdown  isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle  style={{backgroundColor:"#51AEB5", color:"#DEE7E9"}}  caret>
                  Contact Me!
                </DropdownToggle>
                <DropdownMenu style={{backgroundColor:'#51AEB5', color:'white'}}>
                  <DropdownItem ><a href="https://github.com/Jdavies00" target= "_blank">Github</a></DropdownItem>
                  <DropdownItem ><a href="https://www.linkedin.com/in/jdavies00/" target= "_blank" >Linkedin</a></DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>

            </Container>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/Resume">
              <Resume />
            </Route>
            <Route path="/Blog">
              <Blog />
            </Route>
          </Switch>
        </AppProvider>
      </Router>
      <footer className="sticky-bottom"> sometext</footer>
    </>
  )
}

export default App

