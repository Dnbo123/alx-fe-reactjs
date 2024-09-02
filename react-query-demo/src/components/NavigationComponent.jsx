import React, { useState } from 'react';
import PostsComponent from './PostsComponent.jsx';

function Navigation() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div>
      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? 'Hide Posts' : 'Show Posts'}
      </button>
      {showPosts && <PostsComponent />}
    </div>
  );
}

export default Navigation;