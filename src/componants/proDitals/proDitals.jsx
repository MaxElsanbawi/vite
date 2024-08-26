
const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(false);
  }, 5000); 

  return () => clearTimeout(timer);
}, []);


  return (

<div>
    { isVisible?   <Lodar/>  :  

 }
  </div>
  )
}