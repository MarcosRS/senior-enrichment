import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentForm from './StudentForm'
import{createStudent} from'../reducers'
import{deleteStudent} from'../reducers'


 class Student extends Component {
  constructor() {
    super()
    this.removeAction = this.removeAction.bind(this)
  }

  componentDidMount() {
    
  }

  removeAction(evt){
    evt.preventDefault()
    let id  = evt.target.getAttribute('data-id')
    this.props.deleteStudent(id);
  }

  render() {
    return (
    
           <div className="row row-offcanvas row-offcanvas-right">
            <div className="col-12 col-md-9" > 
              
                  <h1>Students</h1>

          <table className="table">
            <thead>
              <tr>
                <th>Campus</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              { this.props.students ? this.props.students.map(student => {
                              return(
                              <tr key={student.id}>  
                                <td><img src={ student.Campus ? student.Campus.img : '' } alt="Logo" height="42" width="42"/></td>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>
                                  <button type="button" data-id={student.id} className="btn btn-edit btn-primary btn-sm col-xs-5">Edit</button>

                                  <button type="button" data-id={student.id} className="btn btn-delete btn-danger btn-sm col-xs-5 pull-right" onClick={this.removeAction}>Remove</button>
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
                <div href="#" className="list-group-item active col-xs-12">Add Student</div>
                <StudentForm createStudent={this.props.createStudent} campus={this.props.campus} />
              </div>
            </div>
          </div>
      
    )
  }
}

const mapProps = null;

const mapDispatch = dispatch => ({
  createStudent: (name,email,campusId) => {
     dispatch(createStudent(name,email,campusId))
  },
  deleteStudent:(studentId) => {
     dispatch(deleteStudent(studentId))
  },
});

export default connect(mapProps, mapDispatch)(Student);

