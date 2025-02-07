// // let recipies = document.getElementById("items")
// // for (i in data) {
// //     let card = document.createElement("div")
// //     card.id = "item"
// //     card.innerHTML = `
// // <img src='${data[i].image}'/>
// // <h3>${data[i].name}</h3>
// // <p>${data[i].category}</p>
// // <p>${data[i].description}</p>
// // <button id='favItem' class='btn' type='submit'>Favourite</button>
// // <button class='btn' type='submit'>View Recipe</button>
// // `
// //     recipies.append(card)
// //     card.querySelector("#favItem").addEventListener("click",()=>{
// //         let confirmAddFavRecipe=confirm("Do you wanna add item to Favrouites");

// //         if(confirmAddFavRecipe){
// //             const allfavRecipes=JSON.parse(localStorage.getItem("favRecipes")) || []
// //             allfavRecipes.push(i)
// //             localStorage.setItem("favRecipes",JSON.stringify(allfavRecipes))
// //             alert("Item added")

// //         }
// //     })
// // }



// // let category=document.getElementById("veg")
// // category.foreach(button,()=>{
// //     const btnText=button.textContent;
// //     btn.addEventListner("click",()=>{
// //         const filterdData=data.filter(i=>i.category.toLocaleLowerCase() === buttontext.toLocaleLowerCase())
// //     })
// //     console.log(filterdData)
// //     let card = document.createElement("div")
// //     card.id = "item"
// //     card.innerHTML = `
// // <img src='${data[i].image}'/>
// // <h3>${data[i].name}</h3>
// // <p>${data[i].category}</p>
// // <p>${data[i].description}</p>
// // <button class='btn' type='submit'>Favourite</button>
// // <button class='btn' type='submit'>View Recipe</button>
// // `
// //     recipies.append(card)
// // })

// // let veg=document.getElementById("veg");
// // veg.addEventListener("click",()=>{
// //     let card = document.createElement("div")
// //     card.id="item"
// //     card.innerHTML = `
// // <img src='${data[i].image}'/>
// // <h3>${data[i].name}</h3>
// // <p>${data[i].category}</p>
// // <p>${data[i].description}</p>
// // <button class='btn' type='submit' >Favourite</button>
// // <button class='btn' type='submit' >View Recipe</button>
// // `
// //     veg.append(card)
// //     const filteredData=data.filter(x=>x.category.toLowerCase() === "Vegetarian");
// //     console.log(filteredData)
// //     recipies.append(card)
// // })
// // function searchFunctionality(){
// //     let input=document.querySelector("input")
// //     let inputValue = input.value;
// //     const searchData=data.filter(i=>i.name.toLowerCase() === inputValue.toLowerCase())
// //     alert("hii...!!!")
// //     console.log(searchData)
// // }
// // function searchFunctionality(){
// //     input=document.querySelectorAll("input")
// //     inputValue=input.value;
// //     searchData=data.filter(x=>x.name.toLowerCase() === inputValue.toLowerCase())
// //     console.log(searchData)
// // } 

const recipesContainer = document.getElementById("items");

// Render recipes dynamically
function renderRecipes(data) {
    recipesContainer.innerHTML = ""; // Clear previous recipes
    data.forEach( (recipe, index)=> {
        let card = document.createElement("div");
        card.id = "item";
        card.innerHTML = `
            <img src='${recipe.image}' alt='${recipe.name}'/>
            <h3>${recipe.name}</h3>
            <p>Category: ${recipe.category}</p>
            <p>${recipe.description}</p>
            <button class='btn fav-btn' data-index='${index}'>Favourite</button>
            <button class='btn view-btn'>View Recipe</button>
        `;
        recipesContainer.append(card);

        // Add to Favourites
        card.querySelector(".fav-btn").addEventListener("click", () => {
            const confirmAddFavRecipe = confirm("Do you want to add this item to Favourites?");
            if (confirmAddFavRecipe) {
                const allFavRecipes = JSON.parse(localStorage.getItem("favRecipes")) || [];
                allFavRecipes.push(recipe);
                localStorage.setItem("favRecipes", JSON.stringify(allFavRecipes));
                alert("Item added to Favourites!");
            }
        });
        card.querySelector(".view-btn").addEventListener("click", ()=>{
            localStorage.setItem("singleitem",JSON.stringify(recipe))
            window.location.href="../Singleitem/item.html"
        })
    });
}

// Display all recipes initially
renderRecipes(data);

// Filter by Category
document.querySelectorAll(".cat button").forEach((button) => {
    button.addEventListener("click", () => {
        const btnText = button.textContent.trim();
        const filteredData = data.filter(
            (recipe) => recipe.category.toLowerCase() === btnText.toLowerCase()
        );
        renderRecipes(filteredData);
    });
});

// Search Functionality
function searchFunctionality() {
    const input = document.querySelector("#searchInput");
    const inputValue = input.value.trim().toLowerCase();

    if (!inputValue) {
        alert("Please enter a search term!");
        return;
    }

    const searchData = data.filter((recipe) =>
        recipe.name.toLowerCase().includes(inputValue)
    );

    if (searchData.length > 0) {
        renderRecipes(searchData);
    } else {
        recipesContainer.innerHTML = "<p>No recipes found!</p>";
    }
}

// Attach search functionality to form
document.querySelector("#searchForm").addEventListener("submit", (e) => {
    e.preventDefault(); 
    searchFunctionality();
});

//single item card
card.addEventListener("click",()=>{
    localStorage.setItem("singleItem",JSON.stringify(i))
    window.location.href="../Singleitem/item.html"
})