import React from 'react';
import 'bootstrap';

function Header(props) {


    return (
        <ul className="nav nav-pills nav-fill fixed-top pl-1 pt-1">
            <li className="nav-item">
                <a 
                // onClick={()=>{props.setPage(0)}} ep8 12:55
                className={"nav-link " + (props.currentPage === 0 ? 'active' : '')} >
                    {props.pages[0]}
                </a>
            </li>
            <li className="nav-item">
                <a className={"nav-link " + (props.currentPage === 1 ? 'active' : '')}>
                    {props.pages[1]}
                </a>
            </li>
            <li className="nav-item">
                <a className={"nav-link " + (props.currentPage === 2 ? 'active' : '')} >
                    {props.pages[2]}
                </a>
            </li>
            <li className="nav-item">
                <a className={"nav-link " + (props.currentPage === 3 ? 'active' : '')} >
                    {props.pages[3]}
                </a>
            </li>
            <li className="nav-item">
                <a className={"nav-link " + (props.currentPage === 4 ? 'active' : '')} >
                    {props.pages[4]}
                </a>
            </li>
            {/* <li className="nav-item">
    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li> */}
        </ul>
    )
}
export default Header;