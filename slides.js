
// CONTENT FOR THESE PAGES
let pageNumber = 0


// IMAGE LIST


const pages = [

   {Image: ` <img src="./img/image1.jpg" alt="">`}, 

   {Image: `<img src="./img/image2.jpg" alt="">`},

   {Image: `<img src="./img/image3.jpg" alt="">`},

   {Image: `<img src="./img/image4.jpg" alt="">`},

   {Image: `<img src="./img/image5.jpg" alt="">`},

   {Image: `<img src="./img/image6.jpg" alt="">`}


]






//CONTENT LIST


const content = [

{slide: `<h1>
Dark Roast Cafe
</h1>

<h2>
Many people across the world <b>LOVE COFFEE</b>!
</h2>

<p>
Here at Dark Roast Cafe our <b>intense</b> flavors of our <b><em>Dark Roast</em></b>  
coffee beans will give you an eye opening!
</p> `},


{slide: `<h2>
<b>"<em>Coffee</em></b> is what brings
us
<b>Together"</b>
            
</h2>`},


{slide: `<h2>
<b>Become</b> your very own <b>BARISTA!</b>

</h2>

<p>
Pick your own Coffee beans and will Freshly 
ground them just for you
</p>
<p>
Will even <b>Deliver</b> it!
</p>

<div>
     <a href="./order.html"> TRY IT</a>

            </div>`},


{slide: `<h1><b>Old Fashion</b></h1>

<h2> Pecan Pie Cold Brew !</h2>
<p>Our<em> earthy flavor </em>
<b>Brazialian</b> coffee beans, with the flavor of that traditional slice of <b><em>Pecan Pie</em></b>.</p> 
<p>Who doesn't like that feeling of autum fall
 <em>coziness</em> </p>`},


{slide: `<h1> <b>NEW</b></h1>
<h2>Dark Chocolate Raspberry Finish
</h2>
<p>
A roasted Cold Brew with a 
twisted finish of<b> Dark Chocolate and Raspberry liquor</b>, 
to help you <em>relax</em> after a long day 
</p> `},


{slide: `<h2> <b>INVENTING</b>
is our specialty
</h2>
<p>
To our simple Cold Brew 
to a innovative
Dark chocolate, Raspberry
Roast
</p>

<p>
We got you <b>Coverd</b>!
</p>`}

]









//PICK BUTTON TAG



const nexTag = document.querySelector("footer img.next")
const randomTag = document.querySelector("footer img.random")
const previousTag = document.querySelector("footer img.prev")



//RELAVANT TAG

const outputTag = document.querySelector("section div.images")


const sliderTag = document.querySelector("content div.slide")









//NEXT BUTTON





const next = () => {
    pageNumber = pageNumber + 1


    if (pageNumber > pages.length - 1) {
        pageNumber = 0
    } 

   



    updateSelction()


}





//RANDOM BUTTON



const random = function () {
    pageNumber = Math.floor (Math.random () * pages.length)


    updateSelction()

}








//PREVIOUS BUTTON



const previous = function () {
    pageNumber = pageNumber - 1


if ( pageNumber < 0) {
    pageNumber = pages.length -1
}


updateSelction()


}




//EVENTS






const updateSelction = function () {

    outputTag.innerHTML = pages[pageNumber].Image
    sliderTag.innerHTML = content[pageNumber].slide
   
    
}




nexTag.addEventListener ("click", function () {

    next()

})



previousTag.addEventListener("click", function(){

    previous()

})




randomTag.addEventListener("click", function(){

    random()

})



