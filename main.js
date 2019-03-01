
// making the links to be dynamically changing and following the hover over by changing the bg

const triggers=document.querySelectorAll('a');         // Select all the a tags
const highlight = document.createElement('span');   // crate in line span tag dynamically 
highlight.classList.add('highlight');   //add a class of highlight to the span tag created above
document.body.append(highlight); //and put that span tag with class highlight into the DOM

//this function will trigger the event when someone enters the link a tag
function highlightLink(){
    //here we want to figure out the element locations, and dimensions like height and width etc. 
//keyword THIS here is equal to the thing which is triggered which is each of the links
    const linkCords = this.getBoundingClientRect(); //getBoundingClientrect method gives us all information about the element on the page;
    console.log(linkCords)
//we create our own coordinates since when we scroll down hightlight will not follow
const coords = {
    width:linkCords.width,
    height:linkCords.height,
    top:linkCords.top + window.scrollY,   //follow how much we scroll vertically
    left:linkCords.left + window.scrollX     //follow how much we scroll horizontally
}

//making styles of the highlight being dynamic and equal to dimensions of the link
highlight.style.width=`${coords.width}px`; 
highlight.style.height=`${coords.height}px`; 
highlight.style.transform=`translate(${coords.left}px, ${coords.top}px)`; 

}

//Here we add the event listener mouse enter on each of the triggers
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
