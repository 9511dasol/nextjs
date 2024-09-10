import axios from "axios";
import { error } from "console";
import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
}; // 레이아웃에서 굳이 보여줄 필요 없다.

export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovie() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); //Loding
  // const response = await fetch(URL);
  // const json = await response.json();
  // return json
  // return fetch(URL).then(response => response.json());
  return axios(URL).then((response) => response.data);
}

export default async function Page() {
  const movies = await getMovie();
  return (
    <div className={styles.container}>
      {movies.map((v) => (
        <Movie
          key={v.id}
          id={v.id}
          poster_path={v.poster_path}
          title={v.title}
        />
      ))}
    </div>
  );
}
