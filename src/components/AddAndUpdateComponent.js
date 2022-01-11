import React from 'react';

export class AddAndUpdateComponent extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <label>Task Name</label>
                    <input placeholder='Task'></input>
                </div>
                <div>
                    <label>Description</label>
                    <input placeholder='Description'></input>
                </div>
                <div>
                    <label>Task status</label>
                    <select>
                        <option>Inprogress</option>
                        <option>Submit</option>
                    </select>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>
            
        )
    }
}