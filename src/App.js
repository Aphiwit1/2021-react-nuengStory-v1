
import './App.css';
import { Switch, Route} from 'react-router-dom';
import AppHeader from './Components/AppHeader/AppHeader';
import MyBlog from './Components/HomeBlog/MyBlog';
import AppFooter from './Components/AppFooter/AppFooter'
import EachBlogContent from './Components/BlogRouting/EachBlogContent';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    document.title = "NuengStory Blog"
 }, []);


  return (
    <div className="container">
      <AppHeader />

      <Switch>
        <Route path="/" exact>
          <div className="blog-root">
            <MyBlog></MyBlog>
          </div>
        </Route>

        <Route path="/about">
          <div className="about-page-container">
              <div className="img-profile">
                <img src="https://dl.dropboxusercontent.com/s/c8ouo4ma9vd16l6/%40avatar.png?dl=0"></img>
              </div>

              <div className="name">
                    <div>Nueng</div>
                    <div>Aphiwit Boonprasert</div>
              </div>
              <div className="work">
                  Junior Web Developer
              </div>

              <div className="contact">
                
              </div>
          </div>
        </Route>

    
        <Route path="/post/:postId">
          <EachBlogContent />
        </Route>

        <Route path="*"> 
          404 ja
        </Route>
      </Switch>

      <AppFooter></AppFooter>



    </div>
  );
}

export default App;
