import WomanImg from '../img/woman_hero.png'


const Hero = () => {
  return (
    <section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 '>
        <div className="container mx-auto flex justify-around h-full ">
            <div className='flex flex-col justify-center'>
                <div className='font-semibold flex items-center uppercase'>
                    <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
                </div>
                <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
                    AUTUM SALE STYLISH <br />
                    <span className='font-semibold'>WOMENS</span>
                </h1>
            </div>

            <div className='hidden lg:block '>
                <img src={WomanImg} alt='mulher com bolsa' />
            </div>
        </div>
    </section>
  )
}

export default Hero