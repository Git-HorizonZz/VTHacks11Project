import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";
import Results from "./pages/Results";

function App(props) {
    return (
        <div style={{ height: '100vh' }}>
            <div>
                <NavBar />
            </div>
            <div>
                {props.content === '' ? <Home /> : props.content === 'search' ? <Search /> : props.content === 'profile' ? <Profile /*signedin={true}*/ /> : props.content === 'contact' ? <Contact /> : props.content === 'results' ? <Results /> : null}
            </div>
        </div>
    )
}

export default App