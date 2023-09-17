import { Helmet } from "react-helmet"
// import SignIn from "../components/SignIn"
// import DisplayProfile from "./DisplayProfile"
import SignUp from "../components/SignUp"

// function Profile(props) {
function Profile() {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <div>
                {/* {props.signedin === false ? <SignIn /> : <DisplayProfile content={'username'} />} */}
                <SignUp />
                <Helmet bodyAttributes={{ class: 'black' }} />
            </div>
        </div>
    )
}

export default Profile