import React, { useState } from 'react';

function Quiz() {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <MessageInput onSend={handleNewMessage} />
    </div>
  );
}
 
function Message({ message }) {
  return <div>{message}</div>;
}

function MessageInput({ onSend }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSend(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default Quiz