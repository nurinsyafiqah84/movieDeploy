import Switch from "../../baseUI/Switch";

const Section = ({title, items, onToggle}) => { 
    return (
        <section className='pt-[30px]'>
            <div className='flex items-center gap-5 px-10'>
                <h2 className='font-semibold text-2xl'>{title}</h2>
                <Switch items={items} onToggle={onToggle}/>
                
            </div>
        </section>
    );
};

export default Section;