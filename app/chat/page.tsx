'use client'

import React, { useState, useEffect, useRef } from 'react';
import { List } from 'antd-mobile';
import 'antd-mobile/es/global';
import PageWrap from '../../components/chat/PageWrap';
import ChatItem from '../../components/chat/ChatItem';

interface Message {
  id: number;
  content: string;
  isMine: boolean;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage: Message = {
        id: messages.length + 1,
        content: inputValue.trim(),
        isMine: true,
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <PageWrap>
      <div className='flex-1 overflow-hidden'>
        <div className='h-full overflow-y-auto'>
          <ChatItem/>
          <ChatItem type="1"/>
          <ChatItem/>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full border-t color-white pt-5'>
        发送
      </div>
    </PageWrap>
  );
};

export default ChatPage;
