function getCartItemsById(elementid){

        // get the item name  
        const itemname=document.getElementById(elementid);
        const item=itemname.innerText
        
        
        // get the cart list
        const cartlist=document.getElementById("cart-list")
        const li=document.createElement('li'
        )
        
        
        li.innerText=item;
        li.style.listStyleType='decimal'
        li.style.marginLeft='12px'
        
        cartlist.appendChild(li);


}

function getAndSetPrices(getId,setPrice)
{
    // prices of accesorries
    const accesorriesPrice=document.getElementById(setPrice);
    const priceString=accesorriesPrice.innerText
    const price=parseFloat(priceString)


    // get total price

    const previousTotalPrices=document.getElementById(getId)

    const previousTotalString=previousTotalPrices.innerText
    const previousTotalFloat= parseFloat(previousTotalString)

    

    const TotalPrice= previousTotalFloat + price
    
    previousTotalPrices.innerText=TotalPrice.toFixed(2)

    const totalwithdiscount=document.getElementById('total-with-discount');

             const newtotal=TotalPrice ;
             totalwithdiscount.innerText=newtotal.toFixed(2);

            //  button

                const button=document.getElementById('make-Purchase')
                if( previousTotalPrices === '00.00')
                {
                    button.setAttribute('disabled',true)
                }
                else
                {
                    button.removeAttribute('disabled')
                }
            
               }

// coupon code
document.getElementById('text-field').addEventListener('keyup',function(event){

    const text=event.target.value;
    const button=document.getElementById('coupon-button')


    if(text==='SELL200')
    {
        button.removeAttribute('disabled')
    }
    else
    {
        button.setAttribute('disabled',true)
    }


})











    // kitchenware-1
document.getElementById('kitchen-1').addEventListener('click',function(){
    getCartItemsById('kitchenware-1')
    getAndSetPrices('total-price','kitchen-1-price')


}
)
// kitchenware-2
document.getElementById('kitchen-2').addEventListener('click',function(){
    getCartItemsById('kitchenware-2')
    getAndSetPrices('total-price','kitchen-2-price')


}
)
// kitchenware-3
document.getElementById('kitchen-3').addEventListener('click',function(){
    getCartItemsById('kitchenware-3')
    getAndSetPrices('total-price','kitchen-3-price')


}
)



 // Sportswear-1
 document.getElementById('Sports-1').addEventListener('click',function(){
    getCartItemsById('Sportswear-1')
    getAndSetPrices('total-price','Sportswear-1-price')


}
)
// Sportswear-2
document.getElementById('Sports-2').addEventListener('click',function(){
    getCartItemsById('Sportswear-2')
    getAndSetPrices('total-price','Sportswear-2-price')


}
)
// kitchenware-3
document.getElementById('Sports-3').addEventListener('click',function(){
    getCartItemsById('Sportswear-3')
    getAndSetPrices('total-price','Sportswear-3-price')


}
)


 // Furniture-1
 document.getElementById('Furniture-1').addEventListener('click',function(){
    getCartItemsById('Furnitures-1')
    getAndSetPrices('total-price','Furnitures-1-price')


}
)
// Sportswear-2
document.getElementById('Furniture-2').addEventListener('click',function(){
    getCartItemsById('Furnitures-2')
    getAndSetPrices('total-price','Furnitures-2-price')


}
)
// Furniture-3
document.getElementById('Furniture-3').addEventListener('click',function(){
    getCartItemsById('Furnitures-3')
    getAndSetPrices('total-price','Furnitures-3-price')


}
)



    
    








   document.getElementById('purchase-button').addEventListener('click',function(){

   
    const initialtotalamount=document.getElementById('total-price')
    initialtotalamount.innerText='00.00';

    const initialdiscount=document.getElementById('discount')
    initialdiscount.innerText='00.00';

    const initialtotal=document.getElementById('total-with-discount')
    initialtotal.innerText='00.00';

    const initialcart=document.getElementById('cart-list')
    initialcart.innerText=''

    const button=document.getElementById('make-Purchase')
    button.disabled=true

})