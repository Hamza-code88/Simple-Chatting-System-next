"use client";
import React, { useState } from 'react';
import Phone1 from './components/Phone';
import PhoneSec from './components/PhoneSec';

const MobileLayout = () => {
  const [messagePhone1, setMessagePhone1] = useState('');
  const [messagePhoneSec, setMessagePhoneSec] = useState('');
  const [messagesPhone1, setMessagesPhone1] = useState([]);
  const [messagesPhoneSec, setMessagesPhoneSec] = useState([]);
  const [isTypingPhone1, setIsTypingPhone1] = useState(false);
  const [isTypingPhoneSec, setIsTypingPhoneSec] = useState(false);

  const handleSendMessagePhone1 = () => {
    if (messagePhone1.trim() !== '') {
      setMessagesPhone1([...messagesPhone1, { text: messagePhone1, sender: 'phone1' }]);
      setMessagesPhoneSec([...messagesPhoneSec, { text: messagePhone1, sender: 'phone1' }]);
      setMessagePhone1('');
      setIsTypingPhone1(false);
    }
  };

  const handleSendMessagePhoneSec = () => {
    if (messagePhoneSec.trim() !== '') {
      setMessagesPhoneSec([...messagesPhoneSec, { text: messagePhoneSec, sender: 'PhoneSec' }]);
      setMessagesPhone1([...messagesPhone1, { text: messagePhoneSec, sender: 'PhoneSec' }]);
      setMessagePhoneSec('');
      setIsTypingPhoneSec(false);
    }
  };

  return (
    <div className="flex items-center justify-around w-screen h-screen bg-gradient-to-r from-blue-500 to-teal-400 space-x-10 p-8">
     
      <div className="relative w-[320px] h-[600px] bg-white rounded-3xl shadow-lg">
        <Phone1
          messages={messagesPhone1}
          isTyping={isTypingPhoneSec}
          message={messagePhone1}
          setMessage={setMessagePhone1}
          handleSendMessage={handleSendMessagePhone1}
          setIsTyping={setIsTypingPhone1} />
      </div>

      <div className="relative w-[320px] h-[600px] bg-white rounded-3xl shadow-lg">
        <PhoneSec
          messages={messagesPhoneSec}
          isTyping={isTypingPhone1}
          message={messagePhoneSec}
          setMessage={setMessagePhoneSec}
          handleSendMessage={handleSendMessagePhoneSec}
          setIsTyping={setIsTypingPhoneSec}
        />
      </div>
    </div>
  );
};

export default MobileLayout;
