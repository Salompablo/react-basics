import React from 'react'
import Button from './Button';

export default function Nombre({nombre, nombreReal}) { //props
    // console.log(props);

    const handleClick = () => {
        console.log(nombre , nombreReal)
    }
return (
    <>
    <h2>Mi nombre es {nombre} y mi nombre real es {nombreReal}</h2> {/*props.name*/}
    <Button onClick ={handleClick}>Ver mas info de {nombre} </Button>
    </>

)
}
