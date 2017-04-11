'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import store from './store'
import Root from './components/Root'
import Campus from './components/Campus'
import Student from './components/Student'

import { loadCampus, loadStudents } from './reducers'



const Routes = ({loadInitialData}) => (

<Router history={browserHistory} >
   	 <Route path='/' component={Root} onEnter={loadInitialData}>
   	 	<Route path='/campus' component={Campus}/>
   	 	<Route path='/student' component={Student}/>
   	 	<IndexRedirect to="/campus" /> 
   	 </Route>
</Router>
)


const mapProps = null;


const mapDispatch = dispatch => ({
  loadInitialData: () => {
    dispatch(loadCampus());
    dispatch(loadStudents());
  }
});


export default connect(mapProps, mapDispatch)(Routes)