import React from 'react'

const validation = ( props ) => {
    return (
        <div>
            {
                props.inputLength > 5 
                    ? <p>Text Long Enough!</p>
                    : <p>Text Too Short!</p> 
            }
        </div>
    );
};

export default validation