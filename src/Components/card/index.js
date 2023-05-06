import React, { useState } from 'react'
import {BiUpvote,BiDownvote} from 'react-icons/bi'

export default function Card({value}) {
    console.log(value.image)
    const [upvote,setUpVote]=useState(0)
    const [downvote,setDownVote]=useState(0)
    let [vote, setVote]=useState(true)
  return (
    <div>
        <div className='p-2 relative'>
        <img src={value.image} className='rounded-lg '/>
        {/* name and upvote and downvote icons */}
        <div className='absolute bottom-5 flex justify-between items-end p-5 w-full'>
            <div className=' text-white '>{value.name}</div>
            <div className='text-white text-center'>
                <BiUpvote onClick={()=>{if(vote){setUpVote(upvote+1);setVote(false)}}}/>
                <span>{upvote}</span>
                <BiDownvote onClick={()=>{if(!vote){setDownVote(downvote+1); setUpVote(upvote-1);setVote(true)}}}/>
                <span>{downvote}</span>
            </div>
        </div>
        {/* {console.log("card ke under")} */}
        </div>
    </div>
  )
}
