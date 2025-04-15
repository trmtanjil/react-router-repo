import React, { Component } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'

export class Root extends Component {
  render() {
    return (
    <div>
           <Header></Header>
           <Outlet></Outlet>
    </div>
    )
  }
}

export default Root