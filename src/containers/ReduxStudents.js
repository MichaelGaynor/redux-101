import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReduxStudents extends Component{
    render(){
        console.log(this.props.students)
        var studentArray  = [];
        this.props.students.map((student,index)=>{
            studentArray.push(<li key={index}>{student}</li>)
        })
        return(
            <div>
                <h1>This is ReduxStudents</h1>
                {studentArray}
            </div>
        )
    }
}

// All containers that need access to state will have this function.
// We are creating a mapping between redux state and this component's props.
function mapStateToProps(state){
    return{
        // Inside of the state object we have the students property,
        // This exists because we made it a property in the root reducer.
        students: state.students
    }
}

// INSTEAD of exporting the class (component) we export connect.
export default connect(mapStateToProps)(ReduxStudents);