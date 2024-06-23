//quais acoes meu carrinho pode fazer?

async function addItem(userCart, item){
    userCart.push(item);
};

async function calculateTotal(userCart){
    //total = acumulador
    //item = item atual
    //para cada item que o reduce percorrer sera extraido o subtotal
    // 0 = valor inicial
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

    console.log(`\n💰 Total: ${result}`);
}

async function deleteItem(userCart, name){
    //se nao encontrar retorna -1
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

async function displayCart(userCart){
    console.log(`\n📢 Itens do carrinho:`);
    userCart.forEach((item, index) => {
        console.log(`\n🛒 Produto ${index + 1} | ${item.name} - R$ ${item.price} | ${item.quantity} unidade(s)\n💵 Subtotal: R$ ${item.subtotal()} `);
    });
}

async function removeItem(userCart , item){

    const indexFound = userCart.findIndex( (i) => i.name === item.name);

    if(indexFound === -1){
        console.log(`\n👎 Item nao encontrado!`);
    }
    
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity === 1){
        deleteItem(userCart, userCart[indexFound].name);
        return;
    }
}

async function removeItemByIndex(userCart, index){

    const deleteIndex = index - 1;

    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }
}



export {
    addItem,
    calculateTotal,
    removeItem,
    deleteItem,
    displayCart,
    removeItemByIndex,
}