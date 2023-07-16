'use client'

import React, { useState, useEffect } from 'react';
import { EditFill } from 'antd-mobile-icons'
import { Toast } from 'antd-mobile';

interface ChatItemProps {
    type?: string;
    onDetectionImg?: (url: string) => void;
    message?: string;
}

function findKeywordsPositions(str: string, keywords: string[]): number[] {
    const positions: number[] = [];
    const lowerCaseStr = str.toLowerCase();

    keywords.forEach(keyword => {
        let index = lowerCaseStr.indexOf(keyword.toLowerCase());
        while (index !== -1) {
            positions.push(index);
            index = lowerCaseStr.indexOf(keyword.toLowerCase(), index + 1);
        }
    });

    return positions;
}

function extractImageUrls(str: string): string[] {
    const imageUrlRegex: RegExp = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/ig;
    return str.match(imageUrlRegex) || [];
}

const mock: string = '随着科技的飞速发展，人工智能（AI）成为了当今世界最令人兴奋的前沿技术之一。它的广泛应用正引领着我们进入一个全新的智能时代。本文将深入探讨人工智能的应用场景，并探讨它对社会的深远影响。同时，通过精心挑选的图片，更直观地展示了人工智能的强大能力。图片地址：https://5b0988e595225.cdn.sohucs.com/images/20181009/8aeb0abb527f463790fee589caf300a9.jpeg'
const mockArr = mock.split('');

const ChatItem: React.FC<ChatItemProps> = (props) => {
    const { type, onDetectionImg, message } = props;
    const [content, setContent] = useState('');
    
    // mock 数据
    useEffect(() => {
        const timerList: NodeJS.Timer[] = [];
        let finalString = '';
        for (let i = 0; i < mockArr.length; i++) {
            timerList.push(
                setTimeout(() => {
                    finalString += mockArr[i];
                    setContent(finalString);
                }, 100 * i));
        }
        return () => {
            // 清理操作，例如清除定时器
            timerList.forEach(timer => {
                clearTimeout(timer);
            });
        };
    }, []);

    // 设置聊天背景
    useEffect(() => {
        const urlList = extractImageUrls(content);
        if(urlList.length) {
            onDetectionImg && onDetectionImg(urlList[urlList.length - 1]);
        }
        const pos = findKeywordsPositions(content, ['人工智能']);
        if(content.length === mockArr.length && pos.length > 0) Toast.show('关键词位置：' + pos.join('-'));
        
    }, [content, onDetectionImg]);

    return (
        <div className={`p-5 ${ type ? 'bg-gray-800 opacity-80' : ''}`}>
            <div className="flex text-white">
                {
                    type
                    ? <div className="w-8 h-8 flex-shrink-0 leading-8 bg-blue-900 text-center">AI</div>
                    : <div className="w-8 h-8 flex-shrink-0 leading-8 bg-red-600 text-center">LQ</div>
                }
                
                <div className="ml-2 flex-1">
                    <div className="mb-2">{ message }</div>
                    {
                        type && <>
                        <div className="mb-2">
                            <p className='mb-2'>
                                标题：人工智能：探索创新之路，改变未来社会
                            </p>
                            <p className='break-all'>
                                { content }
                            </p>
                        </div>
                        </>
                    }
                    <div className="h-10 text-right flex justify-end"><EditFill /></div>
                </div>
            </div>
        </div>
    );
};

export default ChatItem;
