'use client'

import React from 'react';
import { EditFill } from 'antd-mobile-icons'

interface ChatItemProps {
    type?: string;
}

const ChatItem: React.FC<ChatItemProps> = (props) => {
    const { type } = props;
    console.log(type);
    
    return (
        <div className={`p-5 ${type ? 'bg-gray-800' : ''}`}>
            <div className="flex text-white">
                {
                    type
                    ? <div className="w-8 h-8 bg-gray-500 text-center">AI</div>
                    : <div className="w-8 h-8 bg-gray-800 text-center">LQ</div>
                }
                
                <div className="flex flex-1 flex-col ml-4">
                    <div className="mb-2">react hook ts tailwind 写一个组件</div>
                    {
                        type && <>
                        <div className="mb-2">
                            <p className='mb-2'>
                                在这个示例中，我们创建了一个名为MyComponent的函数式组件。它接受一个名为isActive的布尔属性。
                            </p>
                            <p className='mb-2'>
                                根据isActive的值，我们使用条件运算符在dynamicClassName变量中设置背景颜色类名。如果isActive为true，则类名为bg-blue-500；如果isActive为false，则类名为bg-gray-300。
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
