import {ReactComponent as StarFull} from 'assets/imgs/Star-Full.svg';
import {ReactComponent as StarHalf} from 'assets/imgs/Star-Half.svg';
import {ReactComponent as StarEmpty} from 'assets/imgs/Star-Empty.svg';
import './styles.css';


function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}

export default MovieStars;
