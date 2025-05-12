// #1

// let newWindow = window.open("", "", "width=300, height=300");

// setTimeout(() => {
//     newWindow.resizeTo(500, 500);
//   }, 2000);

// setTimeout(() => {
//     newWindow.moveTo(200,200);
// }, 4000);  

// setTimeout(() => {
//     newWindow.close();
//   }, 6000);

  // #2

//   function changeCSS() {
//     const paragraph = document.querySelector('#text');
//     paragraph.style.color = 'orange';
//     paragraph.style.fontSize = '20px';
//     paragraph.style.fontFamily = 'Comic Sans MS';
//   }

  // #3

  document.querySelector('#backgroundColour').addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
  });

  document.querySelector('#pinkBtn').addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'pink';
  });

  const brownBtn = document.querySelector('#brownBtn');
  brownBtn.addEventListener('mousedown', () => {
    document.body.style.backgroundColor = 'brown';
  });
  brownBtn.addEventListener('mouseup', () => {
    document.body.style.backgroundColor = 'white';
  });

  const link = document.querySelector('#myLink');
  link.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'yellow';
  });
  link.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'white';
  });

  // #4