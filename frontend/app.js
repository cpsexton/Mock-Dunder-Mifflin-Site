const body = document.body
const content = document.getElementById('theSection')
const shopNavButton = document.getElementById('navButtonShop')
const header = document.querySelector('header')
const dinMufLetterContainer = document.getElementById("dMufflinContainer")
const dinMufBigH1 = document.getElementsByClassName("dinMufBig")
const menuBarDiv = document.getElementsByClassName("menuBarDiv")
const cardContainer = document.getElementsByClassName("cardContainer")

// if item.category == Categories then do create;
// function testNum(a) {
//     return "positive";
// } else {
//     return console.log(item.name);
// }
// }

//////////EVENT LISTENER//////////DIN MUFF LETTERS /////////////////////////////

dinMufBigH1[0].addEventListener('click', event => {
        //flip out on x axis animation//
    const dinMufBig = event.target.parentNode
        event.target.parentNode.classList.add("animated", "flipOutX", "faster")    
        
        
        /////delays the removal so animation finishes/////
        var delayInMilliseconds1 = 400; //1 second
        setTimeout(function() {
            //your code to be executed after 1 second
            dinMufBig.parentNode.removeChild(dinMufBig);
            
                  /////////////creates the line///////////////
            const lineDivThatMoves = document.createElement('div');
            lineDivThatMoves.classList.add("daLine", "animated", "flipInX", "fastest");

            dinMufLetterContainer.append(lineDivThatMoves);
     /////////////////then menu buttons pop up on top of the line
                ///can we make the line sticky now?
                var delayInMilliseconds2 = 1000; //1 second
        setTimeout(function() {
            lineDivThatMoves.classList.remove("flipInX", "animated", "fastest")
            
            lineDivThatMoves.classList.add("vertTranslate")
            

        var delayInMilliseconds1 = 1200;
        setTimeout(function() {
            const bottomLineDivThatMoves = document.createElement('div');
            bottomLineDivThatMoves.classList.add("menuBarDiv");
            dinMufLetterContainer.append(bottomLineDivThatMoves);
            
            
            // line is at top now and this block creates the menu //
            let firstList = ["Home", "Staff", "Shop", "Contact"];
            firstList.forEach(function(i) {
                var menuText = document.createElement("div")
                menuText.className = "spanMenuButton"
                menuText.classList.add("animated", "flipInX", "fast")
                menuText.innerText = i;
                bottomLineDivThatMoves.append(menuText);
                console.log("created the menu text")
            })
            
            let dunMifHeaderText = document.createElement('p')
            dunMifHeaderText.classList.add("dunMifHeaderText")
            dunMifHeaderText.classList.add("animated", "flipInX");
            dunMifHeaderText.innerHTML = "Dunder Mifflin";
            dinMufLetterContainer.append(dunMifHeaderText);
            
            const aboutCardContainer = document.createElement('div')
            aboutCardContainer.classList.add("aboutCardContainer")
            aboutCardContainer.setAttribute("id", "aboutCardContainerID")
            body.appendChild(aboutCardContainer)

            var delayInSeconds = 1000;
            setTimeout(function() {

                let scottsTotsContainer = document.createElement("div")
                scottsTotsContainer.classList.add("scottsTotsContainer")
                scottsTotsContainer.setAttribute("id", "scottsTotsContainerID")
                
                let title = document.createElement('span')
                title.innerText = "SCOTT'S TOTS"
                title.setAttribute("id", "scottsTotsTitle")
                
                let pleaseDonate = document.createElement("h3")
                pleaseDonate.innerText = "Please help dreams come true and donate today"
                
                let image = document.createElement("img")
                image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qqleIPpHPgIFXlxGQL0jM3UUeR3TyZkm2-uHEFB3KfKBmyw0Og"
                image.setAttribute("id", "scottsTotsImageID")

            let donationMenuName = document.createElement("input")
            donationMenuName.setAttribute("type", "text")
            donationMenuName.setAttribute("id", "donationMenuNameID")
            donationMenuName.setAttribute("placeholder", "Enter Name") 
            
            let donationMenuEmail = document.createElement("input")
            donationMenuEmail.setAttribute("type", "text")
            donationMenuEmail.setAttribute("id", "donationMenuEmailID")
            donationMenuEmail.setAttribute("placeholder", "Enter Email")
            
            let donationMenuAmount = document.createElement("input")
            donationMenuAmount.setAttribute("type", "text")
            donationMenuAmount.setAttribute("id", "donationMenuAmountID")
            donationMenuAmount.setAttribute("placeholder", "$0.00")
            
            let donationButton = document.createElement("button")
            donationButton.classList.add("donationButton")
            donationButton.innerText = "DONATE"

            aboutCardContainer.append(image, scottsTotsContainer)
            scottsTotsContainer.append(title, pleaseDonate, donationMenuName, donationMenuEmail, donationMenuAmount, donationButton);
            
            let locationContainer = document.createElement("div")
            locationContainer.setAttribute("id", "locationContainerID")
            aboutCardContainer.append(locationContainer)

            let uticaCard = document.createElement("div")
            uticaCard.setAttribute("id", "uticaCard")
            uticaCard.innerHTML = "Utica, New York";
            let uticaImg = document.createElement('img')
            uticaImg.setAttribute("id", "uticaImgID")
            uticaImg.src = "https://vignette.wikia.nocookie.net/theoffice/images/1/16/Uticabranch.jpg/revision/latest?cb=20071102155924"
            uticaCard.append(uticaImg)
            
            let scrantonCard = document.createElement("div")
            scrantonCard.setAttribute("id", "scrantonCard")
            scrantonCard.innerHTML = "Scranton, Pennsylvania";
            let scrantonImg = document.createElement('img')
            scrantonImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVSPrviJZtq7-S-sxq0l5dRTAX5w8MvMiZGxcvPhiY1Suv3tR"
            

            scrantonCard.append(scrantonImg)            
            locationContainer.append(scrantonCard, uticaCard)
            
            let alfredosPizzaCafeContainer = document.createElement("div")
            alfredosPizzaCafeContainer.classList.add("alfredoContainer")
            alfredosPizzaCafeContainer.setAttribute("id", "alfredosPizzaCafeContainer")
            let alfredosTitle = document.createElement("h1")
            alfredosTitle.innerText = "BUY ONE MEDIUM PIE AND GET ONE FREE"
            let alfredosLimitedTime = document.createElement("h3")
            alfredosLimitedTime.innerText = "limited time offer!"
            alfredosLimitedTime.setAttribute("id", "alfredosLimitedTime")
            let alfredoImage = document.createElement('img')
            alfredoImage.src = "https://cdn.doordash.com/media/restaurant/cover/AlfredosPizzaCafe_23_New_Rochelle_NY.png"
            alfredoImage.setAttribute("id", "alfredoImage")
            
            alfredosPizzaCafeContainer.append(alfredoImage, alfredosTitle, alfredosLimitedTime)
            aboutCardContainer.append(alfredosPizzaCafeContainer)
        }, delayInSeconds);

            /////  MENU BUTTON CLICK EVENT LISTENERS  /////
            const spanMenuButton = document.getElementsByClassName("spanMenuButton")
            
            ////HOME button removes about content and shop content////            
                    spanMenuButton[0].addEventListener('click', event => {
                        console.log("Hey I'm the Home Menu Button, someone clicked me")
                        if(document.getElementById("shoppingCartLogo")) {
                            document.getElementById("shoppingCartLogo").remove()
                            console.log("removed shopping card logo")
                        } else {
                            console.log("shopping cart didnt exist")
                        };
                        if (document.getElementById("cardContainer")) {
                            document.getElementById("cardContainer").remove()
                        } else {
                            
                        };
                        if(document.getElementById("aboutCardContainerID")) 
                        {
                            console.log("About CardContainer exists")
                            document.getElementById("aboutCardID").remove()
                            document.getElementById("aboutCardID").remove()
                            document.getElementById("aboutStaffHeader").remove()
                            
                        }else{
                    const aboutCardContainer = document.createElement('div')
                    aboutCardContainer.classList.add("aboutCardContainer")
                    aboutCardContainer.setAttribute("id", "aboutCardContainerID")
                    body.appendChild(aboutCardContainer)
                    console.log("created the about card container")
                
               
            let scottsTotsContainer = document.createElement("div")
            scottsTotsContainer.classList.add("scottsTotsContainer")
            scottsTotsContainer.setAttribute("id", "scottsTotsContainerID")
            
            let title = document.createElement('span')
            title.innerText = "SCOTT'S TOTS"
            title.setAttribute("id", "scottsTotsTitle")
            
            let pleaseDonate = document.createElement("h3")
            pleaseDonate.innerText = "Please help dreams come true and donate today"
            
            let image = document.createElement("img")
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qqleIPpHPgIFXlxGQL0jM3UUeR3TyZkm2-uHEFB3KfKBmyw0Og"
            image.setAttribute("id", "scottsTotsImageID")

            let donationMenuName = document.createElement("input")
            donationMenuName.setAttribute("type", "text")
            donationMenuName.setAttribute("id", "donationMenuNameID")
            donationMenuName.setAttribute("placeholder", "Enter Name") 
            
            let donationMenuEmail = document.createElement("input")
            donationMenuEmail.setAttribute("type", "text")
            donationMenuEmail.setAttribute("id", "donationMenuEmailID")
            donationMenuEmail.setAttribute("placeholder", "Enter Email")
            
            let donationMenuAmount = document.createElement("input")
            donationMenuAmount.setAttribute("type", "text")
            donationMenuAmount.setAttribute("id", "donationMenuAmountID")
            donationMenuAmount.setAttribute("placeholder", "$0.00")

            let donationButton = document.createElement("button")
            donationButton.classList.add("donationButton")
            donationButton.innerText = "DONATE"

            aboutCardContainer.append(image, scottsTotsContainer)
            scottsTotsContainer.append(title, pleaseDonate, donationMenuName, donationMenuEmail, donationMenuAmount, donationButton);

            let locationContainer = document.createElement("div")
            locationContainer.setAttribute("id", "locationContainerID")
            aboutCardContainer.append(locationContainer)

            let scrantonCard = document.createElement("div")
            scrantonCard.setAttribute("id", "scrantonCard")
            scrantonCard.innerHTML = "Scranton, Pennsylvania";
            let scrantonImg = document.createElement('img')
            scrantonImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVSPrviJZtq7-S-sxq0l5dRTAX5w8MvMiZGxcvPhiY1Suv3tR"
            
            let uticaCard = document.createElement("div")
            uticaCard.setAttribute("id", "uticaCard")
            uticaCard.innerHTML = "Utica, Pennsylvania";
            let uticaImg = document.createElement('img')
            uticaImg.setAttribute("id", "uticaImgID")
            uticaImg.src = "https://vignette.wikia.nocookie.net/theoffice/images/1/16/Uticabranch.jpg/revision/latest?cb=20071102155924"
            
            uticaCard.append(uticaImg)
            scrantonCard.append(scrantonImg)
            locationContainer.append(scrantonCard, uticaCard)
            
            let alfredosPizzaCafeContainer = document.createElement("div")
            alfredosPizzaCafeContainer.classList.add("alfredoContainer")
            alfredosPizzaCafeContainer.setAttribute("id", "alfredosPizzaCafeContainer")
            let alfredosTitle = document.createElement("h1")
            alfredosTitle.innerText = "BUY ONE MEDIUM PIE AND GET ONE FREE"
            let alfredosLimitedTime = document.createElement("h3")
            alfredosLimitedTime.innerText = "limited time offer!"
            alfredosLimitedTime.setAttribute("id", "alfredosLimitedTime")
            let alfredoImage = document.createElement('img')
            alfredoImage.src = "https://cdn.doordash.com/media/restaurant/cover/AlfredosPizzaCafe_23_New_Rochelle_NY.png"
            alfredoImage.setAttribute("id", "alfredoImage")
            
            alfredosPizzaCafeContainer.append(alfredoImage, alfredosTitle, alfredosLimitedTime)
            aboutCardContainer.append(alfredosPizzaCafeContainer)
                    }});
                    //END HOME button//
            
            ////ABOUT button makes employee card////
            spanMenuButton[1].addEventListener('click', event => {
                console.log("Hey I'm the About Button!!! I've Been Clicked")
                if(document.getElementById("locationContainerID"))
                {
                    document.getElementById("locationContainerID").remove()
                }else{
                    console.log(' ')
                };
                if(document.getElementById("alfredosPizzaCafeContainer"))
                {
                    document.getElementById("alfredosPizzaCafeContainer").remove()
                }else{
                    
                };
                if(document.getElementById("scottsTotsImageID"))
                {
                    }else{
                        console.log("scotts tots image doesnt exist")
                        };
                        if(document.getElementById("shoppingCartLogo"))
                        {
                            document.getElementById('shoppingCartLogo').remove()
                        } else {
                            console.log(' ')
                        };
                        if (document.getElementById('cardContainer')) {    
                            document.getElementById('cardContainer').remove()
                        } else {
                            console.log("nocardContainer")
                        };
                        if(document.getElementById("aboutCardContainerID")) 
                        {
                            console.log("About CardContainer exists")
                            document.getElementById("scottsTotsContainerID").remove()
                        document.getElementById("scottsTotsImageID").remove()
                        let aboutStaffHeader = document.createElement("div")
                        aboutStaffHeader.setAttribute("id", "aboutStaffHeader")
                        aboutStaffHeader.innerText = "SCRANTON STAFF"
                        aboutCardContainer.append(aboutStaffHeader)
                        fetch('http://localhost:3000/items')
                            .then(response => response.json())
                            .then(items => {
                                items.forEach(item => {
                        if (item.sku == 1) {
                            const aboutCard = document.createElement("div")
                            aboutCard.classList.add("aboutCard")
                            aboutCard.setAttribute("id", "aboutCardID")
                            
                            let name = document.createElement('h1')
                            name.innerHTML = item.name
                            let image = document.createElement('img')
                            image.src = item.image_url
                            let desc = document.createElement('p')
                            desc.innerHTML = item.description
                            let cat = document.createElement('h3')
                            cat.innerHTML = item.category
                            
                            aboutCard.append(name, cat, image, desc)
                            aboutCardContainer.append(aboutCard)
                            
                        }
                    })
                })
                }else{
                    const aboutCardContainer = document.createElement('div')
                    aboutCardContainer.classList.add("aboutCardContainer")
                    aboutCardContainer.setAttribute("id", "aboutCardContainerID")
                    body.appendChild(aboutCardContainer)
                
                let aboutStaffHeader = document.createElement("div")
                aboutStaffHeader.setAttribute("id", "aboutStaffHeader")
                aboutStaffHeader.innerText = "SCRANTON STAFF"
                aboutCardContainer.append(aboutStaffHeader)

                fetch('http://localhost:3000/items')
                .then(response => response.json())
                .then(items => {
                    items.forEach(item => {
                        if (item.sku == 1) {
                            const aboutCard = document.createElement("div")
                            aboutCard.classList.add("aboutCard")
                            aboutCardContainer.append(aboutCard)

                            let name = document.createElement('h1')
                            name.innerHTML = item.name
                            let image = document.createElement('img')
                            image.src = item.image_url
                            let desc = document.createElement('p')
                            desc.innerHTML = item.description
                            let cat = document.createElement('h3')
                            cat.innerHTML = item.category

                            aboutCard.append(name, cat, image, desc)
                        } else {
                            console.log("Hello There")
                        }

                    })
                })
            };
            });
                //END ABOUT button//
            
            ////SHOP button makes shopping cards////            
            spanMenuButton[2].addEventListener('click', event => {
                console.log("Hey I'm the Shop Button!!! I've Been Clicked")
                if(document.getElementById("locationContainerID"))
                {
                    document.getElementById("locationContainerID").remove()
                }else{
                    console.log(' ')
                };
                if(document.getElementById("scottsTotsContainerID"))
                {
                    document.getElementById("scottsTotsContainerID").remove()
                }else{
                    console.log("scotts tots container doesnt exist")
                };
                if(document.getElementById("scottsTotsImageID"))
                {
                    document.getElementById("scottsTotsImageID").remove()
                }else{
                    console.log("scotts tots image doesnt exist")
                };
                if(document.getElementById("welcomeCardID"))
                {
                    document.getElementById("welcomeCardID").remove()
                };
                if (document.getElementById("aboutCardContainerID")) {
                    document.getElementById("aboutCardContainerID").remove()
                } else {
                    console.log("noaboutCardContainer")
                };
                if(document.getElementById("welcomeCardID")) {
                    document.getElementById("welcomeCardID").remove()
                }else{
                    console.log('hi')
                };
                //create container that holds individual shopping item cards//
                const cardContainer = document.createElement('div')
                cardContainer.classList.add("cardContainer")
                cardContainer.setAttribute("id", "cardContainer")
                dinMufLetterContainer.append(cardContainer)
                
                //create left menu bar containing shopping cart//
                const leftSideCartMenu = document.createElement("div")
                leftSideCartMenu.classList.add("leftSideMenuClass")
                body.append(leftSideCartMenu)
                
                //create shopping cart logo if not made//
                if(document.getElementById("shoppingCartLogo")) {
                    console.log(' ')
                } else {
                let cartLogo = document.createElement('img')
                cartLogo.setAttribute("id", "shoppingCartLogo")
                cartLogo.setAttribute("src", "/cartimage.png")
                cartLogo.classList.add("shoppingCart")
                
                leftSideCartMenu.appendChild(cartLogo)
                };
                document.getElementById("shoppingCartLogo").addEventListener('click', event => {
                
                    console.log("cart clicked")
                    
                        // leftSideCartMenu.append(x[i])
                    
                })
                ///////////////////////////////////////////////////////
                fetch('http://localhost:3000/items')
                .then(response => response.json())
                .then(items => {
                    
                    items.forEach(item => {
                        if (item.sku == 2) {
                        let container = document.createElement('div')
                        let name = document.createElement('h3')
                    //  let sku = document.createElement('p')
                        let image = document.createElement('img')
                    //  let desc = document.createElement('p')
                        let category = document.createElement('p')
                    //  const deleteButton = document.createElement('button')
                        
                        name.innerText = item.name
                        // sku.textContent = 'Sku: ' + item.sku
                        image.src = item.image_url
                        image.setAttribute("draggable", "true")
                        image.setAttribute("onDragStart", "event.dataTransfer.setData('text/plain', null)")
                        
                        //    desc.innerText = 'Description: ' + item.description
                        category.innerText = 'Price: ' + item.category
                        //    deleteButton.innerText = "Delete"
                        container.setAttribute("id", "cardContainerShop");
                        //adding animation//
                        container.classList.add("animated", "zoomIn", "delay-100ms")
                        name.classList.add("animated", "flipInX", "delay-500ms")
                        image.classList.add("animated", "zoomIn", "delay-1s")
                       category.classList.add("animated", "zoomIn", "delay-500ms")
                       
                       container.append(name, image, category)
                       cardContainer.append(container)
                       
                       var delayForShopCardClassRemoval = 2000; //2 second
                        setTimeout(function() {
                            container.classList.remove("animated", "zoomIn", "delay-100ms")
                            name.classList.remove("animated", "flipInX", "delay-500ms")
                            image.classList.remove("animated", "zoomIn", "delay-1s")
                            category.classList.remove("animated", "zoomIn", "delay-500ms")
                        }, delayForShopCardClassRemoval)
                            
                    } else {
                        console.log("Hello")
                    }
                })
                    
            })
        });
            
    ////contact button makes prompt for credit card info////            
    spanMenuButton[3].addEventListener('click', event => {
                prompt("Please enter CREDIT CARD NUMBER to continue")
            });


        }, delayInMilliseconds1)
        
    }, delayInMilliseconds2)
               
                
                // lineDivThatMoves.classList.remove('vertTranslate');    
            

        }, delayInMilliseconds1) 

    });
