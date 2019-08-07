import React from 'react'

import UserCard from './UserCard'

const CardList = props => {
    return (
        <div className="card-list" style={{display: 'flex', justifyContent: 'space-around', flexFlow: 'wrap'}}>
            {props.githubusers.map((user) => <UserCard user = {user} />)}
        </div>
    )
}

export default CardList