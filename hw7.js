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

//   const paragraph = document.querySelector('#text');

//   function changeCSS() {
//     paragraph.style.color = 'orange';
//     paragraph.style.fontSize = '20px';
//     paragraph.style.fontFamily = 'Comic Sans MS';
//   }

  // #3

//   document.querySelector('#backgroundColour').addEventListener('click', () => {
//     document.body.style.backgroundColor = 'blue';
//   });

//   document.querySelector('#pinkBtn').addEventListener('dblclick', () => {
//     document.body.style.backgroundColor = 'pink';
//   });

//   const brownBtn = document.querySelector('#brownBtn');
//   brownBtn.addEventListener('mousedown', () => {
//     document.body.style.backgroundColor = 'brown';
//   });
//   brownBtn.addEventListener('mouseup', () => {
//     document.body.style.backgroundColor = 'white';
//   });

//   const link = document.querySelector('#myLink');
//   link.addEventListener('mouseover', () => {
//     document.body.style.backgroundColor = 'yellow';
//   });
//   link.addEventListener('mouseout', () => {
//     document.body.style.backgroundColor = 'white';
//   });

  // #4

//   document.querySelector('#deleteBtn').addEventListener('click', () => {
//     const select = document.querySelector('#mySelect');
//     const selectedIndex = select.selectedIndex;

//     if (selectedIndex !== -1) {
//       select.remove(selectedIndex);
//     } else {
//       alert("No item selected.");
//     }
//   });

  // #5

    // const button = document.querySelector('#myButton');
    // const message = document.querySelector('#message');

    // // Click event
    // button.addEventListener('click', () => {
    //   message.textContent = 'I was pressed!';
    // });

    // // Mouse enter (hover)
    // button.addEventListener('mouseover', () => {
    //   message.textContent = 'Mouse on me!';
    // });

    // // Mouse leave
    // button.addEventListener('mouseout', () => {
    //   message.textContent = 'Mouse is not on me!';
    // });

    // #6

    // const widthSpan = document.querySelector('#width');
    // const heightSpan = document.querySelector('#height');

    // function updateSize() {
    //   widthSpan.textContent = window.innerWidth;
    //   heightSpan.textContent = window.innerHeight;
    // }

    // updateSize();

    // window.addEventListener('resize', updateSize);

    // #7

    const countrySelect = document.querySelector('#country');
    const citySelect = document.querySelector('#cities');
    const output = document.querySelector('#output');

    const citiesByCountry = {
        ger: ['Berlin', 'Munich', 'Hamburg'],
        usa: ['New York', 'Chicago', 'Washington', 'Boston'],
        ukr: ['Kyiv', 'Lviv', 'Odessa']
      };
  
      function updateCities() {
        const selectedCountry = countrySelect.value;
        const cities = citiesByCountry[selectedCountry];
  
        citySelect.innerHTML = '';

        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.toLowerCase();
            option.textContent = city;
            citySelect.appendChild(option);
          });
    
          updateOutput();
        }
    
        function updateOutput() {
          const selectedCountryText = countrySelect.options[countrySelect.selectedIndex].text;
          const selectedCityText = citySelect.options[citySelect.selectedIndex].text;
          output.textContent = `Selected Country: ${selectedCountryText}, City: ${selectedCityText}`;
        }
    
        updateCities();
    
        countrySelect.addEventListener('change', updateCities);
        citySelect.addEventListener('change', updateOutput);
 

