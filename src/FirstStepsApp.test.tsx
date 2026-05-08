import { expect, describe, test, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FirstStepsApp } from './FirstStepsApp';


const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid="ItemCounter" />;
})

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}))

describe('FirstStepsApp', () => {

    afterEach(() => {
        vi.clearAllMocks();
    })

    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
    });

    test('should render the correct number of ItemCounter components', () => {
        const { getAllByTestId } = render(<FirstStepsApp />);
        const itemCounterElements = getAllByTestId('ItemCounter');
        expect(itemCounterElements.length).toBe(4);
    });

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);
        expect(mockItemCounter).toHaveBeenCalledTimes(4);
        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: 'Nintendo Switch', 
            quantity: 1 
        });
    })
})