import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Contact from './components/Contact';
import Addbook from './components/addbook';
import NotFound from './components/NotFound';
import booklist from './components/Booklist';
import BookEdit from './components/BookEdit';

export default function getRoutes(store) {
  const clearMessages = () => {
    store.dispatch({
      type: 'CLEAR_MESSAGES'
    });
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} onLeave={clearMessages}/>
      <Route path="/contact" component={Contact} onLeave={clearMessages}/>
      <Route path="/add_book" component={Addbook} onLeave={clearMessages}/>
       <Route path="/booklist" component={booklist} onLeave={clearMessages}/>
      <Route path="/booklist/edit/:id" component={BookEdit} onLeave={clearMessages} />
      
      <Route path="*" component={NotFound} onLeave={clearMessages}/>
    </Route>
  );
}
