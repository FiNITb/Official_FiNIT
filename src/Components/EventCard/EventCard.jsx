import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const EventCard = ({ id, title, poweredBy, image, description }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  

  return (
    <div
      className={`EventCard relative w-72 h-96 rounded-2xl overflow-hidden transition-transform duration-500 ease-in-out ${
        hover ? "scale-105" : "scale-100"
      }`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`absolute inset-0 flex flex-col justify-end p-4  border-2 border-white rounded-lg transition-all duration-500 ease-in-out ${
          hover ? "translate-y-[-70%]" : "translate-y-0"
        }`}
      >
        <p className="text-xl font-extrabold uppercase text-black px-5 py-2 bg-purple-400 rounded-2xl text-center">{title}</p>
        {/* <p className="text-lg">Powered By</p>
        <p className="text-lg text-black">{poweredBy}</p> */}
      </div>
      {hover && (
        <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-75 p-4 rounded-lg transition-opacity duration-500 ease-in-out">
          <p className="text-sm text-gray-700 overflow-hidden line-clamp-2">
            {description}
          </p>

          <button
            className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-teal-500 transition-all"
            onClick={() => {            
              navigate(`${title}`);
              window.scrollTo(0, 0);
            }}
          >
            Know more
          </button>
        </div>
      )}
    </div>
  );
};

export default EventCard;
