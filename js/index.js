// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price*quantity
  product.querySelector('.subtotal span').textContent = subTotal
  return subTotal

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.


  const multipleProduct = document.querySelectorAll('.product')
  let total = 0
  multipleProduct.forEach(function(item){
    total += updateSubtotal(item)
  })
  document.querySelector('#total-value span').textContent=total


  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productTag = target.parentNode.parentNode
  productTag.parentNode.removeChild(productTag)
  //... your code goes here
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelectorAll('.create-product input')[0].value
  const productPrice = document.querySelectorAll('.create-product input')[1].value
  const targetTag = document.querySelector('tbody')
  const productHtml = `
  <tr class="product">
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity">
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`
  

  targetTag.insertAdjacentHTML('beforeend', productHtml)

  const removeBtn = document.querySelectorAll('.btn-remove')
  removeBtn.forEach(function(item){
    item.addEventListener('click',removeProduct)
  })

  document.querySelectorAll('.create-product input')[0].value = null
  document.querySelectorAll('.create-product input')[1].value = 0

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove')
  removeBtn.forEach(function(item){
    item.addEventListener('click',removeProduct)
  })

  const createBtn = document.querySelector('#create')
  createBtn.addEventListener('click',createProduct)

  //... your code goes here
});
