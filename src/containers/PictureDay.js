import useFetch from "../hooks/UseFetch";
import ReactPlayer from "react-player";

// Styled Components
import { MainContainer } from "../components/MainContainer.styled";
import { H2 } from "../components/H2.styled";
import { H3 } from "../components/H3.styled";
import { P } from "../components/P.styled";

export default function PictureDay() {
  const { data, loading } = useFetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
  );

  return (
    <div>
      <MainContainer style={{ display: "block" }}>
        <div
          style={{
            paddingTop: "40px",
            paddingBottom: "20px",
          }}
        >
          <H2>Astronomy Picture of the Day</H2>
        </div>
        <hr />
        <div
          style={{
            textAlign: "center",
            paddingTop: "100px",
            paddingInline: "10%",
          }}
        >
          {loading ? (
            <div>...Loading</div>
          ) : (
            <>
              <H3>{data.title}</H3>
              <div style={{ display: "flex", marginTop: "75px" }}>
                <P style={{ width: "45%" }}>{data.explanation}</P>

                <div style={{ width: "45%" }}>
                  {data.media_type === "video" && (
                    <ReactPlayer url={data.url} volume="0.05" controls="true" />
                  )}

                  {data.media_type === "image" && (
                    <div style={{}}>
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
            </>
          )}
        </div>
      </MainContainer>
    </div>
  );
}
