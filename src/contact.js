
/**
 * Create contact field for the contact page
 * 
 * @param {String} field 
 * @param {String} value 
 * @returns HTMLElement: the contact field
 */
function createContactField(field, value) {
    const contactField = document.createElement('div');
    contactField.classList.add('contact-field');

    const fieldPara = document.createElement('p');
    fieldPara.classList.add('field');
    fieldPara.textContent = `${field}:`;
    const valuePara = document.createElement('p');
    valuePara.classList.add('value');
    valuePara.textContent = value;

    contactField.append(fieldPara, valuePara);
    return contactField;
}

export default function createContactPage() {
    const main = document.createElement('div');
    main.classList.add('main', 'main-contact');

    // Set up main - header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    header.append(h1);

    // Set up main - contact section
    const section = document.createElement('div');
    section.classList.add('section');
    // Address
    const address = createContactField('Address', '123 Enchantment Lane, Fairytaleville');
    // Phone
    const phone = createContactField('Phone', '(555) 123-4567');
    // Email
    const email = createContactField('Email', 'reservations@enchantedbitescafe.com');
    section.append(address, phone, email);

    main.append(header, section);
    return main;
}

