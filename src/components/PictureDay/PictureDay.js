import useFetch from "../UseFetch";
import ReactPlayer from "react-player";
import "./PictureDay.css";

export default function PictureDay() {
  const { data, loading } = useFetch(
    "https://api.nasa.gov/planetary/apod?api_key=" +
      process.env.REACT_APP_API_KEY
  );

  return (
    <div className="PictureDay">
      {loading ? (
        <div>...Loading</div>
      ) : (
        <div>
          <h1>{data.title}</h1>
          <h4>{data.explanation}</h4>

          {data.media_type === "video" && (
            <div>
              <ReactPlayer url={data.url} volume="0.05" controls="true" />
            </div>
          )}

          {data.media_type === "image" && (
            <div>
              <img src={data.url} alt="space-img" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
