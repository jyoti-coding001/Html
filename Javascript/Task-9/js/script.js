document.getElementById("box").innerHTML= text;
const data = fetch('https://fakestoreapi.com/products/')
    .then (response => response.json())
    .then (json => {
        console.log(json);
        for(let i = 0; i < json.length; i++) {
            document.writeln(` <h2>Id ${json[i].id} </h2> <h3>category</h3> ${json[i].category} <h3>description</h3> ${json[i].description} <h3>Image URL</h3>${json[i].image} <h3>Price</h3> ${json[i].price} <h3>Count</h3> ${json[i].rating.count}  <h3>Rate</h3> ${json[i].rating.rate}</br>`);
        }
        })

    //console.log(data);