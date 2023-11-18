"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const BlogPost = () => {
  const params = useParams();

  return (
    <div>
      <button onClick={() => console.log(params)}>ddd</button>
      {`${params.postslug}`}
    </div>
  );
};

export default BlogPost;
