import React, { useEffect, useState } from 'react'

export default function Api() {

    const [api,setApi] = useState("")

    useEffect(() => {
     fetch('http://localhost:3000/api')
     .then((data) => data.json())
     .then((data) => {setApi(data)
        console.log(data)})
    },[])

    

   
  return (
    <div>
        <h1>{api[0]?.name}</h1>
    </div>
  )
}
