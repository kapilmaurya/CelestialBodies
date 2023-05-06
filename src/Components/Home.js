import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import { FiSearch } from "react-icons/fi";
import data from '../Components/data/data.json'
import Card from './card';
import NotFound from './notFound';
export default function Header() {
  const [searchText, setSearchText] = useState('')
  let [notFound,setNotFound]=useState(false)
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 h-20 sticky top-0 bg-black z-10">
        {/* logo */}
        <img src={logo} alt="" className="w-20 h-auto rounded-full" />

        {/* search */}
        <form >
          <div className="border border-black flex h-12 items-center justify-between min-w-[600px] rounded-full overflow-hidden">
            <input
              value={searchText}
              id="search_query"
              type="text"
              className="w-full h-20 px-5 outline-none border-none text-lg"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              type="submit"
              className="outline-none border-none  p-3 px-5 h-20 bg-gray-200"
            >
              <FiSearch className="text-2xl" />
            </button>
          </div>
        </form>
      </div>




      <div className='md:columns-3 sm:columns-2 '>
        {
          data.filter((value)=>{
            // console.log(value.name)
            <Card value={value}/>
            if(value.name.toLowerCase()===searchText.toLowerCase()){
              return true
            }
            else if(value.category.toLowerCase()===searchText.toLowerCase()){
              return true
            }
            else if(searchText===''){
              return true
            }
            // else if(searchText){
            //   return setNotFound(false)
            // }
            
          }).map((value,index)=>(
            
            notFound?<notFound/>:<Card key={index} value={value}/>
          ))
        }
        {/* {data.filter((value) => (
          value===searchText?<Card value={value} />
          // {console.log("under")}
        ))} */}
      </div>

    </>
  )
}
