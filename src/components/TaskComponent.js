import React from 'react';
import { withRouter } from 'react-router-dom';
import { data } from "../asset/data";


class Task extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            data: data.taskList
        }
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    handleAddClick() {
        this.props.history.push('/add-update');
    }

    taskRow() {
        // if (this.props.data instanceof Array) {
        return this.state.data.map(function (object, i) {
            return (
                <div className="task">
                    <div className="task-title">
                        <label>{object.task}</label>
                    </div>
                    <div className="task-status">
                        <label>{object.status}</label>
                    </div>
                    



                    <button>Update</button>
                </div>
            )
        })
        // }

    }

    render() {
        return (
            <div>
                {this.taskRow()}
                <button onClick={this.handleAddClick}>Add</button>
            </div>
        )
    }
}

export default withRouter(Task)