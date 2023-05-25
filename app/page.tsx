"use client";

import {useEffect, useState } from "react"

import client from './backend/contentful'
import Post from "./component/Post";
import style from "./styles/page.module.css"

export default function Home() {

  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    client
      .getEntries({
        content_type: 'blogPost'
      })
      .then(res => setPosts(res.items))
      .catch(err => console.log('Unable to fetch posts', err));
  }, [])

  console.log(posts);

  if(!posts) {
    return;
  }

  return (
    <main>
      <div className={style.postsContainer}>
        {posts.length ? posts.map((post : any, index : number) =>
          <Post
            key={index}
            postData={{
              postName: post.fields.blogName,
              authorName: post.fields.authorName,
              postImg: post.fields.mainImage.fields.file.url,
              postDate: post.sys.createdAt,
              postDesc: post.fields.blogDescription,
              postId: post.sys.id
            }}
            postPosition={index}/>
        ) : <div style={{'display': 'flex', 'justifyContent': 'center', 'alignContent': 'center', 'minHeight': '100vh'}}>No Posts</div>}
      </div>
    </main>
  )
}
