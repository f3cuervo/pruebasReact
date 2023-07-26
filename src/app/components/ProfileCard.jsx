import React from 'react'
export function titleCase(text){
  if(text === '') return ''
  const arr = text.split(' ');
  const result =[]
  for(let el of arr){
    result.push(el[0].toUpperCase() + el.substring(1).toLowerCase())
  }
  return result.join(' ')
 }

 export function esMayorDeEdad(edad){
  if(edad >= 18){
    return true
  }else if (edad >= 0 && edad <=17){
    return false
  }else{
    return null
  }
 }
function ProfileCard() {
   

  return (
    <div>
      Hola
    </div>
  )
}

export default ProfileCard
