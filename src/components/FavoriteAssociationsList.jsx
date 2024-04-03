import SingleCardAssociation from "./SingleCardAssociation.jsx";
function FavoriteAssociationsList(){
    return(
        <>
            <div className={"flex-row mb-40"}>
                <h1 className={"font-bold text-center my-10 text-2xl"}>Vos Associations Favorites</h1>
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
