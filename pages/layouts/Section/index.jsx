import Switch from "../../baseUI/Switch";

//boleh display satu2 
//const Section = ({title, items, onToggle})
const Section = ({title, children, ...props}) => { 
    return (
        <section className='pt-[30px]'>
            <div className='flex items-center gap-5 px-10'>
                <h2 className='font-semibold text-2xl'>{title}</h2>
                {/*<Switch items={items} onToggle={onToggle}/>*/}
                <Switch {...props}/>
            </div>
            <div className='pt-5'>
                {children}
            </div>
        </section>
    );
};

export default Section;