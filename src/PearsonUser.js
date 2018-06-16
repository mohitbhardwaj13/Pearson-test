import React from 'react';

const PearsonUser = (props) => {
    const user = props.user;
    const onDelete = props.onDelete;
    return (
        <li key={user.id} data-id={user.id}>
            <img src={user.avatar} alt={user.first_name + ' ' + user.last_name} width="80" height="80" />
            <label>{user.first_name + ' ' + user.last_name}</label>
            <span className="delete-buttons" onClick={ () => onDelete(user.id) }>Delete</span>
        </li>
    );
};

export default PearsonUser;