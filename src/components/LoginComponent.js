import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        // alert(`'Submitted' ${this.state.userName}, ${this.state.password}`);
        event.preventDefault();
        this.props.history.push('/todo');
    }
    render() {
        return (
            
            /*
            //   <form>
            //     <label>
            //       Username
            //       <input type ='text' value={this.state.userName} name='userName' onChange={this.handleChange}/>
            //     </label>
            //     <label>
            //       Password
            //       <input type ='password' value={this.state.password} name='password' onChange={this.handleChange}/>
            //     </label>
            //     <Button onClick={this.handleSubmit}> Submit </Button>
            //   </form>
            */
            <div className='container text-center w-25 block-example mt-3 p-4 form-content' >         
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label >Email address</Form.Label>
                            <Form.Control className='text-center' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='text-center' type="password" placeholder="Password" />
                        </Form.Group>

                        <Button onClick={this.handleSubmit} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
        );
    }
}

export default withRouter(Login);