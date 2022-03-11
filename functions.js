

console.log('Hola functions')

let btnNewPhoto = document.getElementById("newPhoto")
let photo = document.getElementById("photo")





async function generatePhoto() {
    console.log("desc:")

    const res = await fetch(`https://dog.ceo/api/breeds/image/random`, {
       
    })

    let data = await res.json();
    
    document.getElementById("photo").innerHTML = `<img id="img" src="${data.message} " height="400px">`;
}

document.getElementById("btnNewPhoto").addEventListener('click', () => {
    generatePhoto();
});

window.onload = () => {
    generatePhoto();
}