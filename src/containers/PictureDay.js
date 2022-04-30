import useFetch from "../hooks/UseFetch";
import useDate from "../hooks/UseDate";
import ReactPlayer from "react-player";

// Styled Components
import { Header } from "../components/Header.styled";
import { MainContainer } from "../components/MainContainer.styled";
import { Input } from "../components/Input.styled";

export default function PictureDay() {
  const { endDate, startDate } = useDate();

  const { data, loading } = useFetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=${startDate}&end_date=${endDate}`
  );

  return (
    <>
      <Header>Space Knowledge</Header>
      <MainContainer>
        {loading ? (
          <div>
            ...Loading | {endDate} - {startDate} |
          </div>
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
                  <Input></Input>

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
      </MainContainer>
    </>
  );
}
