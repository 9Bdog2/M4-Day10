import { useState, useEffect } from "react";

const MyRow = (props) => {
  const [songs, setSongs] = useState([]);

  const fetchMovie = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.query}`
      );
      const data = await response.json();
      if (response.ok) {
        /* console.log(`initial data`, data); */

        setSongs(data.data);
        console.log(`here is your data `, data);
      } else {
        console.log(`something went wrong`);
      }
    } catch (e) {
      console.error(`ooops an error occured while fetching`, e);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, [props.query]);

  return (
    <>
      {songs.length > 0 &&
        songs.map((song) => (
          <div className="d-inline-flex good_morning_container">
            <div
              className="d-flex align-items-center good_morning_section"
              key={song.album.id}
            >
              <img src={song.album.cover} width={70} height={70} alt="songs" />
              <p className="text_clamp_1 my-0">{song.album.title}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default MyRow;
