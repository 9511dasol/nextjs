import axios from "axios";
import { URL as API_URL } from "../app/(home)/page";
import info from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));

  return axios(`${API_URL}/${id}`)
    .then((r) => r.data)
    .catch((e) => console.log(e));
}

async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={info.container}>
    <img
      src={movie.poster_path}
      className={info.poster}
      alt={movie.title}
    />
    <div className={info.info}>
      <h1 className={info.title}>{movie.title}</h1>
      <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
      <p>{movie.overview}</p>
      <a href={movie.homepage} target="_blank">
        Homepage &rarr;
      </a>
    </div>
  </div>
  );
}

export default MovieInfo;
