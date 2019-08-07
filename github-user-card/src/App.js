import React from 'react';
import './App.css';
import axios from 'axios'

import CardList from './components/CardList'
import UserForm from './components/UserForm'
import UserCard from './components/UserCard'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      userName: 'sierraog',
      usersInfo: {},
      githubusers: [],
      errorMsg: null,
    }
  }

  componentDidMount() {
    console.log('from component did mount',this.state)
    this.getFollowers()
    this.getUsersInfo()
  }


  submitUser = newUserName => {
    this.setState({ userName: newUserName, githubusers: [] }, this.getFollowers)
  }

  getUsersInfo = () => {
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(data => {
        this.setState({usersInfo: data.data})
      })
  }

  getFollowers = () => {
    console.log(this.state.userName)
    axios.get(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(data => {
        data.data.forEach(follower => {
          axios.get(`https://api.github.com/users/${follower.login}`)
            .then(data => {
              console.log(this.state)
              this.setState({ githubusers: [...this.state.githubusers, data.data], errorMsg: null})
            })
        })
      })
      .catch(error=>{
        console.log(error)
        this.setState({errorMsg: 'Invalid username. Please try a new username.'})
      })
  }

  render(){
    return (
      <>
      <div>
        {/* <UserCard user={this.state.usersInfo} /> */}
        <h1 style={{textAlign: 'center'}}>{this.state.userName}'s GitHub followers</h1>
        <UserForm submitUser={this.submitUser}/>
      </div>
      {this.state.errorMsg ? <h3 style={{textAlign: 'center'}}>{this.state.errorMsg}</h3> 
      :
      <CardList githubusers={this.state.githubusers}/>
      }
      </>
    )
  }
}

export default App;
