// import picture3 from "../images/3.jpg";
// import picture2 from "../images/4.jpg";
import { Link } from "react-router-dom";
// import picture1 from "../images/5.jpg";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useVideoList from "../hook/useVideoList";

import Video from "./video";

function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => setPage(page + 15)}
          hasMore={hasMore}
          loader="Loading..."
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link exact to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            )
          )}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No Data Found.</div>}

      {error && <div>{error}</div>}

      {loading && <div>Loading...</div>}
    </div>
  );
}

export default Videos;

// <Video
//       picture={picture2}
//       questionNumber="8 Questions"
//       score="Not taken yet"
//     />

//     <Video picture={picture3} questionNumber="10 Questions" score="10 / 10" />

//     <Video
//       picture={picture1}
//       questionNumber={"5 Questions"}
//       score={"Not taken yet"}
//     />

//     <Video
//       picture={picture2}
//       questionNumber="9 Questions"
//       score="Not taken yet"
//     />

//     <Video picture={picture3} questionNumber="10 Questions" score="5 / 10" />

//     <Video picture={picture1} questionNumber="10 Questions" score="7 / 10" />

//     <Video picture={picture2} questionNumber="10 Questions" score="8 / 10" />

//     <Video picture={picture3} questionNumber="10 Questions" score="3 / 10" />

//     <Video picture={picture1} questionNumber="8 Questions" score="5 / 8" />
