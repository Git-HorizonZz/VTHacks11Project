import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NavBar from "./components/NavBar";

function App(props) {
    return (
        <div style={{ height: '100vh' }}>
            <div>
                <NavBar />
            </div>
            <div>
                {props.content === '' ? <Home /> : props.content === 'search' ? <Search /> : props.content === 'about' ? <About /> : props.content === 'contact' ? <Contact /> : null}
            </div>
        </div>
    )
}

export default App