const HeroSection = () => {
    return (
        <div>
      <main className="flex gap-8 mx-10">
          <div className="w-1/2 bg-orange-900 h-96"></div>
          <div className="w-6/12 bg-purple-900 h-96"></div>
      </main>
      <h2>Row 1</h2>
      <div className="flex justify-center gap-10">
        <div className="bg-blue-400 w-[30%] h-[300px]"></div>
        <div className="bg-orange-600 w-[30%] h-[300px]"></div>
      </div>
      <h2>Row 2</h2>
      <div className="flex justify-evenly items-center    mt-8">
      <div className="bg-lime-500 w-[30%] h-[400px]"></div>
         <div className="bg-red-500 w-[30%] h-[400px]" ></div>
         <div className="bg-yellow-700 w-[30%] h-[400px]"></div>
      </div>
      </div>
  
      )
  }
  
  export default HeroSection