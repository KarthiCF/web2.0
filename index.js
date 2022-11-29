
var nft_names = document.getElementById('enter_fname')
var nft_prices = document.getElementById('enter_price')
let submit_button = document.getElementById('up_btn')


submit_button.addEventListener("click", function(event){
    localStorage.setItem("nft_name",nft_names.value)
    localStorage.setItem("nft_price",nft_prices.value)

    alert("One image has been added to home page. You are about to redirected to home page")

})

// Adding new image to home page that is selected from admin page from local computer
function addingNewNFt(){
    let adding = document.getElementById('addingImage')
    let adding_name = localStorage.getItem("nft_name")
    let adding_price = localStorage.getItem("nft_price")


    const url = localStorage.getItem('m_image');
    const img = new Image();
    img.src = url;
    

    const srcd= String(img)
    console.log()
    document.getElementById('flower').appendChild(img)

    var block = ` <br> <h4 style="color:purple">${adding_name}</h4>
                        <div class="desc"> <h5>Price:&nbsp${adding_price}$</h5>
                            <button id="f1" type="button" class="btn btn-secondary btn2cart" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Add to cart
                              </button>
                        </div>`

    adding.innerHTML += block
}

//Move image to local storage
var nft_image = document.getElementById('formFile')

nft_image.addEventListener('change', () => {
    const fr = new FileReader();
    fr.readAsDataURL(nft_image.files[0]);
    fr.addEventListener('load', () => {
        const url = fr.result;
        
        localStorage.setItem('m_image', url)
    })
})  



