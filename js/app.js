/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//call out for all 'section'
const sections = document.querySelectorAll (section)

//call for the id #nav_bar from the ul list to be used as a text for the link
const list = getElementById('navbar__list');
//create a document fragment to store in it the all added elements (li,a,textNode)
const fragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

section.forEach(section => {
    const sectionId = section.getAttribute("id")
    const sectionTitle = section.getAttribute("data-nav");


const listItem = document.createElement("li")
const listLink = document.createElement("a")


//add a,title,classattribute for links
listLink.setAttribute (href, "#" + sectionId )
listLink.textContent=sectionTitle;
listLink.classList.add("menu__link");

  
  //add smooth scroll to links
  listLink.addEventListener("Click" , evt => {
    evt.preventDefault();
    section.scrollIntoView({behavior:"smooth" })
})
listItem.appendChild(listLink);
fragment.appendChild(listItem);
}
);
list.appendChild(fragment)
 

// Add class 'active' to section when near top of viewport

const callBack =(entries) =>{
    let section = entries[0]
    section.classList.remove("your-active-class");
    if(section.isIntersecting) {
        section.classList.add("your-active-class");
    }
    else{
        section.classList.remove("your-active-class");
}
}





// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

const observer = new IntersectionObserver(callBack,options);
window.addEventListener("scroll"),evt => {
    sections.forEach ( section => {
        observer.observe(section);
    })
}


// Set sections as active
Window.addEventListener("scroll", evt => {
    sections.forEach (section => {
 const sectionTop = section.getBoundingClientRect ();
 section.classList.remove("your-active-class")
 
 if(sectionTop ==0 && sectionTop < 300) {
    section.classList.add("your-active-class")
    links.forEach( link => {
        if ( link.textContent=== section.dataset.nav ) {
            link.classList.add("active-link") }
            else { link.classList.remove("active-link")}
        })}
        else { section.classList.remove("your-active-class") }
    })
})





