import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Chats from './pages/Chats';

function App() {
  return (
    <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chats" exact component={Chats} />
          {/* <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={ AdminRoom}/> */}
        </Switch>    
    </BrowserRouter>

  );
}

export default App;