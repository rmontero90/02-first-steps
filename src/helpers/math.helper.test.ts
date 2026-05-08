import { test, expect, describe } from 'vitest'
import { add, divide } from './math.helper'


describe('math functions', () => {
    
    test('should be add positive numbers', () => {
        console.log('This is a test');
        
        const result = add(2, 3);
        console.log({ result });
        
        expect(result).toBe(5);
    })

    test('should be add negative numbers', () => {
        const result = add(-2, -3);
        console.log({ result });
        
        expect(result).toBe(-5);
    })

    test('should be add a positive and a negative number', () => {
        const result = add(2, -3);
        console.log({ result });
        
        expect(result).toBe(-1);
    })

    test('should be divide two positive numbers', () => {
        const result = divide(10, 5);
        console.log({ result });
        
        expect(result).toBe(2);
    })

})



