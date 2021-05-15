import React from 'react'
import styles from './users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers( [
            {
                id: 1,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Andrew_Rannells_2015.jpg/220px-Andrew_Rannells_2015.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'aslanbek',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Andrew_Rannells_2015.jpg/220px-Andrew_Rannells_2015.jpg',
                followed: true,
                fullName: 'Lexa',
                status: 'tankist',
                location: {city: 'Vileyka', country: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Andrew_Rannells_2015.jpg/220px-Andrew_Rannells_2015.jpg',
                followed: false,
                fullName: 'Sanya',
                status: 'lox',
                location: {city: 'Moscow', country: 'Russia'}
            }
        ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users
