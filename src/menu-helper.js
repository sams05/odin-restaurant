/**
 * Helper functions to create common elements in the menu page
 */

/**
 * Create section header for different section of the menu 
 * e.g. for main course, drinks, desserts, etc.
 * 
 * @param {String} name : Name of section to be used as the section heading
 * @returns The section header
 */
function createSectionHeader(name) {
    const div = document.createElement('div');
    div.classList.add('section', 'header');
    const h2 = document.createElement('h2');
    h2.textContent = name;
    div.append(h2);
    return div;
}

/**
 * 
 * @param {String} name 
 * @param {String} price 
 * @param {Object} image object with src and alt properties
 * @param {Object} caption object with the photo's source link and photographer name 
 * @param {String} desc description of the menu item
 */
function createMenuItem(name, price, {src, alt}, {photoLink, photographer}, desc) {
    const section = document.createElement('div');
    section.classList.add('section');

    // Set up item header
    const itemHeader = document.createElement('div');
    itemHeader.classList.add('item-header');
    const heading = document.createElement('h3');
    heading.textContent = name;
    const pricePara = document.createElement('p');
    pricePara.textContent = price;
    itemHeader.append(heading, pricePara);

    // Set up image and caption
    const itemImage = document.createElement('div');
    itemImage.classList.add('item-image');
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    const caption = document.createElement('div');
    caption.classList.add('caption');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', photoLink);
    anchor.textContent = photographer;
    caption.append('Photo by ', anchor);
    itemImage.append(img, caption);

    // Set up description
    const descPara = document.createElement('p');
    descPara.textContent = desc;

    section.append(itemHeader, itemImage, descPara);
    return section;
}

export { createSectionHeader, createMenuItem };