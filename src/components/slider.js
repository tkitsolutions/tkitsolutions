import React from 'react'

const Slider = () => {
  return (
    <div className='slider'>       
        <div className='slideTrack'>          
            <div className='slide'>
                <img src={require('../assets/images/p1.png')}/>
            </div>
            <div className='slide'>
                <img src={require('../assets/images/p2.png')}/>
            </div>
            <div className='slide'>
                <img src={require('../assets/images/p3.png')}/>
            </div>
            <div className='slide'>
                <img src={require('../assets/images/p4.png')}/>
            </div>

 {/* ......................................................................... */}
            <div className='slide'>
                <img src={require('../assets/images/p1.png')}/>
            </div>
            <div className='slide'>
                <img src={require('../assets/images/p2.png')}/>
            </div>
            <div className='slide'>
                <img src={require('../assets/images/p3.png')}/>
            </div>
            <div className='slide'>
                <img src={require('../assets/images/p4.png')}/>
            </div>



            

     
        </div>
    </div>
  )
}

export default Slider