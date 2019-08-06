import React from 'react'

import UserCard from './UserCard'

const CardList = props => {
    
    return (
        <div className="card-list">
            {props.githubusers.map((user) => <UserCard user = {user} />)}
        </div>
    )
}

export default CardList