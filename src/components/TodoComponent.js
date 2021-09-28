import React from 'react';
import TasklistHOC from './TasklistHOC';
import Task from './TaskComponent';

const taskList = [{taskName: 'Wakeup', taskStatus: "Inprogress"}, {taskName: 'Buy veggy', taskStatus: "Submit"}] ;
const HocComp = TasklistHOC(Task, taskList);
export class Todo extends React.Component {
     
    render() {
        return (
            <div>
                <HocComp/>
            </div>
        )
    }
    
}