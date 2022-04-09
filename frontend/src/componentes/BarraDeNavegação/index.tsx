import {ReactComponent as IconGit} from 'assets/imgs/Vector.svg';
import './styles.css';

function NavBar() {
    
    return ( 
        <header>
            <nav className="container">
                <div className="Movie-barra-nav">
                    <h1>Movie</h1>
                    <a href="https://github.com/HeitorNunes275">
                        <div className="Movie-organizar-foto">
                            <IconGit/>
                            <p className="Movie-organizar-nome">Click here!</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header> 
    )
}

export default NavBar; 