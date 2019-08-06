import React from 'react';
import './App.css';
import axios from 'axios'

import CardList from './components/CardList'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      githubusers: []
    }
  }

  componentDidMount(){
    // axios get followers list from myusername and add them to page
    const myUserName = 'sierraog';
    axios.get(`https://api.github.com/users/${myUserName}`)
    .then(data => {
      const userObject = data.data
      const myFollowers = userObject.followers_url

      axios.get(myFollowers)
      .then(data =>{
        const userFollowers = data.data
        userFollowers.forEach(follower => {
          const followerUserName = follower.login
          axios.get(`https://api.github.com/users/${followerUserName}`)
            .then(data => {
              const userObject = data.data
              console.log(this.state.githubusers)
              this.setState({githubusers: [...this.state.githubusers, userObject]})
            })
        })
      })
      })
      .catch(error=>{
        console.log('error')
      })
      }

  render(){
    return (
      <>
      <CardList githubusers={this.state.githubusers}/>
      </>
    )
  }
}

export default App;
