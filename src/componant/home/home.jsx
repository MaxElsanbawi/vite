import { useEffect, useState } from 'react'
import SliderHome from '../../componants/sliderHome/sliderHome';
import ProdactHome from '../../componants/prodactHome/prodactHome';
import Slider2 from '../../componants/slider2/slider2';
import Lodar from '../../componants/lodar/lodar';
function Home() {
useEffect(() =>{
document.title="Home"
},[]);

const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=' container1'>

{isVisible ? <div>  <Lodar/>  </div>
:
<div>

<Slider2/>
    <SliderHome/>
    <ProdactHome/>
</div>

}
    
    </div>
  )
}

export default Home