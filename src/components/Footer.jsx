import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
    return (
        <footer>
        <div className='footer-container'>
          <p>&copy; 2023 Nicolas Machuca</p>
          <p>Made with <span class="heart-icon"><FontAwesomeIcon icon={faHeart} /></span> from Santiago, Chile</p>
        </div>
      </footer>
    );
}