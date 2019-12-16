import React ,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import{Provider} from 'react-redux';



import Posts from './Posts'
import PostForm from './PostForm';
import store from './store';

class App extends Component  {
        render(){
        return (
          <Provider store= {store}>
          <div className="App">
            {/* <header className="App-header">
              <img src={logo} className ="Appo-logo" alt="logo"/>
              <h1 className="App-title">Welcome to React</h1>
            </header> */}
            <PostForm/>
            <hr/>
          <Posts />
          </div>
          </Provider>
        );
      }
      }
export default App;
