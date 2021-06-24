import React from 'react';
import ParticlesBg from 'particles-bg'
import '../Styling/UI.css'



const UI = () => {
    let config = {
        color: ['#4633FF','#F4F4F4'],
        backgroundColor:['#4633FF', 'F4F4F4']
    }
    return(
       <>
       <ParticlesBg className='particles-bg-canvas-self' color='ffffff' type='cobweb' bg={true} />
       </>
           
         
    )
}

export default UI


