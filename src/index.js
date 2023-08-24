import loadPage from './page-load';
import './style.css';
import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';

(function() {
    function switchTab(e) {
        const main = document.querySelector('.main');
        const id = e.target.id;
        let newMain;
        switch(id) {
            case 'nav-home':
                newMain = createHomePage();
                break;
            case 'nav-menu':
                newMain = createMenuPage();
                break;
            case 'nav-contact':
                newMain = createContactPage();
                break;
            default:
                throw new Error('Invalid tab id');
        }
        main.replaceWith(newMain);
    }
    
    loadPage();
    const tabs = document.querySelectorAll('.nav-btn');
    for(let tab of tabs) {
        tab.addEventListener('click', switchTab);
    }
})();
