import useFetch from "../hooks/UseFetch";
import useDate from "../hooks/UseDate";
import ReactPlayer from "react-player";

// Styled Components
import { MainContainer } from "../components/MainContainer.styled";

export default function PictureDay() {
  const { endDate, startDate } = useDate();

  const { data, loading } = useFetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
  );

  return (
    <div>
      <MainContainer>
        {loading ? (
          <div>
            ...Loading | {endDate} - {startDate} |
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "100px" }}>
            <h2>Picture of the Day</h2>
            <h1>{data.title}</h1>
            <h4>{data.explanation}</h4>

            <div>
              {data.media_type === "video" && (
                <ReactPlayer url={data.url} volume="0.05" controls="true" />
              )}

              {data.media_type === "image" && (
                <div style={{ marginInline: "10%" }}>
                  <img
                    src={data.url}
                    alt="space-img"
                    style={{
                      borderRadius: 5,
                      width: 720,
                      maxHeight: 480,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </MainContainer>
    </div>
  );
}
