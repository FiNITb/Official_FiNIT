import React, { useState, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home_Layout from './Layout/Home_Layout.jsx';
import Root_Layout from './Layout/Root_Layout.jsx';
import Team from './pages/Team/Team.jsx';
import About from './pages/About/About.jsx';
import Events from './pages/Events/Events.jsx';
import Forms from './pages/Form/Forms.jsx';
import AllEvents from './pages/Events/AllEvents.jsx';
import EventDetailsPage from './pages/Events/EventDetails.jsx';
import Loader from './Components/Loader.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root_Layout/>}>
      <Route path='' element={<Home_Layout/>} />
      <Route path='about' element={<About/>} />
      <Route path='events' element={<Events/>} />
      <Route path='events/:title' element={<AllEvents/>}/>
      <Route path='events/:title/:eventTitle' element={<EventDetailsPage/>}/>
      <Route path='team' element={<Team/>}/>
      <Route path='contact' element={<Forms/>}/>
    </Route>
  )
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return loading ? <Loader /> : <RouterProvider router={router} />;
}

export default App;
