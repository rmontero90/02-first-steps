import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ItemCounter } from './ItemCounter'

describe('ItemCounter', () => {
    
    test('should render with default values', () => {
    

        render(<ItemCounter />);

        // screen.debug();

        expect(screen.getByText('No name')).toBeDefined();

    });

    test('should render with custom quantity', () => {
        
        const name = 'Control de Nintendo';
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />);

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(quantity)).toBeDefined();

    })

    test('should increase the count when the add button is clicked', () => {
        render(<ItemCounter name="Test Item" quantity={1} />);

        const [buttonAdd] = screen.getAllByRole('button');
        fireEvent.click(buttonAdd);

        expect(screen.getByText('2')).toBeDefined();
    })

    test('should decrease the count when the remove button is clicked', () => {
        render(<ItemCounter name="Test Item" quantity={2} />);

        const [, buttonRemove] = screen.getAllByRole('button');
        fireEvent.click(buttonRemove);
        
        expect(screen.getByText('1')).toBeDefined();
    })

    test('should not decrease the count below 1', () => {
        render(<ItemCounter name="Test Item" quantity={1} />);

        const [, buttonRemove] = screen.getAllByRole('button');
        fireEvent.click(buttonRemove);
        
        expect(screen.getByText('1')).toBeDefined();
    })

    test('should change the text color to red when the count is 1', () => {
        
        const name = 'Test Item';
        render(<ItemCounter name={name} quantity={1} />);

        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('red');
    })

    test('should change the text color to white when the count is greater than 1', () => {
        
        const name = 'Test Item';
        render(<ItemCounter name={name} quantity={1} />);

        fireEvent.click(screen.getByText('+'));
        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('white');
    })
})