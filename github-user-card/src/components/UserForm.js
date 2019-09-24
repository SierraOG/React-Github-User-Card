import React from 'react'

class UserForm extends React.Component {
    constructor(){
        super()
        this.state = {
            user: ''
        }
    }

    handleChanges = event =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitform = event =>{
        event.preventDefault();
        this.props.submitUser(this.state.user)
        this.setState({user: ''})
    }

    render(){
        return (
            <div  style={{width: '300px', margin: '0 auto'}}>
                <form onSubmit={this.submitform}>
                    <input
                    type="text"
                    value={this.user}
                    name="user"
                    onChange={this.handleChanges}
                    />
                    <button>Find User</button>
                </form>
          </div>
        )
    }
}

export default UserForm;