import { Helmet } from "react-helmet";

function Contact() {
    return (
        <div className='contentCenter'>
            <div>
                <h1 className='button'>Reach out to us!</h1>
                <p className='mail'><a onClick={(e) => { window.location.href = 'mailto:davidoregan@vt.edu'; }}>davidoregan@vt.edu</a></p>
                <p className='mail'><a onClick={(e) => { window.location.href = 'mailto:ramdevakumar20@gmail.com'; }}>ramdevakumar20@gmail.com</a></p>
                <p className='mail'><a onClick={(e) => { window.location.href = 'mailto:george19@vt.edu'; }}>george19@vt.edu</a></p>
                <p className='mail'><a onClick={(e) => { window.location.href = 'mailto:madhavj@vt.edu'; }}>madhavj@vt.edu</a></p>
                <Helmet bodyAttributes={{ class: 'black' }} />
            </div>
        </div>
    );
};

export default Contact;