import React, { useState } from 'react';

// in seperate hooks folder: hooks/useInputState.js
// custom hooks with useState
export default initialValue => {
  const [value, setValue] = useState('');
  const handleChange = e => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue('');
  };
  return [value, handleChange, reset];
};

// in seperate components folder: components/SimpleFormInputHook.js
// functional component using custom hooks
import useInputState from './hooks/useInputState';

const SimpleFormInputHook = () => {
  const [email, updateEmail, resetEmail] = useInputState('');
  const [password, updatePassword, resetPassword] = useInputState('');
  return (
    <div>
      <p>Email is: {email}</p>
      <p>Password is: {password}</p>
      <input type="text" value={email} onChange={updateEmail} />
      <input type="text" value={password} onChange={updatePassword} />
      <button onClick={resetEmail}>Reset Email</button>
      <button onClick={resetPassword}>Reset Password</button>
    </div>
  )
}