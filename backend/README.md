//-----------------------------------
For SIGIN/LOGIN
POST

https://harlequin-deer-kilt.cyclic.app/login/loginUser
header token – Authorization
Body{
email
password
}

//-----------------------------------


registration/signup 
POST

https://harlequin-deer-kilt.cyclic.app/login/adddetails

model – all DATA

 //-----------------------------------

for all data
all Products
GET

https://harlequin-deer-kilt.cyclic.app/product/get




//-----------------------------------


FOR SINGLE PRODUCTS
https://harlequin-deer-kilt.cyclic.app/product/get/:id

//-----------------------------------
TO POST DATA

https://harlequin-deer-kilt.cyclic.app/product/post


//-----------------------------------
FOR DELETE 

https://harlequin-deer-kilt.cyclic.app/cart/delete/:id


//-----------------------------------

CART
GET pass Authorazation token in header
https://harlequin-deer-kilt.cyclic.app/cart




//-----------------------------------
Post request ADD Product to Cart

https://harlequin-deer-kilt.cyclic.app/cart/create 


//-----------------------------------
PATCH REQUEST
https://harlequin-deer-kilt.cyclic.app/modify/:id 



//-----------------------------------
DELETE REQUEST




https://harlequin-deer-kilt.cyclic.app/cart/delete/:id 

 https://harlequin-deer-kilt.cyclic.app/product/get?gender=mens

 https://harlequin-deer-kilt.cyclic.apps/product/get?gender=Women



 //...............................

 https://harlequin-deer-kilt.cyclic.app/product/get?gender=Womens&category=tops

 https://harlequin-deer-kilt.cyclic.app/product/get?gender=mens&category=hoodies

 https://harlequin-deer-kilt.cyclic.app/product/get?gender=mens&category=tops

 https://harlequin-deer-kilt.cyclic.app/product/get?gender=mens&category=bottom

https://harlequin-deer-kilt.cyclic.app/product/get?category=tops&gender=mens