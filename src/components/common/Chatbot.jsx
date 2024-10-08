import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { FaRobot } from 'react-icons/fa'; // You can use any icon library like react-icons

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div>
      {/* Chatbot Icon/Button */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '50%',
          padding: '15px',
          cursor: 'pointer',
        }}
        onClick={toggleChatbot}
      >
        <FaRobot size={30} />
      </div>

      {/* Chatbot Component */}
      {showChatbot && (
        <div style={{ position: 'fixed', bottom: '80px', right: '20px' }}>
          <ChatBot
            steps={[
              {
                id: '1',
                message: 'What is your name?',
                trigger: '2',
              },
              {
                id: '2',
                user: true,
                trigger: '3',
              },
              {
                id: '3',
                message: 'Hi {previousValue}, nice to meet you!',
                end: true,
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
