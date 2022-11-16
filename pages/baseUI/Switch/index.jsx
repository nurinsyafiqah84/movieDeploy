const Switch = ({items}) => {
    
    if (Array.isArray(items)){
        console.log(items[0])
    }

    return (
        <div>
            {items?.[0]}
        </div>
    );
};

export default Switch;