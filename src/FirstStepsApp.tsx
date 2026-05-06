import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemCart {
    productName: string;
    quantity: number;
}

const itemsCart: ItemCart[] = [
    { productName: 'Nintendo Switch', quantity: 1 },
    { productName: 'PlayStation 5', quantity: 2 },
    { productName: 'Xbox Series X', quantity: 1 },
];

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de Compras</h1> 
            <ul>
                {itemsCart.map(({productName, quantity}) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))}
            </ul>
        </>
    )
}