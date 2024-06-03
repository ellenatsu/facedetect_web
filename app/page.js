"use client";
import { useState } from 'react';
import Logo from "@/components/Logo";
import Rank from "@/components/Rank";
import SignIn from "@/components/SignIn";
import Register from "@/components/Register";
import Navigation from "@/components/Navigation";
import ParticlesBg from "@/components/ParticlesBg";
import FaceRecognition from "@/components/FaceRecognition";

export default function Home() {

  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  });

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    });
  }

  const setEntries = (count) => {
    setUser({ ...user, entries: count });
  }

  const onRouteChange = (route) => {
    if (route === 'signout') {
      setIsSignedIn(false);
      setRoute('signin');
    } else if (route === 'home') {
      setIsSignedIn(true);
      setRoute(route);
    } else {
      setRoute(route);
    }
  }

  return (
    <>
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} user={user} loadUser={loadUser} />
        {route === 'home' ? (
          <div>
            <Logo />
            <Rank name={user.name} entries={user.entries} />
            <FaceRecognition userId={user.id} setEntries={setEntries} />
          </div>
        )
          : route === 'signin' ? (<SignIn loadUser={loadUser} onRouteChange={onRouteChange} />)
            : (<Register loadUser={loadUser} onRouteChange={onRouteChange} />)}

      </div>
      <ParticlesBg />
    </>

  )
}
