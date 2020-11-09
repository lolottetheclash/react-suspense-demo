import React, { Suspense } from 'react';
import './App.css';
import { fetchData } from './Api';
import ProfileDetails from './ProfileDetails';
import ProfilePosts from './ProfilePosts';

// Resource will contain all data we need: user & posts
const resource = fetchData();

function App() {
  return (
    <div className="App">
      Hey wilders !
      <Suspense fallback={<h1>Loading User...</h1>}>
        <ProfileDetails {...resource} />
      </Suspense>
      <Suspense fallback={<h1>Loading Posts...</h1>}>
        <ProfilePosts {...resource} />
      </Suspense>
    </div>
  );
}

export default App;
