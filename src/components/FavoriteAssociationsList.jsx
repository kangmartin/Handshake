import SingleCardAssociation from "./SingleCardAssociation.jsx";
function FavoriteAssociationsList(){
    return(
        <>
            <div className={"flex-row"}>
                <h1 className={"font-bold text-center"}>Vos Associations Favoris</h1>
                <SingleCardAssociation/>
            </div>

        </>
    )
}

export default FavoriteAssociationsList
