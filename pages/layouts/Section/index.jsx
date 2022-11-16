const Section = ({title}) => {
    return (
        <section className='pt-[30px] px-10'>
            <div>
                <h2 className='font-semibold text-2xl'>{title}</h2>
                {/*<Switch items={items}/>*/}

            </div>
        </section>
    );
};

export default Section;