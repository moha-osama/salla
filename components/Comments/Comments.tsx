"use client";

import React, { useState } from "react";
import CommentsCard from "./CommentsCard";
import { comments } from "@/constants";

const Comments = () => {
  return (
    <div className="flex items-center justify-center maxWidth">
      <ul className="grid grid-cols-3 gap-x-4">
        {comments.map((item) => (
          <CommentsCard
            key={Math.random()}
            by={item.by}
            comment={item.comment}
            rate={item.rate}
            profession={item.profession}
          />
        ))}
      </ul>
    </div>
  );
};

export default Comments;
