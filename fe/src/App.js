import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState(null);
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetchMessage();
  }, []);

  useEffect(() => {
    if (welcomeMessage) {
    showMessages()
    }
  }, [welcomeMessage])

  function fetchMessage() {
    fetch('http://localhost:3001/api/v1/welcome')
      .then(response => {
        return response.json();
      }).then(json => {
        console.log(json.data.attributes.body);
        setWelcomeMessage(json.data.attributes.body);
      }).catch(error => {
        console.log(error);
        setWelcomeMessage("ERROR: Could not load welcome message. Check DevTools Console for additional information, and make sure the BE is running on localhost:3001.");
      })
  }


  const showMessages = () => {
    const newMessages = welcomeMessage.map(message => {
      return (
        <div>{message.text}</div>
      )
    })
    setMessages(newMessages)
  }

  return (
    <h1>{messages}</h1>
  );
}

export default App;