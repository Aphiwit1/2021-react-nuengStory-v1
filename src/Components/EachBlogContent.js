import { useParams } from "react-router-dom"
import blogList from '../data/bloglist'
import CssEP1 from "../Blog/CSS/CssEP1";
import { useState, useEffect } from "react";

function EachBlogContent() {
    const { postId } = useParams();

    let content;
    if (postId == '1') {
        content = <CssEP1></CssEP1>
    } else {
        content = <div>Hi other</div>
    }

    return (
        <div>
          {content}
        </div>
    )
}

export default EachBlogContent
