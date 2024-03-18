import React, { useState } from 'react';
import ExpenseTracker from './components/ExpenseTracker';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignUp = () => {
    setIsSignedUp(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <LogIn />
      ) : isSignedUp ? (
        <SignUp onSignUp={handleSignUp} />
      ) : (
        <ExpenseTracker />
      )}
    </div>
  );
};

export default App;
