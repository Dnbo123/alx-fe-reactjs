import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  let { id } = useParams();

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>Paragraph of the Blog Post {id}.</p>
    </div>
  );
}

export default BlogPost;