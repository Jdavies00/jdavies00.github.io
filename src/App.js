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
          <Navbar className="sticky-top" style={{ backgroundColor: '#E9ECEF' }} >
            <Container>
              <Button color="primary"><NavLink style={{ color: 'white' }} to="/"> Home </NavLink></Button>
              <Button color="primary"><NavLink style={{ color: 'white' }} to="/Resume"> Resume </NavLink></Button>
              <Button color="primary"><NavLink style={{ color: 'white' }} to="/Blog">  Blog </NavLink></Button>

              <ButtonDropdown  isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle color="primary"  caret>
                  Contact Me!
      </DropdownToggle>
                <DropdownMenu>
                  {/* <DropdownItem header><a href="#" target= "_blank" >Protfolio</a></DropdownItem> */}
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
    </>
  )
}

export default App

