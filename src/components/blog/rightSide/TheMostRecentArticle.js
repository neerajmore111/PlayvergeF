import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleItem from "./ArticleItem";
import { Link } from "react-router-dom";

export default function TheMostRecentArticle() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("https://playvergrserver2-1.onrender.com/api/news/?new=true/", {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="widget-area" aria-label="Blog Sidebar">
      <div className="iq-widget-menu widget">
        <h5 className="widget-title">Latest Posts</h5>
        {/* Article items  */}
        {lists?.map((item, index) => (
          <ArticleItem key={index} item={item} />
        ))}
      </div>
      {/* Tags */}
      <div id="tag_cloud-2" className="widget widget_tag_cloud">
        <h5 className="widget-title">Tag-uri</h5>
        <div className="tagcloud">
          <ul className="wp-tag-cloud">
            <li>
              <Link to="#" className="tag-cloud-link ">
              Action
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link ">
              Comedy
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link ">
              Drama
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link ">
              Historical
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link ">
                Horror
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link ">
              Movie 
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link">
              Movie Trailers
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link">
              Mystery
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link">
              Rumors
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link">
              Thriller 
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link">
              Trailers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
