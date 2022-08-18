
// el inputs Kolha
var pNameInput = document.getElementById("pName");
var pPriceInput = document.getElementById("pPrice");
var pCatInput = document.getElementById("pCat");
var pDescInput = document.getElementById("pDesc");


var cartona ; // undefined

if( localStorage.getItem("hamada") == null  )
{
    cartona = [];
}
else
{
    cartona =  JSON.parse(   localStorage.getItem("hamada")  )  ; // string
    displayProducts()
}



//===========================add product ===============
//click add , call display , call clearInputs
function addProduct()
{
    // object
    var oneProduct = 
    {
        pName : pNameInput.value ,
        pPrice : pPriceInput.value,
        pCat : pCatInput.value,
        pDesc : pDescInput.value,
    }
    //object Data type
   cartona.push(oneProduct); // LG , Toshiba


   // 1-
   localStorage.setItem("hamada" , JSON.stringify(cartona) )

   // display
   displayProducts();

   //clear ll inputs
   clearInputs()
   
    
}

// display
function displayProducts()
{
    var hasalah =``;
   for( var i =0 ; i < cartona.length ;i++)
   {
       hasalah += `<tr>

       <td>${i}</td>

       <td>${cartona[i].pName}</td>
       <td>${cartona[i].pPrice}</td>
       <td>${cartona[i].pCat}</td>
       <td>${cartona[i].pDesc}</td>


       <td>
       <button onclick="relitevProduct(${i})" class="btn btn-outline-primmary">update</button>
       </td>
       <td>
            <button onclick="deleteProduct(${i})" class="btn btn-outline-warning">Delete</button>
       </td>
       
       </tr>`
   }


   document.getElementById("tBody").innerHTML = hasalah;
}


function clearInputs()
{
    pNameInput.value = "";
   pPriceInput.value = "";
   pCatInput.value = "";
   pDescInput.value = "";
}

function deleteProduct( pIndex){

    cartona.splice(pIndex  ,1)  
    localStorage.setItem( "hamada" , JSON.stringify(cartona));
    displayProducts();


}

function relitevProduct(pIndex)
{
      pNameInput.value = cartona[pIndex].pName;
      pPriceInput.value = cartona[pIndex].pPrice;
      pCatInput.value = cartona[pIndex].pCat;
      pDescInput.value = cartona[pIndex].pDesc;

     
      document.querySelector(".buttonsContaoner").innerHTML = "<button class='btn btn-warning'>Update</button>"
     
}


function searchProduct(userWord)
{
    hasalah =``;
    for(var i; i<=cartona.length;i++)
    {
        if(cartona[i].pName.toLowerCase().includes(userWord.toLowerCase()) )
        {
            hasalah += `<tr>

            <td>${i}</td>
     
            <td>${cartona[i].pName}</td>
            <td>${cartona[i].pPrice}</td>
            <td>${cartona[i].pCat}</td>
            <td>${cartona[i].pDesc}</td>
     
     
            <td>
            <button onclick="relitevProduct(${i})" class="btn btn-outline-primmary">update</button>
            </td>
            <td>
                 <button onclick="deleteProduct(${i})" class="btn btn-outline-warning">Delete</button>
            </td>
            
            </tr>`

        }
    }

    document.getElementById("tBody").innerHTML= hasalah;
}


























