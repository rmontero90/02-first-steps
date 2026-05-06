import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from './MyAwesomeApp';


describe('MyAwesomeApp', () => {
    

    test('should render the correct name and favorite games', () => {
        const { container } = render(<MyAwesomeApp />);
        screen.debug();
        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toContain('Rafael Montero');
    })

    test('should match the snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    })
})