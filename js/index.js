// Your code goes here
/* 
--Listeners for:
  * `mouseover`  - X
  * `keydown`  - X
  * `wheel`  - don't have mouse 
  * `load` - X
  * `focus` - X
  * `resize` - X
  * `scroll` - X
  * `select` - can't initiate it on page
  * `dblclick` - X
  * `drag / drop`
  
  * [X] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
  * [X] Stop the navigation items from refreshing the page by using `preventDefault()`
  
*/ 

//Header Section 
const navButton = document.querySelectorAll('.nav-link');

    navButton.forEach((item) => {
        item.addEventListener('mouseover', (event) => {
            console.log('mouseover test');
            item.style.color = 'red';
            // event.stopPropagation;
            event.preventDefault();
                item.addEventListener('click', (event) => {
                    console.log('nested event', event.currentTarget);
                });
        });
    });

    navButton.forEach((item) => {
        item.addEventListener('focus', (event) => {
            console.log('focus test');
            funBusTitle.textContent = "GO GO GO GO GO GO GO GO GO GO GO GO GO GO";
        });
    });

const logo = document.querySelector('.logo-heading');

    window.addEventListener('load', (event) => {
        console.log('load test');
        logo.style.color = 'teal';
    });

    /* Events fired on the drag target */
    document.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("Text", event.target.id)
    });

    document.addEventListener("dragover", (event) => {
        event.preventDefault();
      });
      
    document.addEventListener("drop", (event) => {
        event.preventDefault();
        if ( event.target.className == "target" ) {
            let data = event.dataTransfer.getData("Text");
            event.target.appendChild(document.getElementById(data));
        }
      });


//Body 
const allPar = document.querySelectorAll('body p');
    
     allPar.forEach((item) => {
        document.addEventListener('keydown', (event) => {
             if(event.key === 'p'){
                console.log('p working');
                item.style.color = 'yellow';
             }
             else console.log('not p');
         });
     });

//Fun Bus Section
const funBusTitle = document.querySelector('.intro h2');

    document.addEventListener('keydown', (event) => {
        if(event.key === 'f'){
            console.log('f working');
            funBusTitle.style.fontSize = '10em';
        }
        else console.log('not f');
    });

    window.addEventListener('resize', (event) => {
        console.log('resize test');
        funBusTitle.style.color = 'red';
    });

//Content Section
const funImage = document.querySelectorAll('.img-content img');

//Content Destination Section
const pickDestinationTitle = document.querySelector('.content-destination h2');

    document.addEventListener('scroll', (event) => {
        pickDestinationTitle.textContent = "Pick Your Destination!!!!!!!";
    });

const boatImage = document.querySelector('content-destination img');

    
const destinationButton = document.querySelectorAll('.btn');

    destinationButton.forEach((item) => {
        document.addEventListener('dblclick', (event) => {
            console.log('dblclick test');
            item.style.color = 'yellow';
        });
    });

const destinationTitles = document.querySelectorAll('.destination h4');

    destinationTitles.forEach((item) => {
        item.addEventListener('click', (event) => {
            console.log('select test');
            item.style.color = 'red';
        });
    });
