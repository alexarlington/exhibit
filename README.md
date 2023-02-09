  let [timerId, setTimerId] = useState();
  
  function startTimer(){
     timerId = (setTimeout(function () {
      window.location.href = '/';
      }, 5000))
      console.log(timerId)
      setTimerId(timerId)
  }

  const resetTimer = () => {
    clearTimeout(timerId);
    startTimer()
    console.log(timerId)
  }
  
  useEffect(() => {
    startTimer()
    return () => {
      clearTimeout(timerId);
    };
  }, [])



  < div onClick={resetTimer}>
