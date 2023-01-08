import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
function UserList() {
  let { id } = useParams();
  const [posts, setList] = useState();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => setList(response.data))
      .catch((error) => console.dir(error));
  }, []);

  return (
    <div className="posts-container">
      <div className="posts">
        {posts?.map((post, index) => (
          <div key={index} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
