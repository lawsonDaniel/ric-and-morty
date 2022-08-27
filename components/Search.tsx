import React from 'react'

const Search = ({onsearch}:any) => {
  return (
    <div>
        <input type="text" onChange={(e)=>{
            onsearch(e.target.value)
        }}/>
    </div>
  )
}

export default Search