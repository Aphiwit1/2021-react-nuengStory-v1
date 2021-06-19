import { useParams } from "react-router-dom"
import CssEP1 from "../../Blog/CssStory/CssEP1";

function EachBlogContent() {
    const { postId } = useParams();

    let content;
    if (postId == '1') {
        content = <CssEP1></CssEP1>
    } else {
        content = <CssEP1></CssEP1>
    }

    return (
        <div>
          {content}
        </div>
    )
}

export default EachBlogContent
