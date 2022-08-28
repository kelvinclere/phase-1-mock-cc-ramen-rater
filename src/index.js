
// write your code here
//Fetching data from backend
function fetchRamen(){
    fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(ramen => ramen.forEach(function(dish){
        renderDish(dish)
    }))
}
//Displaying data from db
function renderDish(dish){
    let rdish = document.createElement('img')
    rdish.src = dish.image

    // when image is clicked
    rdish.addEventListener('click', () => {
        document.querySelector(".detail-image").src = dish.image
        document.querySelector(".name").textContent = dish.name
        document.querySelector(".restaurant").textContent = dish.restaurant
        document.querySelector("#rating-display").textContent = dish.rating
        document.querySelector("#comment-display").textContent = dish.comment
    })
    document.getElementById('ramen-menu').appendChild(rdish)
}

function displaDish(){
    fetchRamen()
}

displaDish()

//To add ramen to jsonfile
function postRamen(ramenObj){
    fetch("http://localhost:3000/ramens", {
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(ramenObj)
    })
    .then(res => res.json())
    .then(ramen => console.log(ramen))
}

//Take User Input
function addRamen(e){
    e.preventDefault()

    let ramenObj = {
        name: e.target.new_name.value,
        restaurant: e.target.new_restaurant.value,
        image: e.target.new_image.value,
        rating: e.target.new_rating.value,
        comment: e.target.new_comment.value
    }

    postRamen(ramenObj)
    renderDish(ramenObj)
}

document.getElementById('new-ramen').addEventListener('submit', addRamen)