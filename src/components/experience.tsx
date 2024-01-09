import React from 'react';
import ImageBox from './ImageBox';

export default function Experience() {
  const handleClick = () => {
    console.log('ImageBox clicked');
  };

  return (
    <main className="flex min-h-screen flex-col relative px-32 md:px-48 xl:px-64 py-8 md:py-12 xl:py-16">
      <div className="flex flex-col mb-6">
        <h1 className="text-5xl font-bold">
          experience
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <ImageBox 
            image_src={"nflx_logo.png"}
            onClick={() => handleClick()}
          />
          <p className="text-xl mt-2">Intern - Network Services & Insights</p>
        </div>
        <div>
          <ImageBox 
            image_src={"google_logo.png"}
            onClick={() => handleClick()}
          />
          <p className="text-xl mt-2">Intern - Google Cloud Error Reporting</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <ImageBox 
              image_src={"meta_logo.png"}
              onClick={() => handleClick()}
            />
          <p className="text-xl mt-2">Intern - LLVM Server Compiler</p>
        </div>
        <div>
          <ImageBox 
              image_src={"lm_logo.png"}
              onClick={() => handleClick()}
            />
          <p className="text-xl mt-2">Intern - Electrical Engineering</p>
        </div>
      </div>
    </main>
  );
}