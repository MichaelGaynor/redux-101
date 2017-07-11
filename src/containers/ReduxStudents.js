import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectStudent from '../actions/SelectStudent';
import { bindActionCreators } from 'redux';

class ReduxStudents extends Component{
    render(){
        console.log(this.props.students)
        var studentArray  = [];
        this.props.students.map((student,index)=>{
            studentArray.push(
                <li 
                    key={index} 
                    onClick={()=>this.props.selectStudent(student)}>
                {student}
                </li>
            )
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectStudent: SelectStudent
    }, dispatch)
}

// INSTEAD of exporting the class (component) we export connect.
// Connect takes two args WHICH RETURN A FUNCTION that takes 1 arg.
// -Connect takes state mapping function (So it's available in component props)
// -Connect takes action mapping function (ditto)
// -The return function of the connect function takes a component
export default connect(mapStateToProps,mapDispatchToProps)(ReduxStudents);