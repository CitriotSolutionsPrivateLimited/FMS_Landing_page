import React from 'react'

function Cardie({img, tp ,desc}) {
  return (
    <div className="rounded-3xl flex items-center flex-col container">
      {/* <img src={img} alt="Intermittent data collection" className="mx-auto mb-4" /> */}
      <div className="bg-[#06071B] flex justify-center items-center sm:mt-4 md:mt-8 cardie">
        <img src={img} alt='Icon' className='sm: p-2'/>
    </div>
    <div className="text-center mt-4">
      <h2 className="sm:text-xs md:text-2xl text-[#6F42C1] font-semibold font-Lato sm:mb-2 md:mb-6">{tp}</h2>
      <p className="text-white sm:text-xs md:text-2xl font-medium font-Lato sm:px-2 md:px-10">{desc}</p>
    </div>
    </div>
  )
}

export default Cardie