////////////END DIN MUF LETTERS ////////////////////////////////////////////////////
var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {
    // flatironlogohead.classList.remove('animated', 'heartBeat', 'delay-1s')
}, false);

document.addEventListener("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
    let theWholeCard = event.target.parentNode
    theWholeCard.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
    // reset the transparency
    event.target.style.opacity = "";
    event.target.parentNode.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
    
    
}, false);

document.addEventListener("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    // if (event.target.className == "dropzone") {
    //     console.log(event.target);
    // } 
    
}, false);

document.addEventListener("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
    //   if (event.target.className == "dropzone") {
        //     event.target.style.background = "";
        //   } else if (event.target.id == 'bigDropZone') {
            //     event.target.style.background = "";
            //   }
}, false);
        
    document.addEventListener("drop", function(event) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged elem to the selected drop target
        if (event.target.id == "shoppingCartLogo") {
                
        console.log("dropped 1 item")
        //removes the card and everything in it
        let ccard = dragged.parentNode
        ccard.classList.add("animated", "zoomOutUp")
                
        var delayInMilliseconds1 = 1000; //1 second
        setTimeout(function() {
        //your code to be executed after 1 second
         ccard.remove();
        }, delayInMilliseconds1);

        console.log(dragged)

        dragged.parentNode.removeChild( dragged );

        //class added that triggers the animation on a delay
            event.target.classList.add('animated', 'rubberBand');

            var delayInMilliseconds = 1000; //1 second

        setTimeout(function() {
            //code to be executed after 1 second
            event.target.classList.remove('animated', 'rubberBand');
        }, delayInMilliseconds);   
    };

}, false);