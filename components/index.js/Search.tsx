import React from 'react'
import styles from '../../styles/Home.module.css'

const Search = ({onsearch}:any) => {
  return (
    <div className={styles.search}>
        <input placeholder='Enter character Name e.g Morty' type="text" onChange={(e)=>{
            onsearch(e.target.value)
        }}/>
    </div>
  )
}

export default Search