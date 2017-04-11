'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import store from './store'
import Root from './components/Root'
import Campus from './components/Campus'
import Student from './components/Student'
import Routes from './Routes'


render (
 <Provider store={store}> 	
   <Routes />
  </Provider>,
  document.getElementById('main')
)