function SingleCardAssociation({ name, description, image }) {
    return (
        <>
            <div className="card mx-14 mt-5 bg-secondary shadow-xl ">
                <div className="card-body flex flex-row">
                    <div className={"p-8 mr-2.5 size-16 rounded-lg bg-no-repeat bg-center bg-cover"} style={{backgroundImage: `url(${image})`}}>
                    </div>
                    <div>
                        <h2 className="card-title text-xl mb-2.5 sm:text-base md:text-lg lg:text-xl xl:text-2xl">{name}</h2>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleCardAssociation;
