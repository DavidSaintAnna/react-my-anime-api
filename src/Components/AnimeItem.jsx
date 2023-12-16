import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

function AnimeItem() {
  const { id } = useParams();

  const [anime, setAnime] = React.useState({});
  const [characters, setCharacters] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);

  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  const getAnime = async (anime) => {
    const reponse = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await reponse.json();
    setAnime(data.data);
  };

  useEffect(() => {
    getAnime(id);
  }, []);
  return (
    <div>
      <h1>{title}</h1>
      <div className="details">
        <div className="detail">
          <div className="image">
            <img src={images?.jpg.large_image_url} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeItem;
