import React from 'react';

const Switch = ({items}) => {
    
    if (Array.isArray(items)){
        console.log(items[0])
    }

    return (
        <div>
            {items}
            
        </div>
    );
};

export default Switch;