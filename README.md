# Carrinho de compras com Node.js

Exercício de modularização em JavaScript que demonstra operações de um carrinho de compras no terminal.

## Funcionalidades

- Criação de itens com preço e quantidade.
- Inclusão e remoção de itens do carrinho.
- Exibição dos itens e cálculo do total.

## Tecnologias

Node.js e JavaScript com módulos ES.

## Executar localmente

```bash
git clone https://github.com/chruscinskiDiego/node-shopping-cart.git
cd node-shopping-cart
node src/index.js
```

## Organização

- `src/services/item.js`: criação dos itens.
- `src/services/cart.js`: operações do carrinho.
- `src/index.js`: cenário de demonstração.

## Escopo e limitações

Os dados ficam em memória e os itens do exemplo são definidos no código. Não há checkout, pagamentos ou persistência. O script npm test é apenas um placeholder.

