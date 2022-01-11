import React from 'react';
import TasklistHOC from './TasklistHOC';
import Task from './TaskComponent';

const taskList = [{taskName: 'Wakeup', taskStatus: "Inprogress"}, {taskName: 'Buy veggy', taskStatus: "Submit"}] ;
const HocComp = TasklistHOC(Task, taskList);
export class Todo extends React.Component {
     
    render() {
        return (
            <div className="center-text">
                <h1 className="title task">Lists</h1>
                <HocComp/>
            </div>
        )
    }
    
}