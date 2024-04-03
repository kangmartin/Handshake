import './index.css'
import NavigationFooter from "./components/NavigationFooter.jsx";
export default function App() {
    return (
        <>
            <div className="artboard phone-1 relative bg-[#25304F]">
                <h1 className={"font-bold"}>Vos Associations Favoris</h1>
                <NavigationFooter/>
            </div>
        </>
    );
}
