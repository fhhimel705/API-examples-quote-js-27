
const loadMeals = (search) => {
 
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((data) => displayMeals(data));
};
const displayMeals = (food) => {
  //   console.log(food.meals[0].strMeal);
  const mealsDiv = document.getElementById("meals-div");
  mealsDiv.innerHTML = '';
  
  food.meals.forEach((meals) => {
    // console.log(meals.strMeal);
    const createMealsDiv = document.createElement("div");
    
    createMealsDiv.innerHTML = `
    <div class="card h-100">
    <img src="${meals.strMealThumb}" class="card-img-top w-42px" alt="...">
    <div class="card-body">
    <h3 class="card-title">${meals.strMeal}</h3>
    <h5 class="card-text">id meal : ${meals.idMeal} </h5>
    <h5 class="card-text">region : ${meals.strArea} </h5>
    </div>
    <div class="card-footer">
    <button type="button"  onclick ='detailsBtn(${meals.idMeal})' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Details
  </button>
    </div>
    </div>
    `;
    mealsDiv.appendChild(createMealsDiv);
    
  });
};
const searchMeals = () => {
  
  const searchFiels = document.getElementById('search-field');
  const search = searchFiels.value;
  // const searchBtn = document.getElementById('search-btn');
  loadMeals(search);
}
loadMeals();
const detailsBtn = (idMeal) =>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayDetails(data.meals[0]))
  .catch(error => console.log(error))
  
}
// ---------- async await ------------
const detailsBtn02 = async(idMeal) =>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
 try{
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.meals[0]);
 }
 catch(error){
console.log(error);
 }
  
  
}

    
    const displayDetails = (data) => {
    // console.log(data.meals[0].idMeal);
    const modalTitle = document.getElementById('staticBackdropLabel');
    modalTitle.innerText = `${data.strMeal}`
    // const modalImg = document.getElementById('modal-img');
    // modalImg.src = `${data.meals[0].strMealThumb}`;
    // const region = document.getElementById('region');
    // region.innerText = `${data.meals[0].strArea}`;
    // const youtube = document.getElementById('youtube-link');
    // youtube.href = `${data.meals[0].strYoutube}`

    const modalBody = document.getElementById('modal-body');
    modalBody.classList.add('modal-body');
    modalBody.innerHTML=`
    <img class='img-fluid rounded ' src = '${data.strMealThumb}' alt="">
            <h2 class="region">${data.strArea}</h2>
            <a id='youtube-link' href='${data.strYoutube}'>YouTube : ${data.strYoutube}</a>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
    
    `
  }
  
