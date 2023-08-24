import createHomePage from './home';

export default function loadPage() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.classList.add('container');
    // Set up tabs
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const homeTab = document.createElement('li');
    const homeTabBtn = document.createElement('button');
    homeTabBtn.setAttribute('type', 'button');
    homeTabBtn.setAttribute('id', 'nav-home');
    homeTabBtn.classList.add('nav-btn');
    homeTabBtn.textContent = 'Home';
    homeTab.append(homeTabBtn);
    const menuTab = document.createElement('li');
    const menuTabBtn = document.createElement('button');
    menuTabBtn.setAttribute('type', 'button');
    menuTabBtn.setAttribute('id', 'nav-menu');
    menuTabBtn.classList.add('nav-btn');
    menuTabBtn.textContent = 'Menu';
    menuTab.append(menuTabBtn);
    const contactTab = document.createElement('li');
    const contactTabBtn = document.createElement('button');
    contactTabBtn.setAttribute('type', 'button');
    contactTabBtn.setAttribute('id', 'nav-contact');
    contactTabBtn.classList.add('nav-btn');
    contactTabBtn.textContent = 'Contact';
    contactTab.append(contactTabBtn);
    ul.append(homeTab, menuTab, contactTab);
    nav.append(ul);
    // Set up main
    const main = createHomePage();
    // Set up footer
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const bgImgAuth = document.createElement('a');
    bgImgAuth.setAttribute('href', 'https://unsplash.com/@ymwang?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
    bgImgAuth.textContent = 'Yunming Wang';
    const bgImgLink = document.createElement('a');
    bgImgLink.setAttribute('href', 'https://unsplash.com/photos/YrZzP9VVN1k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
    bgImgLink.textContent = 'Unsplash';
    footer.append('Background photo by ', bgImgAuth, ' on ', bgImgLink);
    container.append(nav, main, footer);
    content.append(container);
}
