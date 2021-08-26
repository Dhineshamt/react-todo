import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class Login extends React.Component {
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
        alert(`'Submitted' ${this.state.userName}, ${this.state.password}`);
        event.preventDefault();
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

            <div class='container'>
                <div class='col-6'></div>
                <div class='col-6'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}