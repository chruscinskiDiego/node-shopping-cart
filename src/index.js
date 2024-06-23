import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishlist = [];

console.log("💻 Bem-vindo ao carrinho de compras online! 🛜");

const item1 = await createItem("Porshe Panamera", 31.52, 2);
const item2 = await createItem("Ferrari Spider", 52.12, 2);
const item3 = await createItem("Mickey Mouse", 10.00, 2);
const item4 = await createItem("Minnie Mouse", 32.15, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);

await cartService.displayCart(myCart);

await cartService.removeItem(myCart, item1);

await cartService.calculateTotal(myCart);

