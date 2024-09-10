import { URL as API_URL } from "../app/(home)/page";
import axios from "axios";
import styles from "../styles/movie-videos.module.css";

export async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return axios(`${API_URL}/${id}/videos`)
    .then((response) => response.data)
    .catch((e) => console.log(e));
  // throw new Error('something broke,.,');
}

async function Movievideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((v) => (
        <iframe
          key={v.id}
          src={`https://youtube.com/embed/${v.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={v.name}
        />
      ))}
    </div>
  );
}

export default Movievideos;
