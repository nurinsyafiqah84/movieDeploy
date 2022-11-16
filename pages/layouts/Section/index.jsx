import Switch from "../../baseUI/Switch";

const Section = ({title, items}) => {
    return (
        <section className='pt-[30px] px-10'>
            <div>
                <h2 className='font-semibold text-2xl'>{title}</h2>
                <Switch/>
            </div>
        </section>
    );
};

export default Section;