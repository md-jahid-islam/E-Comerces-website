import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <>
    
    <div className="container">
      <div className="heder pt-10">
        <h2 className=' text-2xl font-bold text-black'> portfolio.</h2>
        <h2 className=' w-[400px] h-[3px] border border-solid bg-slate-400  mt-[-9px] ml-[130px]'></h2>
        <div className=' flex justify-center items-center gap-5 mt-28'>
          <div>
          <img className=' hover:scale-105 transition'src=" public/images/3dhouse.png" alt="img" />
            <h2 className=' text-2xl from-black font-bold mt-5'> City 3D View</h2>
            <h3 className=' text-2xl from-black font-bold mt-5'> gallery</h3>
          </div>
          <div>
          <img className=' hover:scale-105 transition animate-bounce' src=" public/images/radio1.png" alt="img" />
          <h2 className=' text-2xl from-black font-bold mt-5'> Pocket FM Radio</h2>
            <h3 className=' text-2xl from-black font-bold mt-5 '>sound cloud</h3>
          </div>
          <div>
          <img className=' hover:scale-105 transition animate-pulse' src=" public/images/radio.png" alt="img" />
          <h2 className=' text-2xl from-black font-bold mt-5'> Corporate Branding</h2>
            <h3 className=' text-2xl from-black font-bold mt-5'> content</h3>
          </div>
          <div>
          <img className=' hover:scale-105 transition animate-pulse w-[300px] h-[250px]' src=" public/images/slide1.png" alt="img" />
          <h2 className=' text-2xl from-black font-bold mt-5'>Corporate Brand</h2>
            <h3 className=' text-2xl from-black font-bold mt-5'> content</h3>
          </div>
        
        </div>
        <div className=' flex justify-center items-center gap-8 mt-14'>
          <div>
          <img className=' w-[300px] h-[250px] hover:scale-105 transition animate-pulse' src=" public/images/one.png" alt="img" />
           <h3 className=' text-2xl from-black font-bold mt-5'>Crypto website design</h3>
           <h3 className=' text-2xl from-black font-bold mt-5'> contant</h3>

          </div>
          <div>

         <img className=' w-[300px] h-[250px] hover:scale-105 transition animate-bounce' src=" public/images/tow.png" alt="img" />
         <h3 className=' text-2xl from-black font-bold mt-5'>  react Branding</h3>
           <h3 className=' text-2xl from-black font-bold mt-5'> contant</h3>

          </div>
          <div>
         <img className=' w-[300px] h-[250px] hover:scale-105 transition animate-pulse' src=" public/images/three.png" alt="img" />
         <h3 className=' text-2xl from-black font-bold mt-5'> chatting app work Brand</h3>
           <h3 className=' text-2xl from-black font-bold mt-5'> contant</h3>

          </div>
          <div>
         <img className=' w-[300px] h-[250px] hover:scale-105 transition' src=" public/images/four.png" alt="img" />
         <h3 className=' text-2xl from-black font-bold mt-5'>web development</h3>
           <h3 className=' text-2xl from-black font-bold mt-5'> contant</h3>
           
          </div>
         
         </div>
         <div className=' flex justify-center items-center mt-10 '>
          <Link to='#'> <button className=' w-[140px] h-[40px] bg-[#FF204E] hover:bg-[#008DDA] rounded-full transition'> viwe all</button></Link>

          </div>
      </div>
    </div>
    
    </>
  )
 }

 export default Portfolio