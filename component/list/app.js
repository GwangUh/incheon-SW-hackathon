
let list = [
  {
    imgs:"img/main1.jpg",
    name:"낙곱새",
    exp:"낙지와 곱창, 새우에 양념을 넣어 조리한 요리"
  },
  {
    
    name:"순대곱창",
    exp:"순대와 곱창, 양념까지. 한번에 먹을 수 있어요"
  }
];

list.forEach((el)=>{
  document.querySelector('.list').innerHTML += `
    <div class="menu">
      <img src=${el.imgs} alt="main1">
      <div class="aa">
        <p class="name">${el.name}</p>
        <p class="exp">${el.exp}</p>
        <p class="exp">18,000원 | ⭐4.2</p>
      </div>
    </div>
  `
});