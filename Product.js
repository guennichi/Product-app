function product(){
    var products = JSON.parse(localStorage.getItem('productlist')) || []
    console.log(products)
    var name = document.getElementById('nom')
    var descr = document.getElementById('desc')
    var quant = document.getElementById('quantity')
    var prix = document.getElementById('Price')
    var validForm=true

    if (name.value == '') {
        name.classList.add('is-invalid')
        name.classList.remove('is-valid')

        validForm = false
    }
    else {
        name.classList.add('is-valid')
        name.classList.remove('is-invalid')
    }
    if (descr.value == '') {
        descr.classList.add('is-invalid')
        descr.classList.remove('is-valid')

        validForm = false
    }
    else {
        descr.classList.add('is-valid')
        descr.classList.remove('is-invalid')
    }
    if (quant.value == ''  ) {
        quant.classList.add('is-invalid')
        descr.classList.remove('is-valid')

        validForm = false
    }
    else {
        quant.classList.add('is-valid')
        quant.classList.remove('is-invalid')
    }

    if (prix.value == '' ) {
        prix.classList.add('is-invalid')
        prix.classList.remove('is-valid')

        validForm = false
    }
    else {
        prix.classList.add('is-valid')
        prix.classList.remove('is-invalid')
    }

    if (validForm) {
        var data = {
            nom: nom.value,
            des: descr.value,
            qt: quant.value,
            pr: prix.value,
        }
        alert(' Le produit est ajouté avec succés')
        console.log(data);
        products.push(data)
        console.log(products);
        localStorage.setItem('productlist', JSON.stringify(products))
        window.location.href = 'product.html'
    }
    
}
