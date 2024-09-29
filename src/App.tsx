import React from 'react';
import SingleAppLayout from './components/layouts/singleapplayout';
import { FunProfileCard } from './components/fun-profile-card';
import FullPageChat from './components/FullPageChat';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
    return (
        <ThemeProvider>
            <SingleAppLayout 
                leftHero={<FunProfileCard />} 
                rightHero={<div className="flex flex-col h-full">
                    <div className="flex-1 overflow-y-hidden p-4">
                        <FullPageChat />
                    </div>
                </div>}
            />
        </ThemeProvider>
    );
};

export default App;
