import React, { Component } from 'react';
import { Link }  from 'react-router'
import store from '../store'
import axios  from 'axios'



export default class Root extends Component {
  constructor() {
    super()

    this.state = store.getState();
    
    // this.createStudent = this.createStudent.bind(this)
  }

  componentDidMount() {
    store.subscribe(() => {
        this.setState(store.getState());
    });
  }


  render() {
    return (
      <div className='container'>
          <nav className="navbar navbar-default">
            <div className="container-fluid " style={{padding: '10px 0' }}>    
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style={{padding: '0' }}>
                <ul className="nav navbar-nav">
                  <li className="col-xs-5"> 
                        <Link to='/campus' style={{padding: '0' }} ><button type="button" className="btn btn-primary btn-lg">Campus</button></Link> 
                  </li>
                  <li className="col-xs-5"> 
                        <Link to='/student' style={{padding: '0' }} ><button type="button" className="btn btn-warning btn-lg">Students</button></Link> 
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {
            this.props.children ? 
            React.cloneElement(this.props.children, 
            {campus: this.state.campus, 
             students:this.state.students,
             createCampus: this.createCampus,
             createStudent: this.createStudent })
            : null
          }
          
      </div>
    )
  }
}
