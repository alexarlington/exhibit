      const timeout = setTimeout(function () {
      window.location.href = '/';
      }, 5000)

      function stopTimeout() {
      clearTimeout(timeout);}


        <div id="root" onmousemove="stopTimeout()">

// 60000

// onmousemove={stopTimeout()}
// onMouseMoveCapture={stopTimeout()}


  
// const timeout = setTimeout(function () {
//  window.location.href = '/';
//  }, 5000)

//  function timeoutFunction() {
//   return timeout
//  }

// function stopTimeout() {
//  clearTimeout(timeout);
//  timeout}

//  useEffect(() => {
//   const timeout = setTimeout(function () {
//     window.location.href = '/';
//     }, 5000)
//   return () => clearTimeout(timeout);
// }, []);