# Shopping cart with Node.js

JavaScript modularization exercise that demonstrates shopping cart operations in the terminal.

## Features

- Creates items with prices and quantities.
- Adds and removes cart items.
- Displays the cart and calculates its total.

## Technologies

Node.js and JavaScript ES modules.

## Run locally

```bash
git clone https://github.com/chruscinskiDiego/node-shopping-cart.git
cd node-shopping-cart
node src/index.js
```

## Structure

- `src/services/item.js`: item creation.
- `src/services/cart.js`: cart operations.
- `src/index.js`: demonstration scenario.

## Scope and limitations

Data stays in memory and sample items are defined in the source. There is no checkout, payment integration or persistence. The npm test script is a placeholder.
