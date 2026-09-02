import { useState } from 'react';

function ControlledInput() {
  const [username, setUsername] = useState('John');

  // Manual event handler to capture user typing
  const handleChange = (event) => {
    setUsername(event.target.value); 
  };

  return (
    <div>
      {/* Explicitly passing the value down AND the change handler up */}
      <input value={username} onChange={handleChange} />
      <p>Hello, {username}</p>
    </div>
  );
}
