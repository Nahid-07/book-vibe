import  banner from '../../../assets/banner_image.png'
export const Banner = () => {
  return (
    <section className='flex justify-between items-center mt-5 p-10 bg-gray-100 rounded-md'>
      <div className='w-[526px]'>
        <h1 className='text-6xl font-bold'>Books to freshen up your bookshelf</h1>
        <button className='w-[190px] h-[65px] bg-[#23BE0A] text-white mt-7 rounded-md'>View the list</button>
      </div>
      <div className='w-[318px]'>
        <img src={banner} alt="banner image"/>
      </div>
    </section>
  );
};
