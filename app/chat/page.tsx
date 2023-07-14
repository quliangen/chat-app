'use client'
import React, { useState, useEffect, useRef } from 'react';
import { List, Input, Button } from 'antd-mobile';
import { MessageBox, ChatList, ChatItem } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';

interface Message {
  id: number;
  content: string;
  isMine: boolean;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messageListRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

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

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div
        ref={messageListRef}
        style={{ flex: 1, overflowY: 'auto', padding: '10px' }}
      >
        <ChatList
          className="chat-list"
          dataSource={messages.map((message) => ({
            position: message.isMine ? 'right' : 'left',
            type: 'text',
            text: message.content,
            date: new Date(),
          }))}
        />
        <ChatItem
          avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
          alt="kursat_avatar"
          title="Kursat"
          subtitle="Ok. See you !"
          date={new Date()}
          unread={0}
        />;
      </div>
      <div style={{ padding: '10px' }}>
        <Input
          value={inputValue}
          onChange={(value) => setInputValue(value)}
          placeholder="请输入消息"
        />
        <Button type="primary" onClick={handleSendMessage}>
          发送
        </Button>
      </div>
    </div>
  );
};

export default ChatPage;
