import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

const navTabs = document.querySelectorAll('.nav > p');
const main = document.querySelector('main');
console.log(main);

let navArr = Array.from(navTabs);

navArr.forEach(element => {
    element.addEventListener('click', (event) => {
        console.log(event.target);
        if (event.target.textContent === 'Home') {
            document.body.removeChild(document.querySelector('main'));
            createHome();
        } else if (event.target.textContent === 'Menu') {
            document.body.removeChild(document.querySelector('main'));
            createMenu();
        } else if (event.target.textContent === 'Contact') {
            document.body.removeChild(document.querySelector('main'));
            createContact();
        }
    });
});





// createContact();

// createMenu();

// createHome();

