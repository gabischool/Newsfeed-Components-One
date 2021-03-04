// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
  ];


function menuMaker(menuitem){

   const menu = document.createElement("div");
   const ul = document.createElement("ul");
  menu.appendChild(ul); 


  const Student = document.createElement("li");
  const Faculty = document.createElement("li");
  const News = document.createElement("li");
  const TechTrends = document.createElement("li");
  const Music = document.createElement("li");
  const LogOut = document.createElement("li");

  
  ul.appendChild(Student);
  ul.appendChild(Faculty);
  ul.appendChild(News);
  ul.appendChild(TechTrends);
  ul.appendChild(Music);
  ul.appendChild(LogOut);


  Student.textContent=menuitem[0];
  Faculty.textContent=menuitem[1];
  News.textContent=menuitem[2];
  TechTrends.textContent=menuitem[3];
  Music.textContent=menuitem[4];
  LogOut.textContent=menuitem[5];





const buttonToggle = document.querySelector(".menu-button");

buttonToggle.addEventListener("click", ()=>{
  menu.classList.toggle("menu--open")
});

menu.classList.add("menu");

return menu;


}


const header = document.querySelector(".header");

header.appendChild(menuMaker(menuItems));









  
  /* 
    Step 1: Write a component called 'menuMaker' to create a menu like the markup below:
  
    <div class="menu">
      <ul>
        {each menu item as an <li>}
      </ul>
    </div>
  
    The 'menuMaker' takes an array of menu items as its only argument.
  
    Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
    Add those items to the <ul>
  
    Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
  
    Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
  
    Step 5: Don't forget to return your div.menu.
  
    Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
  */
  