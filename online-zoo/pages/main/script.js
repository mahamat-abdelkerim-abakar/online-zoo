document.getElementById('donate-btn').onclick = function () {
  location.href = '../donate/index.html';
};

document.getElementById('logo-anchor').onclick = function () {
  location.href = './index.html';
};
document.getElementById('logo-anchor2').onclick = function () {
  location.href = './index.html';
};

const catalogueImgArr = document.getElementsByClassName('grid-card');
for (let index = 0; index < catalogueImgArr.length; index++) {
  catalogueImgArr[index].onmouseenter = () => {
    catalogueImgArr[index].getElementsByTagName('img')[0].style.cssText = `
    transform: scale(1.1);
    transition: 1s;
    -webkit-filter: brightness(50%);
    -moz-filter: brightness(50%);
    -o-filter: brightness(50%);
    -ms-filter: brightness(50%);
    filter: brightness(50%);`;
    catalogueImgArr[index].getElementsByTagName('h6')[0].style.cssText = `
      width: 312px;
      text-align: center;
      margin: auto;
      transform: translate(0,-230px); 
      transition: 1s;
      color: white;
      font-size: 20px;
      font-family: "Roboto-500";
    `;
    catalogueImgArr[index].getElementsByTagName('p')[0].style.cssText = `
      width: 312px;
      margin: auto;
      text-align: center;
      transform: translate(0,-200px); 
      transition: 1s;
      color: white;
      font-size: 18px;
      font-family: "Roboto-400";
    `;
  };
  catalogueImgArr[index].onmouseleave = () => {
    catalogueImgArr[index].getElementsByTagName('img')[0].style.cssText = `
    transform: scale(1);
    transition: 1s;
    -webkit-filter: brightness(100%);
    -moz-filter: brightness(100%);
    -o-filter: brightness(100%);
    -ms-filter: brightness(100%);
    filter: brightness(100%);`;
    catalogueImgArr[index].getElementsByTagName('h6')[0].style.cssText = `
      transform: translate(0,0); 
      transition: 1s;
      color: black;
      font-family: "Roboto-500";
      font-size: 16px;
    `;
    catalogueImgArr[index].getElementsByTagName('p')[0].style.cssText = `
      transform: translate(0,0); 
      transition: 1s;
      color: black;
      font-family: "Roboto-300";
      font-size: 15px;
    `;
  };
  // console.log(catalogueImgArr[index].getElementsByTagName('p')[0].innerText);
  // console.log(catalogueImgArr[index].getElementsByTagName('h6')[0].innerText);
  // console.log(catalogueImgArr[index].getElementsByTagName('p')[0].innerText);
  // getElementsByTagName('a');
}
// catalogueImgArr.forEach((element) => {});
