import React from 'react';
import './ValidationComponent.css';
const vComponent = (props) => {
    let message = null;
    if (props.length <= props.limit && props.length > 0) {
        message = (
            <p>
                Text too short
            </p>
        )
    } else if (props.length > 5) {
        message = (
            <p>
                Text long enoth
        </p>
        )
    }
    return (
        <div className="ValidationComponent">
            {message}
        </div>

    )
}

export default vComponent;
