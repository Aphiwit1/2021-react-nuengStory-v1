import './BlogItem.css'
import { Link } from 'react-router-dom'


function BlogItem(props) {
    let { blogList } = props
    return (
        <div>
            <div className="blog-container">
               
                <div className="content" >
                <Link class="blog-link" to={`/post/${blogList.postId}`} >
                <h2>
                        <span className="blog-title">
                            <span><>{blogList.title}</></span>
                           
                        </span>
                    </h2>
                    {/* <h5 class="create-tile">Title description, Dec 7, 2017</h5> */}
                    <div className="img-div" ><img src="https://picsum.photos/700/300"></img></div>
                    <p className="created-by"><span>Created by</span> {blogList.createdBy}</p>
                    <p className="detail">{blogList.subTitle}</p>
                    <p className="read-more">{blogList.readMore}</p>
                </Link>
                   
                </div>
            </div>

           

        </div>

    )
}

export default BlogItem