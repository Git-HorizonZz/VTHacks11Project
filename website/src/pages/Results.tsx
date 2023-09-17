import { Helmet } from "react-helmet"

function Results() {
    return (
        <div className='contentCenter'>
            <div>
                <h1 className='button'>Results</h1>
                <Helmet bodyAttributes={{ class: 'black' }} />
            </div>
        </div>
    )
}

export default Results