import { useState } from "react";
import styles from './ItemCounter.module.css';


interface Props {
    name: string;
    quantity: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
    
    const [count, setCount] = useState(quantity);

    const handleAdd = () => setCount(count + 1);
    const handleRemove = () => {
        if (count === 1) return;
        
        setCount(count - 1)
    };
    
    return (
        <section className={styles.itemRow}>
            <span 
                className={styles['item-text']}
                style={{ color: count === 1 ? 'red' : 'white' }}
            >
                {name}
            </span>
            <div>
                <button onClick={handleRemove}>-</button>
                <span className={styles.itemCount}>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
        </section>
    )
} 
