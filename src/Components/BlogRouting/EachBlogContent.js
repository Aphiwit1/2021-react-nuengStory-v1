import { useParams } from "react-router-dom"
import CssEP1 from "../../Blog/CssStory/CssEP1";
import CssBlogEp2 from "../../Blog/CssStory/CssBlogEp2";

function EachBlogContent() {
    const { postId } = useParams();

    let content;
    if (postId == 'how-to-add-cascadia-vscode') {
        content = <CssEP1></CssEP1>
    } else if (postId == 'css-trick-2-how-to-set-element-in-center') {
        content = <CssBlogEp2/>
    }
    return (
        <div>
          {content}
        </div>
    )
}

export default EachBlogContent
