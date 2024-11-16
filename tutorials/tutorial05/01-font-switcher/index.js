const makeBigger = () => {
   // alert('make bigger!');
   const h1 = document.querySelector('h1');
   h1.style.fontSize = "50px";
   const div = document.querySelector('div.content');
   div.style.fontSize = "50px";
};

const makeSmaller = () => {
   // alert('make smaller!');
   const h1 = document.querySelector('h1');
   h1.style.fontSize = "32px";
   const div = document.querySelector('div.content');
   div.style.fontSize = "22.4px";
};
