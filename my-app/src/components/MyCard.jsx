import { useState, useEffect } from "react";

const MyCard = (props) => {
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
      {
      songs.length > 0 &&
        songs.map((song, i) => i < 10 &&(
            <div className="spotify-card d-flex flex-column">
             <div className="p-2" key={song.album.id}>
              <div>
                <img
                  src={song.album.cover}
                  alt ="songs"
                />
              </div>
              <div className="mt-2">
                <h6 className="text_clamp_1">{song.album.title}</h6>
                <p className="text_clamp_2">{song.album.year}</p>
              </div> 
            </div>
            </div>
        ))
        }
        
    </>
  );
};

export default MyCard;
