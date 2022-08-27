import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'

const CharacterList = ({character}:any) => {
  return (
    <>
        {
            character.map((character:any, index:number) => {
                return (
                    <div key={character.id} className={styles.card} >
                        <img src={character.image} alt={character.name}  width={"100%"} height={"100%"}/> 
                       <Link href={`../../${character.id}`}><a>
                       <h1>{character.name}</h1>
                        </a></Link> 
                    </div>
                )
            })
        }
    </>
  )
}

export default CharacterList