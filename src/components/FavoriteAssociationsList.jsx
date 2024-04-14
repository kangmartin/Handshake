import SingleCardAssociation from "./SingleCardAssociation.jsx";
function FavoriteAssociationsList(){
    return(
        <>
            <div className={"flex-row mb-40"}>
                <h1 className={"font-extrabold ml-14 mt-10 text-2xl"}>{"Liste D'associations"}</h1>
                <p className={"ml-14"}>27 associations à découvrir</p>
                <div className={"ml-14 mt-5"}>
                    <button className="btn btn-primary mr-3">Pour toi</button>
                    <button className="btn btn-neutral">Autres</button>
                </div>

                <SingleCardAssociation/>
                <SingleCardAssociation/>
                <SingleCardAssociation/>
                <SingleCardAssociation/>
                <SingleCardAssociation/>
                <SingleCardAssociation/>
                <SingleCardAssociation/>

            </div>

        </>
    )
}

export default FavoriteAssociationsList
