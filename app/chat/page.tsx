'use client'

import React, { useState } from 'react';
import { TextArea, Button } from 'antd-mobile';
import 'antd-mobile/es/global';
import PageWrap from '../../components/chat/PageWrap';
import ChatItem from '../../components/chat/ChatItem';

interface Message {
  id: number;
  content: string;
  isMine: boolean;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [play, setPlay] = useState(false);

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage: Message = {
        id: messages.length + 1,
        content: inputValue.trim(),
        isMine: true,
      };
      setPlay(true);
      setMessages(inputValue.trim());
      setInputValue('');
    }
  };

  const [bg, setBg] = useState('');
  const handleSetBg = (url: string) => {
    setBg(url);
  };

  const divStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };


  return (
    <PageWrap>
      <div className='flex-1 overflow-hidden' style={divStyle}>
        <div className='h-full overflow-y-auto'>
          { play ? <>
            <ChatItem message={messages}/>
            <ChatItem onDetectionImg={handleSetBg} type="1"/>
          </> : <div className='p-5 text-white'> input some messages and click Send button </div>
          }
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full' style={{backgroundColor: '#343541' }}>
        <div className='p-5 flex bg-gray-800'>
          <TextArea
            value={inputValue}
            onChange={val => {
              setInputValue(val)
            }}
            style={{ '--color': '#ffffff' }}
            placeholder='Send a message'
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
          <Button onClick={handleSendMessage} color='primary' fill='solid' style={{ width: 64, height: 38, backgroundColor: 'rgb(25, 195, 125)', border: 'none' }}>
            Send
          </Button>
        </div>
      </div>
    </PageWrap>
  );
};

export default ChatPage;
