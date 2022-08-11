import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="footer">
            <a href='https://twitter.com/Codingwithroy'><FontAwesomeIcon className='twitter' icon = {faSquareTwitter} /></a>
            <a href='https://facebook.com'><FontAwesomeIcon className='facebook' icon = {faSquareFacebook} /></a>
            <a href='https://instagram.com'><FontAwesomeIcon className='instagram' icon = {faSquareInstagram} /></a>
            <a href='https://github.com/Jengas2015'><FontAwesomeIcon className='github' icon = {faSquareGithub} /></a>
            
        </div>

    )

}