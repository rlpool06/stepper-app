import { useState } from 'react';
import './App.css';
import Confirm from './components/Confirm';
import Email from './components/Email';
import Name from './components/Name';
import Password from './components/Password';
import Signup from './components/Signup';
import Success from './components/Success';

type SignupStep = 'signup' | 'name' | 'email' | 'password' | 'confirm' | 'success';

function App() {
  const [signupStep, setSignupStep] = useState<SignupStep>('signup');

  return (
    <div className="App">
      {signupStep === 'signup' && 
      <>
        <Signup />
        <button type='button' onClick={() => setSignupStep('name')}>Next</button>
      </>
      }
      {signupStep === 'name' && 
      <>
        <Name />
        <button type='button' onClick={() => setSignupStep('email')}>Next</button>
      </>
      }
      {signupStep === 'email' && 
      <>
        <Email />
        <button type='button' onClick={() => setSignupStep('password')}>Next</button>
      </>
      }
      {signupStep === 'password' && 
      <>
        <Password />
        <button type='button' onClick={() => setSignupStep('confirm')}>Next</button>
      </>
      }
      {signupStep === 'confirm' && 
      <>
        <Confirm />
        <button type='button' onClick={() => setSignupStep('success')}>Next</button>
      </>
      }
      {signupStep === 'success' && 
      <>
        <Success />
      </>
      }
    </div>
  );
}

export default App;
