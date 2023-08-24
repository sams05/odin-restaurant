import cafeHero from './cafe-hero.jpeg';

export default function createHomePage() {
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
    return main;
}