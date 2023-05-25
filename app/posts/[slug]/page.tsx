"use client";

import client from "@/app/backend/contentful";
import DisqusComments from "@/app/component/DisqusComments";
import RichText from "@/app/component/RichText";
import { useEffect, useState } from "react";
import style from '../../styles/richtext.module.css'
import { remark } from "remark";
import html from "remark-html";

export default function Post({params} : {params: {slug: string}}) {

        const {slug} = params;
        const [post, setPost] = useState<any>();

        useEffect(() => {
            client
            .getEntry(slug)
            .then(res => setPost(res))
            .catch(err => console.log('Unable to fetch post', err));
        }, [])

        if(!post) return;
        console.log(post);

        return (
            <>
                <h1>{post.fields.blogName}</h1>
                <p>{post.fields.authorName}</p>
                <p>{post.sys.createdAt}</p>
                <img src={post.fields.mainImage.fields.file.url} alt="post-hero" />
                <div className={style.richTextContainer}>
                    <RichText content={post.fields.blogContent} />
                </div>
                {/* <div dangerouslySetInnerHTML={{__html: remark().use(html).processSync(post.fields.content).toString()}} /> */}
                <DisqusComments url={`http://localhost:3000/posts/${slug}`} identifier={slug} title={post.fields.name} />
            </>
        )
}
