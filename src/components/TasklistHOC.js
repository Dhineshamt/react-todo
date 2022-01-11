// HOC.js

import React, {Component} from 'react';


export default function TasklistHOC(Task, data){
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }
        
        render(){
            return (
                <Task data={this.state.data} />
            );
        }
    } 
}