import React from 'react';
import Button from './Button';

export default function Saludo({nombre, nombreReal}) {
        const handleClick = () => {
                console.log(nombre, nombreReal)
        }
return (
        <>
        <h1>Hola soy {nombre} y mi nombre real es {nombreReal} </h1>
        <Button onClick ={handleClick}>Ver mas info de {nombre} </Button>
        </>
)
}
