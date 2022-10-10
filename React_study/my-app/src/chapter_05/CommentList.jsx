import React, { Component } from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "안경호",
    comment: "안녕하세요 jay입니다.",
  },
  {
    name: "홍길동",
    comment: "리액트 재밌어요",
  },
  {
    name: "리액트",
    comment: "화이팅 입니다.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
