
import * as menuHelper from './menu-helper';
import burgerSrc from './menu-images/burger.jpeg';
import drinkSrc from './menu-images/drink.jpeg';
import fondueSrc from './menu-images/fondue.jpeg';
import pastaSrc from './menu-images/pasta.jpeg';
import saladSrc from './menu-images/salad.jpeg';
import soupSrc from './menu-images/soup.jpeg';
import sundaeSrc from './menu-images/sundae.jpeg';

export default function createMenuPage() {
    const main = document.createElement('div');
    main.classList.add('main');
    // Set up main - header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    header.append(h1);

    // Set up main - main course section
    const mainCourse = menuHelper.createSectionHeader('Main Course');
    // Pixie Pasta
    const pastaImage = {
        src: pastaSrc,
        alt: 'pasta'
    };
    const pastaCaption = {
        photoLink: 'https://www.pexels.com/photo/pasta-with-shrimp-on-white-ceramic-plate-4518839/',
        photographer: 'Polina Tankilevitch'
    };
    const pastaDesc = 'Delicate strands of rainbow-colored pasta served with a sauce made from the laughter of fairies.'
    const pastaSection = menuHelper.createMenuItem('Pixie Pasta', '$10.00', pastaImage, pastaCaption, pastaDesc);
    // Enchanted Forest Salad
    const saladImage = {
        src: saladSrc,
        alt: 'salad'
    };
    const saladCaption = {
        photoLink: "https://www.pexels.com/photo/cooked-vegetables-on-white-ceramic-plate-707251/",
        photographer: 'mustafa türkeri'
    };
    const saladDesc = 'A mix of crisp greens, edible flowers, and enchanted berries, served with a sparkling dewdrop dressing.';
    const saladSection = menuHelper.createMenuItem('Enchanted Forest Salad', '$8.00', saladImage, saladCaption, saladDesc);
    // Merlin's Magical Burger
    const burgerImage = {
        src: burgerSrc,
        alt: 'burger'
    };
    const burgerCaption = {
        photoLink: 'https://www.pexels.com/photo/ham-burger-with-vegetables-1639557/',
        photographer: 'Valeria Boltneva'
    };
    const burgerDesc = 'A mouthwatering blend of mythical meats and enchanted cheeses, served on a spellbound bun.';
    const burgerSection = menuHelper.createMenuItem('Merlin\'s Magical Burger', '$8.00', burgerImage, burgerCaption, burgerDesc);
    // Fairy Godmother's Fondue
    const fondueImage = {
        src: fondueSrc,
        alt: 'fondue'
    };
    const fondueCaption = {
        photoLink: 'https://www.pexels.com/photo/a-close-up-shot-of-a-cheese-fondue-on-the-bread-12664808/',
        photographer: 'Gonzalo Acuña'
    };
    const fondueDesc = 'A delightful sharing experience with a pot of bubbling fondue, accompanied by enchanted dippers.';
    const fondueSection = menuHelper.createMenuItem('Fairy Godmother\'s Fondue', '$6.50', fondueImage, fondueCaption, fondueDesc);

    // Set up main - soup section
    const soup = menuHelper.createSectionHeader('Soup');
    // Dragon's Flame Soup
    const soupImage = {
        src: soupSrc,
        alt: 'soup'
    };
    const soupCaption = {
        photoLink: 'https://unsplash.com/photos/5eROVOJW2bA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        photographer: 'Nathan Dumlao'
    };
    const soupDesc = 'A hearty blend of roasted vegetables with a hint of fire-spiced broth, perfect for adventurers.';
    const soupSection = menuHelper.createMenuItem('Dragon\'s Flame Soup', '$5.00', soupImage, soupCaption, soupDesc);

    // Set up main - drinks section
    const drinks = menuHelper.createSectionHeader('Drinks');
    // Unicorn Elixir
    const drinksImage = {
        src: drinkSrc,
        alt: 'drink'
    };
    const drinksCaption = {
        photoLink: 'https://www.pexels.com/photo/a-glass-of-cold-coca-cola-8880727/',
        photographer: 'Ron Lach'
    };
    const drinksDesc = 'A sparkling drink made from crushed gemstones and secret ingredients that promise a touch of enchantment.';
    const drinksSection = menuHelper.createMenuItem('Unicorn Elixir', '$3.00', drinksImage, drinksCaption, drinksDesc);

     // Set up main - desserts section
     const desserts = menuHelper.createSectionHeader('Desserts');
     // Spellbound Sundae
    const sundaeImage = {
        src: sundaeSrc,
        alt: 'sundae'
    };
    const sundaeCaption = {
        photoLink: 'https://www.pexels.com/photo/delicious-dessert-served-in-glass-cup-6025810/',
        photographer: 'Piotr Arnoldes'
    };
    const sundaeDesc = 'A dessert to remember, featuring layers of enchanted ice cream, bewitched toppings, and a sprinkle of stardust.';
    const sundaeSection = menuHelper.createMenuItem('Spellbound Sundae', '$5.00', sundaeImage, sundaeCaption, sundaeDesc);

    main.append(header, mainCourse, pastaSection, saladSection, burgerSection, fondueSection, soup, soupSection, drinks, drinksSection, desserts, sundaeSection);
    return main;
}
