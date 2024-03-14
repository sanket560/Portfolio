function EducationCard({img,Course,College,Duration}) {
    return (
      <div className='flex flex-col md:flex-row bg-slate-800 text-slate-50 md:w-full w-4/5 md:items-center mx-auto mt-10 rounded-lg overflow-hidden drop-shadow-xl'>
        <div className='w-43 h-43'>
          <img className='md:w-48 md:h-44 w-screen h-52 ' src={img} alt='' />
        </div>
        <div className='flex flex-col justify-evenly md:h-28 md:p-8 p-4'>
          <p className='text-xl md:text-2xl font-bold'>{Course}</p>
          <p className='text-lg md:text-xl font-bold'>{College}</p>
          <p className='font-semibold'>{Duration}</p>
        </div>
      </div>
    );
  }
  
  export default EducationCard