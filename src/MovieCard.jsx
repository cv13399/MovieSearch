
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    const onCardClicked = (id) =>{
      window.open("https://www.imdb.com/title/"+ `${id}`)
    }

    return (
      <div className="movie" key={imdbID}
        onClick={() => onCardClicked(imdbID)}
        role="button"
      >
        <div>
          <p>{Year}</p>
        </div>
  
        <div>
          <img 
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} 
            alt={Title}
          />
        </div>
  
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
    );
}



export default MovieCard;