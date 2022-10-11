import React, { useState, useRef, useCallback, useEffect } from "react";
import "./Home.css";
import UserCard from "./userCard/UserCard";
import searchIcon from "../../assets/searchIcon.svg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

function Home({ dark, setDark }) {
  /////////
  // STATES
  const [user, setUser] = useState({});
  const [userExists, setUserExists] = useState(true);
  const [inputValue, setInputValue] = useState("");
  ///////////////////////
  // FUNCTION TO FETCH THE DATA
  const fetchUsersData = async (URL) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (!response.ok) {
        setUserExists(false);
        return;
      }
      setUser(data);
    } catch (error) {}
  };
  /////////////////////////////////////////////
  // USEEFFECT TO CATCH IF USER EXISTS OR NOT
  useEffect(() => {
    if (user) {
      setUserExists(true);
    }
    if (!user) {
      setUserExists(false);
    }
  }, [user]);

  //////////////////////////////////////////////////////
  const onChangeHandler = (value) => {
    setInputValue(value);
  };

  const serachHandler = () => {
    const url = `https://api.github.com/users/${inputValue.replace(/\s/g, "")}`;
    fetchUsersData(url);
  };

  const changeLightMode = () => {
    setDark(() => !dark);
  };

  return (
    <div className={dark ? "home" : "home home_light"}>
      <div className='header'>
        <h1 className={dark ? "logo" : "logo logo_light"}>devfinder</h1>
        <div
          className={
            dark ? "dark_light_mode" : "dark_light_mode dark_light_mode_light"
          }
          onClick={changeLightMode}>
          <p>{!dark ? "DARK" : "LIGHT"}</p>
          <img src={!dark ? moon : sun} alt='' />
        </div>
      </div>
      <div
        className={
          dark
            ? "search-input-cont"
            : "search-input-cont search-input-cont_light"
        }>
        <img src={searchIcon} alt='search' className='search_icon' />
        <input
          type='search'
          placeholder='Search GitHub username…'
          onChange={(e) => onChangeHandler(e.target.value)}
        />
        <p className='error'> {!userExists && "No results"}</p>
        <span className='search_btn' onClick={serachHandler}>
          Search
        </span>
      </div>
      {/* {loading && (
        <p className='loading'>
          <span></span>
        </p>
      )} */}
      <div className='user-container'>
        {Object.keys(user).length > 0 && (
          <UserCard key={user.id} user={user} dark={dark} />
        )}
      </div>
    </div>
  );
}

export default Home;
