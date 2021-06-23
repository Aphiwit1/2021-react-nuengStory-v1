import './MyBlog.css'
import blogList from '../../data/bloglist'
import { Link } from 'react-router-dom'
function MyBlog() {

    let BlogListElement = blogList.map((element, index) => {
        // return <BlogItem blogList={element} key={index}/>
        return (
            <div>
                {/* <div className="blog-container">
               
                <div className="content" >
                <Link class="blog-link" to={`/post/${element.postId}`} >
                <h2>
                        <span className="blog-title">
                            <span><>{element.title}</></span>
                           
                        </span>
                    </h2>
                    <div className="img-div" ><img src={element.cover}></img></div>
                    <p className="created-by"><span>Created by</span> {element.createdBy}</p>
                    <p className="detail">{element.subTitle}</p>
                    <p className="read-more">{element.readMore}</p>
                </Link>
                   
                </div>

                <div></div>
            </div> */}
                <div className="blog-container">

                    <div className="content" >
                        <Link class="blog-link" to={`/post/${element.postId}`} >
                            <div className="img-div" ><img src={element.cover}></img></div>
                            <h2>
                                <div className="blog-title">
                                    <span>{element.title}</span>
                                </div>
                            </h2>

                        </Link>

                    </div>


                </div>

            </div>
        )
    })

    return (
        <div className="myBlog">
            {BlogListElement}

        </div>
    )
}

export default MyBlog