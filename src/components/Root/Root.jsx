import React, { Component } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Footter from '../Footter/Footter'
import "./Root.css"
import SideBar from '../SideBar/SideBar'

export class Root extends Component {
  render() {
    return (
    <div>
           <Header></Header>
           <div className={"Saidevar"}>
            <SideBar></SideBar>
           <Outlet></Outlet>
           </div>
           <Footter></Footter>
    </div>
    )
  }
}

export default Root