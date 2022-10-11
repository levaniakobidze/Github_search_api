import React, { useState } from "react";
import "./UserCard.css";
import location_dark from "../../../assets/location_dark.svg";
import location from "../../../assets/location.svg";

import twitter from "../../../assets/twitter.svg";
import company_dark from "../../../assets/company_dark.svg";
import company from "../../../assets/company.svg";

import website_dark from "../../../assets/website_dark.svg";
import website from "../../../assets/website.svg";

function UserCard(props) {
  const { user, dark } = props;

  return (
    <div className={dark ? "user_card" : "user_card user_card_light"}>
      <a href={user.html_url} target='_blank' className='img_link'>
        <div className='user_img_cont'>
          <img src={user.avatar_url} alt='' />
        </div>
      </a>
      <div className='info_cont'>
        <div className='name_date'>
          <h1 className={dark ? "user_name" : "user_name user_name_light"}>
            {user.name}
          </h1>
          <p className={dark ? "date" : "date date_light"}>
            joined at {user.created_at.substr(0, 10)}
          </p>
        </div>
        <div className='nick'>@{user.login}</div>
        <div className='bio-cont'>
          {user.bio ? (
            <p className={dark ? "bio" : "bio bio_light"}>{user.bio}</p>
          ) : (
            <p className={dark ? "bio" : "bio bio_light"}>
              This profile has no bio
            </p>
          )}
        </div>
        <div className={dark ? "repo_info" : "repo_info repo_info_light"}>
          <div className={dark ? "repos" : "repos repos_light"}>
            {" "}
            <p>Repos</p> <span>{user.public_repos}</span>
          </div>
          <div className={dark ? "followers" : "followers followers_light"}>
            <p>Followers</p> <span>{user.followers}</span>
          </div>
          <div className={dark ? "following" : "following following_light"}>
            <p>Following</p> <span>{user.following}</span>
          </div>
        </div>
        <div className='additional_infos'>
          <div>
            <div className={dark ? "info" : "info info_light"}>
              <img src={dark ? location_dark : location} alt='' />
              <p>{user.location}</p>
            </div>
            <div className={dark ? "info" : "info info_light"}>
              <img src={twitter} alt='' />
              {user.twitter_username ? (
                <p>{user.twitter_username}</p>
              ) : (
                <p>Not Available</p>
              )}
            </div>
          </div>
          <div>
            <div className={dark ? "info" : "info info_light"}>
              <img src={dark ? website_dark : website} alt='' />
              <a href={user.blog} target='_blank' rel='noopener'>
                {user.blog}
              </a>
            </div>
            <div className={dark ? "info" : "info info_light"}>
              <img src={dark ? company_dark : company} alt='' />
              <p>{user.type}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
