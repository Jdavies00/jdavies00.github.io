import React from 'react';
import 'bootstrap';

function Header(props) {
    console.log(props)
    return (
        <ul className="nav nav-pills nav-fill fixed-top pl-1 pt-1">
  <li className="nav-item">
    <a className="nav-link active" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
    )
}
export default Header;