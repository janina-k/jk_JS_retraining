// #1

// const test = document.getElementById("test");

// console.log(test);


// const test = document.getElementsByTagName("div");

// console.log(test);


// const test = document.querySelector("#test");

// console.log(test);

// test.innerHTML = 'Last';
// test.innerHTML = '<div>Last1</div>';

// #2

// let myImage = document.querySelector(".image");

// myImage.src = 'cat.jpg';

// alert(myImage.setAttribute("image", "cat.jpg"));

// #3

// let paragraphs = document.querySelectorAll('#text p');

// paragraphs.forEach((p, index) => {
//     console.log(`Selector text ${index}: ${p.textContent}`);
// });

// #4

// const items = document.querySelectorAll('#list li');
// const order = [0, 4, 1, 3, 2];

// const result = order.map(index => items[index].textContent).join(', ');

// document.getElementById('modal-content').textContent = result;
// document.getElementById('modal').style.display = 'flex';

// #5

// document.querySelector('h1').style.backgroundColor = 'lightgreen';

// const firstParagraph = document.querySelector('#myDiv p');
// firstParagraph.style.fontWeight = 'bold';

// const secondParagraph = document.querySelectorAll('#myDiv p')[1];
// secondParagraph.style.color = 'red';

// const thirdParagraph = document.querySelectorAll('#myDiv p')[2];
// thirdParagraph.style.textDecoration = 'underline';

// const fourthParagraph = document.querySelectorAll('#myDiv p')[3];
// fourthParagraph.style.fontStyle = 'italic';

// const myList = document.getElementById('myList');
// const listItems = myList.querySelectorAll('li');

// myList.style.listStyle = 'none';
// myList.style.display = 'flex';
// myList.style.padding = '0';
// myList.style.margin = '0';

// listItems.forEach(li => {
//   li.style.margin = '0';
//   li.style.padding = '0';

//   li.textContent = li.textContent.trim();

//   li.textContent = li.textContent.replace(/\s+!/g, '!');
// });

// document.getElementById('myList').style.marginLeft = '40px';

// document.querySelector('span').style.display = 'none';

        // another solution

    // document.querySelector('h1').style.backgroundColor = 'lightgreen';

    // const paragraphs = document.querySelectorAll('#myDiv p');
    
    // paragraphs[0].style.fontWeight = 'bold'; 
    // paragraphs[1].style.color = 'red';      
    // paragraphs[2].style.textDecoration = 'underline'; 
    // paragraphs[3].style.fontStyle = 'italic'; 
    
    // const myList = document.getElementById('myList');
    // myList.style.cssText = 'list-style: none; display: flex; padding: 0; margin: 0; margin-left: 40px;';
    
    // myList.querySelectorAll('li').forEach(li => {
    //   li.style.cssText = 'margin: 0; padding: 0;';
    //   li.textContent = li.textContent.trim().replace(/\s+!/g, '!');
    // });
    
    // document.querySelector('span').style.display = 'none';

// #6

// let message1 = prompt("Enter the first message:");
// let message2 = prompt("Enter the second message:");

// document.getElementById('input1').value = message1;
// document.getElementById('input2').value = message2;

// let temp = document.getElementById('input1').value;
// document.getElementById('input1').value = document.getElementById('input2').value;
// document.getElementById('input2').value = temp;

// #7

// const main = document.createElement('main');
// main.className = 'mainClass check item';

// const div = document.createElement('div');
// div.id = 'myDiv';

// const paragraph = document.createElement('p');
// paragraph.textContent = 'First paragraph';

// div.appendChild(paragraph);
// main.appendChild(div);
// document.body.appendChild(main);
