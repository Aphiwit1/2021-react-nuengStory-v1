import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import AppHeader from './Components/AppHeader';
import MyBlog from './Components/MyBlog';
import AppFooter from './Components/AppFooter'
import EachBlogContent from './Components/EachBlogContent';


function App() {


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
                <img src="https://www.dl.dropboxusercontent.com/s/x45qda6j817esg9/%40img_aphiwit.jpg?dl=0"></img>
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
