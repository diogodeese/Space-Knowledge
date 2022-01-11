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
        <div className="PictureDay-container">
          <h1 className="PictureDay-title">{data.title}</h1>
          <h4 className="PictureDay-description">{data.explanation}</h4>

          <div className="PictureDay-content-container">
            {data.media_type === "video" && (
              <ReactPlayer url={data.url} volume="0.05" controls="true" />
            )}

            {data.media_type === "image" && (
              <div style={{ marginInline: "10%" }}>
                <img
                  src={data.url}
                  alt="space-img"
                  style={{
                    borderRadius: 15,
                    width: 720,
                    maxHeight: 480,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
