import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import Movievideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie Viedos</h1>}>
        <Movievideos id={id} />
      </Suspense>
    </div>
  );
}

export default MovieDetail;

// 중관호를 추가하지 않으면 not found가 추가된다.
// 다이나믹 루트
// const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); // 병렬 가능
