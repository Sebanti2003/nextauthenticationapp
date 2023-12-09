import React from 'react'

function page({params}) {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      Helloiii {params.id} ,nice to meet you
    </div>
    
  )
}

export default page
