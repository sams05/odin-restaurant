import cafeHero from './cafe-hero.jpeg';

export default function loadPage() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.classList.add('container');
    // Set up tabs
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const homeTab = document.createElement('li');
    homeTab.textContent = 'Home';
    const menuTab = document.createElement('li');
    menuTab.textContent = 'Menu';
    const contactTab = document.createElement('li');
    contactTab.textContent = 'Contact';
    ul.append(homeTab, menuTab, contactTab);
    nav.append(ul);
    // Set up main
    const main = document.createElement('div');
    main.classList.add('main');
    // Set up main - hero section
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const h1 = document.createElement('h1');
    h1.textContent = 'Enchanted Bites Café';
    const heroImg = document.createElement('img');
    heroImg.setAttribute('src', cafeHero);
    heroImg.setAttribute('alt', 'café interior');
    const heroImgCap = document.createElement('div');
    heroImgCap.classList.add('caption');
    const heroImgCapAuth = document.createElement('a');
    heroImgCapAuth.setAttribute('href', 'https://unsplash.com/@supa_95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
    heroImgCapAuth.textContent = 'Sebastian Schuppik';
    const heroImgCapLink = document.createElement('a');
    heroImgCapLink.setAttribute('href', 'https://unsplash.com/photos/H7xTpvBjJS4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
    heroImgCapLink.textContent = 'Unsplash';
    heroImgCap.append('Photo by ', heroImgCapAuth, ' on ', heroImgCapLink);
    hero.append(h1, heroImg, heroImgCap);
    // Set up main - description section
    const descSection = document.createElement('div');
    descSection.classList.add('section');
    descSection.textContent = 'Enchanted Bites Café is a whimsical and magical dining destination that combines gourmet cuisine with an enchanting atmosphere. It\'s a place where fairy tales come to life, and every dish is crafted with a touch of magic.';
    // Set up main - testimonial section
    const testSection = document.createElement('div');
    testSection.classList.add('section');
    const blockquote = document.createElement('blockquote');
    const blockquotePara = document.createElement('p');
    blockquotePara.textContent = 'Enchanted Bites Café is a hidden gem that truly transported me to a fairy tale realm. The moment I walked in, I felt like I was in a storybook world. The decor is spellbinding, and the food is nothing short of magical. The Pixie Pasta fluttered on my taste buds, and the Unicorn Elixir left me feeling rejuvenated. If you\'re looking for an unforgettable dining experience, Enchanted Bites is the place to be!';
    const blockquoteFooter = document.createElement('footer');
    blockquoteFooter.textContent = '-Emily S.';
    blockquote.append(blockquotePara, blockquoteFooter);
    testSection.append(blockquote);
    main.append(hero, descSection, testSection);
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
