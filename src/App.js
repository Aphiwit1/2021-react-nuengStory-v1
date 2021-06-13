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
          <div>
            this is about who is nueng
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
