import SingleCardAssociation from "./SingleCardAssociation.jsx";
function FavoriteAssociationsList(){
    return(
        <>
            <div className={"flex-row mb-40"}>
                <h1 className={"font-extrabold ml-14 mt-10 text-2xl"}>{"Liste D'associations"}</h1>
                <p className={"ml-14"}>10 associations à découvrir</p>
                <div className={"ml-14 mt-5"}>
                    <button className="btn btn-primary mr-3">Pour toi</button>
                    <button className="btn btn-neutral">Autres</button>
                </div>

                <SingleCardAssociation
                    name="Zéro Waste France"
                    description="Militer pour un mode de vie zéro déchet"
                    image="logo-zwf.png"
                />

                <SingleCardAssociation
                    name="Les Amis de la Terre"
                    description="Pour sortir des énergies fossiles"
                    image="logo-LADLT.png"
                />

                <SingleCardAssociation
                    name="Générations Futures"
                    description="Laisser une terre vivable à nos enfants"
                    image="logo-gf.png"
                />

                <SingleCardAssociation
                    name="Greenpeace France"
                    description="Promouvoir la protection de l'environnement"
                    image="logo-gp.jpeg"
                />

                <SingleCardAssociation
                    name="Fondation GoodPlanet"
                    description="Sensibilisation aux enjeux environnementaux pour un monde plus durable"
                    image="logo-fg.webp"
                />

                <SingleCardAssociation
                    name="Extinction Rebellion"
                    description="La désobéissance civile en mode d'action"
                    image="logo-er.png"
                />
                <SingleCardAssociation
                    name="WWF"
                    description="Protéger les espèces animales menacées d'extinction"
                    image="logo-wwf.webp"
                />

                <SingleCardAssociation
                    name="Agir pour l’environnement"
                    description="Faire pression sur les gouvernements"
                    image="logo-ape.jpeg"
                />

                <SingleCardAssociation
                    name="France Nature Environnement"
                    description="Préservation de la nature et des animaux"
                    image="logo-fne.png"
                />

                <SingleCardAssociation
                    name="Noé"
                    description="Pour la sauvegarde de la biodiversité en France et dans le monde."
                    image="logo-noe.png"
                />


            </div>

        </>
    )
}

export default FavoriteAssociationsList
