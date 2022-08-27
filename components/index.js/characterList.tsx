import React from 'react'


const CharacterList = ({character}:any) => {
  return (
    <>
        {
            character.map((character:any, index:number) => {
                return (
                    <div key={character.id} >
                        <img src={character.image} alt={character.name}  width={"100%"} height={"100%"}/> 
                        <h1>{character.name}</h1>
                    </div>
                )
            })
        }
    </>
  )
}

export default CharacterList