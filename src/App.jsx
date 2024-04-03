import './index.css'
import NavigationFooter from "./components/NavigationFooter.jsx";
import FavoriteAssociationsList from "./components/FavoriteAssociationsList.jsx";
export default function App() {
    return (
        <>
            {/*<div className="artboard phone-1 relative bg-[#25304F] flex justify-center pt-5">*/}
                <FavoriteAssociationsList/>

                <NavigationFooter/>
            {/*</div>*/}
        </>
    );
}
