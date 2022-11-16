import { useLayoutEffect, useRef, useState } from "react";

const Switch = ({items}) => {
    
    if (Array.isArray(items)){
        console.log(items[0])
    }

    const [isToggled, setToggle] = useState(false);
    const [item1Width, setItem1Width] = useState();
    const [item2Width, setItem2Width] = useState();
    const item1Ref = useRef();
    const item2Ref = useRef();

    const handleToggle = (toggleState) => {
        setToggle(toggleState)
    }

    useLayoutEffect(() =>{
        setItem1Width(item1Ref.current.offsetWidth)
        setItem2Width(item2Ref.current.offsetWidth) 
    },[])

    const activeTextColor = "bg-clip-text text-transparent text-green bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"

    return (
        <div className="hover: cursor-pointer h-8 border-solid border-darkBlue rounded-[30px] border-[1px] font-semibold flex items-center relative">
            {/*{items?.[0]}*/}
            <div ref={item1Ref} onClick={handleToggle.bind(null, false)} className={`py-1 px-5 h-8 rounded-[30px] ${isToggled || activeTextColor}`}>{items?.[0]}</div>
            <div ref={item2Ref} onClick={() => {handleToggle(true)}} className={`py-1 px-5 h-8 rounded-[30px] ${isToggled && activeTextColor}`}>{items?.[1]}</div>
            
        </div>
    );
};

export default Switch;