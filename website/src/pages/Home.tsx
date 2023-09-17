import Helmet from 'react-helmet'
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className='contentCenter'>
            <div>
                <h1 className='findTitle'>Find your community today!</h1>
                <button className='custom-button'><Link to='/search' style={{ textDecoration: 'none', color: 'white' }}>START NOW!</Link></button>
                <Helmet bodyAttributes={{ class: 'homepage' }} />
            </div>
        </div>
    )
}

export default Home