import React, { ReactNode } from 'react';
import { NavBar } from 'antd-mobile';

interface PageWrapProps {
    children: ReactNode;
}
const PageWrap: React.FC<PageWrapProps> = ({ children }) => {
    return (
        <div className="overflow-hidden w-full h-full relative flex z-0">
            <div className='relative flex h-full max-w-full flex-1 overflow-hidden'>
                <div className='flex h-full max-w-full flex-1 flex-col'>
                    {/* 顶部占位符，固定50px */}
                    <NavBar
                        className="sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 md:hidden"
                        back={null}
                        left=<div>Menu</div>
                        right=<div>+</div>
                    >
                        Chat App
                    </NavBar>
                    {/* 自适应 */}
                    <div className="relative h-full w-full transition-width flex flex-col overflow-auto items-stretch flex-1">{children}</div> 
                </div>
            </div>
            
        </div>
    );
};

export default PageWrap;