// #1

function getPromise(message, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  }

getPromise("test promise", 2000).then(function(data) {

    console.log(data);
    
    });
    
    // Result : after 2 seconds , "test promise" is displayed in the console