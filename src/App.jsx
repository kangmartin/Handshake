import './index.css'
import NavigationFooter from "./components/NavigationFooter.jsx";
import FavoriteAssociationsList from "./components/FavoriteAssociationsList.jsx";
import CardSwiper from "./components/CardSwiper.jsx";

export default function App() {
    return (
        <>
            {/*<div className="artboard phone-1 relative bg-[#25304F] flex justify-center pt-5">*/}

                <div className={"flex items-center justify-center h-screen"}>
                    <CardSwiper/>
                </div>

                <NavigationFooter/>

            {/*</div>*/}
        </>
    );
}
