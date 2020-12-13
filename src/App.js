import { Route, Switch } from 'react-router-dom';
import './App.css';
import AllPopularChoice from './components/AllPopularChoice';
import HomePage from './components/HomePage';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route excat path="/popularchoice" component={AllPopularChoice} />
        <Route excat path="/:id" />
      </Switch>
    </div>
  );
}

export default App;
