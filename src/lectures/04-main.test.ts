import {isPosition} from './04-main'

describe('isPosition()', () => {
    it('should return true when n > 0', () => {
        expect(isPosition(1)).toBe(true);
        expect(isPosition(2)).toBe(true);
    });
    it('should return false when n = 0', () => {
        expect(isPosition(0)).toBe(false);
    });
    it('should return false when n < 0', () => {
        expect(isPosition(-1)).toBe(false);
        expect(isPosition(-2)).toBe(false);
    });
    
});