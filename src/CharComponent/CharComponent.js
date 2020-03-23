import React from 'react';
import './CharComponent.css';
const cComponent = (props) => {

    return (
        <div className="CharComponent" onClick={props.click}>

            <p>
                {props.later}
            </p>
        </div>

    )
}

export default cComponent;
