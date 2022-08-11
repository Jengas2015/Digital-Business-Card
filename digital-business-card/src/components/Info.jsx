import ProfileImage from '../assets/profileTwitter.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Info() {
    return (
        <div className='info'>
            <img className='profileImage' src={ProfileImage} />
            <div className='profileContent'>
                <h1 className='profileName'>Roy Jang</h1>
                <p className='profileTitle'>Frontend Developer</p>
                <a href="https://jengas2015.github.io/royJangPortfolio/">
                    <p className='portfolioLink'>My Portfolio</p>
                </a>


                <div className='CTA'>
                    <a href='mailto:arejang@gmail.com'><button className='btn email' ><FontAwesomeIcon className='envelope' icon={faEnvelope} />Email</button></a>

                    <a href='https://www.linkedin.com/in/roy-jang-99a458a0/'>
                        <button className='btn linkedIn'><FontAwesomeIcon className='linkedIn' icon={faLinkedin} /> LinkedIn</button>
                    </a>


                </div>
            </div>

        </div>

    )

}