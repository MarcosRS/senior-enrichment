import React, { Component } from 'react';



export default class StudentForm extends Component {
  constructor() {
    super()

    this.retrieveFormInfo = this.retrieveFormInfo.bind(this)
  }

  componentDidMount() {
    
  }

  retrieveFormInfo(evt){
    evt.preventDefault()
    let name = evt.target.name.value
    let email = evt.target.email.value
    let campusId = evt.target.campusId.value

    console.log(campusId)

    this.props.createStudent(name,email,campusId);
    evt.target.name.value = ''
    evt.target.email.value = ''

  }
  
  render() {
    return (
      <div className="col-xs-12">
        <form onSubmit={this.retrieveFormInfo} >
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="name"/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" name="email"/>
          </div>
          <div className="form-group">
            <label> Select Campus </label>
            <select className="col-xs-12 form-group " name='campusId' id="animal-selector">

                { this.props.campus ? this.props.campus.map(camp => {
                              return(
                               <option key={camp.id} value={camp.id}>{camp.name}</option>    
                              )
              })
                : null

              }
            </select>
          </div>
           <div className="form-group">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
      </form>
    </div>
          
    )
  }
}
