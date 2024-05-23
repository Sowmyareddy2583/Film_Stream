import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import no_image from "../../../public/no_image.png"

const TopNav = () => {
  const [query, setQuery] = useState(" ");
  const [search, setSearch] = useState([]);
  const getSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearch(data.results);
      // console.log(data.results);
    } catch (error) {
      console.log("error: " + error);
    }
  };
  useEffect(() => {
    getSearch();
  }, [query]);
  return (
    <div className="w-[80%] h-[10vh] relative flex ml-[20%] items-center">
      <i className="ri-search-line text-zinc-400 text-2xl"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 p-5 outline-none border-none bg-transparent text-zinc-200"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className=" ri-close-fill text-zinc-400 text-2xl cursor-pointer right-0"
        ></i>
      )}
      <div className=" absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto rounded">
        {search.map((s, i) => (
          <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
            <img className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={ s.backdrop_path || s.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                  }`
                : no_image}
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
        {/* <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <h1>hello everyone</h1>
        </Link> */}
      </div>
    </div>
  );
};

export default TopNav;
