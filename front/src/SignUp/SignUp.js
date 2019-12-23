import React from 'react';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
        }
    }

updateEmailField = (e) => this.setState({email: e.target.value})

  render() {
      const { email } = this.state
    return(
        <div>
            <h1>{email}</h1>
            <input type="email" name="email" onChange={this.updateEmailField} />
        </div>
    );
  }
}

export default SignUp;