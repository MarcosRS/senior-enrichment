import React, { Component } from 'react';



export default class CampusForm extends Component {
  constructor() {
    super()

    this.retrieveFormInfo = this.retrieveFormInfo.bind(this)
  }

  componentDidMount() {
    
  }

  retrieveFormInfo(evt){
    evt.preventDefault()
    let name = evt.target.name.value
    let img = evt.target.img.value

    this.props.createCampus(name,img);
    evt.target.name.value = ''
    evt.target.img.value = ''

  }
  
  render() {
  
    return (
      <div className="col-xs-12">
        <form  onSubmit={this.retrieveFormInfo} >
          <div className="form-group">
            <label>Campus Name</label>
            <input type="text" className="form-control" name="name"/>
          </div>
          <div className="form-group">
            <label>Logo Url</label>
            <input type="text" className="form-control" name="img"/>
          </div>
           <div className="form-group">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
      </form>
    </div>
          
    )
  }
}
