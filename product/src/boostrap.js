import { faker } from '@faker-js/faker';

let productDiv = ``;

for (let i = 0; i < 10; i++) {
	const name = faker.commerce.productName();
	productDiv += `<div>Product : ${name}</div>`;
}
document.querySelector('#productList').innerHTML = productDiv
