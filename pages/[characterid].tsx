import React from 'react'
import style from '../styles/Home.module.css'
const Character = ({character}:any) => {
    
  return (<>
            <div className={style.info}>
                <div><img src={character.image} alt={character.name}  width={"100%"} height={"100%"}/> </div>
                <div><h1>{character.name}</h1>
               <p>Species: {character.species}</p>
               <p>Status: {character.status}</p>
               <p>Location: {character.location['name']}</p></div>
            </div>
        

   { console.log(character)}
    </>
  )
}

export default Character

export async function getStaticPaths(){
    let res = await fetch('https://rickandmortyapi.com/api/character/')
    let data = await res.json()
    let paths = data.results.map((a:any)=>{
        return {
            params: {
                characterid: `${a.id}`,
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
    
}
export async function getStaticProps(cxt:any){
    const {params} = cxt
    let res = await fetch(`https://rickandmortyapi.com/api/character/${params.characterid}`)
    let data = await res.json()
    return {
        props: {
            character:data
        }
    }
}