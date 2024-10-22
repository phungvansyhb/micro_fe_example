import { faker } from '@faker-js/faker';


const num = faker.number.int()
const productDiv = `<div>Cart has ${num} items</div>`;

document.querySelector('#cartTotal').innerHTML = productDiv;
