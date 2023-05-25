import React from 'react'
import style from '../styles/post.module.css'
import Link from 'next/link';

export default function Post({postData, postPosition} : any) {

    const date = new Date(postData.postDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return (
        <div className={postPosition % 2 === 0 ? style.blogContainer : style.blogContainerReverse}>
            <div className={postPosition % 2 === 0 ? style.leftSide : style.leftSideReverse}>
                <h1>{postData.postName}</h1>
                <p>{postData.authorName}</p>
                <p>{`${month}-${day}-${year}`}</p>
                <p>{postData.postDesc}</p>
                <Link href={`/posts/${postData.postId}`}>Read More</Link>
            </div>
            <img className={style.heroImage} src={postData.postImg} alt='blog hero'/>
        </div>
    )
}
