import React, { useEffect, useState } from "react";
import "./User.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";

const User = () => {

  const {id} = useParams();

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGQxM2Q5M2UyYWY1NWU5NDI4N2RhNjRjNmEwMDcwZCIsIm5iZiI6MTczMDUwMzUxMC41ODE3OTUyLCJzdWIiOiI2NzI1NjEyNTgyNDQyZmMzYTk3OTM5ODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VmWe7zRK0VTsQ1bbMe6J2WKInx8n7PsFM48feAkHG4s",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  },[])




  return (
    <div className="user">
      <Link to='/'>
      <FontAwesomeIcon className="icon" icon="arrow-left" />
      </Link>
      <iframe
        className="user__video-player"
        width="90%"
        height="90%"
        src={`https://youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreeen
      ></iframe>
      <div className="user__info">
        <p className="publish__date">{apiData.published_at.slice(0,10)}</p>
        <p className="name">{apiData.name}</p>
        <p className="type">{apiData.type}</p>
      </div>
    </div>
  );
};

export default User;
