import axios from 'axios'
/* -----------------     Constants     ------------------ */

export const  LOAD_CAMPUS = 'LOAD_CAMPUS';
export const  LOAD_STUDENTS = 'LOAD_STUDENT';
export const  CREATE_CAMPUS = 'CREATE_CAMPUS';
export const  CREATE_STUDENT = 'CREATE_STUDENT';
export const  DELETE_STUDENT = 'DELETE_STUDENT';

/* -----------------     Actions     ------------------ */
export const loadAllCampus = (campus) => ({type:LOAD_CAMPUS , campus});
export const loadAllStudents = (students) => ({type:LOAD_STUDENTS , students});
export const createNewCampus = (newCampus) => ({type:CREATE_CAMPUS,newCampus});
export const createNewStudent = (newStudent) => ({type:CREATE_STUDENT,newStudent});
export const deleteStudentFunc = () =>({type:DELETE_STUDENT})

const initialState = {
	campus:[],
	students:[]
}

/* ------------       REDUCER     ------------------ */

const rootReducer = function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch(action.type) {
  	
    case LOAD_CAMPUS:
    	newState.campus = action.campus
    break

    case LOAD_STUDENTS:
    	newState.students = action.students
    break

    case CREATE_CAMPUS:
    	newState.campus = [...newState.campus, action.newCampus]
    break

    case CREATE_STUDENT:
    console.log(action.newStudent)
    	newState.students = [...newState.students, action.newStudent]
    break

    case DELETE_STUDENT:
    	return newState
    break

    default: return state
  }

 return newState

};

export default rootReducer


/* ------------       DISPATCHERS     ------------------ */


export const loadCampus = () => dispatch => {
	axios.get(`/api/campus/`)
  .then(response => {
    dispatch(loadAllCampus(response.data))
  })
  .catch(err => console.error('Loading Campuses unsuccessful', err));
}


export const loadStudents = () => dispatch => {
	  axios.get(`http://localhost:1337/api/students`)
      .then(response => {
        dispatch(loadAllStudents(response.data))
      })
      .catch(err => console.error('Loading Students unsuccessful', err));
}


export const createCampus = (name,img) => dispatch => {
 	  axios.post(`/api/campus/`,
        {name:name,img:img}
      )
      .then(response => {
         dispatch(createNewCampus(response.data))
      })
      .catch(err => console.error('Campus Creation unsuccessful', err));
}


export const createStudent = (name,email,campusId) => dispatch => {
 	  axios.post(`/api/students/`,
        {name:name,email:email,CampusId: campusId}
      )
      .then(response => {
      	console.log(response)
         dispatch(createNewStudent(response.data))
      })
      .catch(err => console.error('Student Creation unsuccessful', err));
}


export const deleteStudent = (studentId) => dispatch => {
 	  axios.delete(`/api/students/${studentId}`)
      .then(response => {
         dispatch(deleteStudentFunc())
      })
      .catch(err => console.error('Student Removal unsuccessful', err));
}




