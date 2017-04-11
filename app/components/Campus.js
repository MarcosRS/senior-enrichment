import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampusForm from './CampusForm'
import{createCampus} from'../reducers'



 class Campus extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    
  }
  
  render() {


    return (
      
          <div className="row row-offcanvas row-offcanvas-right">
            <div className="col-12 col-md-9" > 
              
				  <h1>Campus</h1>

				  <table className="table">
				    <thead>
				      <tr>
				      	<th>Logo</th>
				        <th>Id</th>
				        <th>Campus</th>
				        <th>Edit</th>
				      </tr>
				    </thead>
				    <tbody>
				      { this.props.campus ? this.props.campus.map(camp => {
				                      return(
				                      <tr key={camp.id}>  
				                      	<td><img src={camp.img} alt="Logo" height="42" width="42"/></td>
				                        <td>{camp.id}</td>
				                        <td>{camp.name}</td>
				                        <td>
				                        	<button type="button" data-id={camp.id} className="btn btn-edit btn-primary btn-sm col-xs-5">Edit</button>

				                        	<button type="button" data-id={camp.id} className="btn btn-delete btn-danger btn-sm col-xs-5 pull-right">Remove</button>
				                        </td>
				                      </tr>
				                      )
				                		
				                		
				                	
				  	   })
				      	: null

				      }
				    </tbody>
				  </table>


            </div>
             <div className="col-6 col-md-3 sidebar-offcanvas" id="sidebar">
              <div className="list-group">
                <div href="#" className="list-group-item active col-xs-12">Add Campus</div>
                <CampusForm  createCampus={this.props.createCampus} />
              </div>
            </div>
          </div>
    )
  }
}

const mapProps = null;

const mapDispatch = dispatch => ({
  createCampus: (name,img) => {
  	 dispatch(createCampus(name,img))
  }
});

export default connect(mapProps, mapDispatch)(Campus);