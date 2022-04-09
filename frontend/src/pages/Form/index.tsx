import './styles.css';

function Form() {
  const movie = {
    id: 1,
    image:
      "https://img.elo7.com.br/product/zoom/26776B4/big-poster-filme-homem-aranha-2-2004-lo01-tamanho-90x60-cm-marvel.jpg",
    title: "Spider-Man 2",
    count: 2,
    score: 4.5,
  };

  return (
    <div className="movie-form-container">
      <img className="movie-movie-card-image" src={movie.image} alt={movie.title} />
      <div className="movie-card-bottom-container">
        <h3>{movie.title}</h3>
        <form className="movie-form">
          <div className="form-group movie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group movie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="movie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <button className="btn btn-primary movie-btn mt-3">Cancelar</button>
      </div>
    </div>
  );
}

export default Form;
