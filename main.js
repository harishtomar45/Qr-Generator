let input = document.querySelector("input");
let imgBox = document.querySelector(".imgBox");
let img = document.querySelector("img");
let button = document.querySelector("button");




const qrGenerator = async () => {
    try {
        const response = await fetch(` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value} `);
      imgBox.className ="imgBox d-flex aling-items-center justify-content-center my-5";
    img.setAttribute("src", response.url );
console.log(response);
    } catch (error) {
        window.alert("Please Enter Value")
    }
}

button.addEventListener('click', qrGenerator );