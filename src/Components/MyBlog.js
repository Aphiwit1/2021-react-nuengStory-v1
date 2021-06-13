import './MyBlog.css'
import BlogItem from './BlogItem'
import blogList from '../data/bloglist'


function MyBlog() {

    let BlogListElement = blogList.map((element, index) => {
    return <BlogItem blogList={element} key={index}/>
  })

  return (
    <div className="myBlog">
       {BlogListElement}
    </div>
  )
}

export default MyBlog