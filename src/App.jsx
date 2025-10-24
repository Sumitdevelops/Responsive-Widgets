import { useState } from 'react'
import ProfileWidget from './components/Profile-widget.jsx';
import ImageWidget from './components/Image-widget.jsx';

function App() {
  return (
<>
  <div className='w-full min-h-screen bg-gray-950'>
  
  <div className='flex min-h-screen'>
    
    <div className='w-1/2'></div>
    
    <div className='w-1/2 flex flex-col items-start gap-6 py-8 px-8'>
      
      <div className='w-full max-w-[720px]'>
        <ProfileWidget />
      </div>
      
      <div className='w-full max-w-[720px]'>
        <ImageWidget />
      </div>
    </div>
  </div>
  </div>
</>
)
}

export default App