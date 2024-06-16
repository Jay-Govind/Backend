import { useState } from "react";
import CommentsForm from "./CommentsForm";
import "./Comment.css";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "jay-govind",
      remarks: "bhaut achcha bnaye ho ! khub khaloo 💕",
      rating: "5",
    },
  ]);

  let addNewComment = (comment) => {
    setComments((prevComments) => {
      return [...prevComments, comment];
    });
  };

  return (
    <>
      <div>
        <h3>All Comments</h3>
        {comments.map((comment, idx) => (
          <div className="Comment" key={idx}>
            <span>
              <i>{comment.remarks}</i>
            </span>
            &nbsp;&nbsp;
            <span>
              <b>(rating = {comment.rating}&#9733;)</b>
            </span>
            <p>- @{comment.username}</p>
          </div>
        ))}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
