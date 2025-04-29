import FormComp from '@/src/components/FormComp'
import React from 'react'

const page: React.FC = () => {
  return (
    <section className="purple-gradient-rightBottom w-full h-dvh flex justify-center items-center pt-8 ">
      <div className="container flex flex-col items-center justify-center ">
        <div className='w-4/5 2xl:w-1/2 h-4/5 flex items-center justify-center '>
          <FormComp formName={"bottomForm"}/>
        </div>
      </div>
    </section>
  )
}

export default page
