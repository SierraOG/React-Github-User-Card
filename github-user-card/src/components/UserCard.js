import React from 'react'

const UserCard = (props) => {
    return (
        <div className="card">
            <img src={props.user.avatar_url} />
            <div className="card-info">
                <h3 className="name">{props.user.name}</h3>
                <p className="username">{props.user.login}</p>
                <p>Location: {props.user.location}</p>
                <p>Profile:  
                <a href={props.user.html_url}>{props.user.html_url}</a>
                </p>
                <p>Followers: {props.user.folloers}</p>
                <p>Following: {props.user.following}</p>
                <p>Bio: {props.user.bio}</p>
            </div>
        </div>
    )
}

export default UserCard