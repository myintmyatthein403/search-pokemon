import { isGrassType, isFireType, isWaterType } from '@/utils/helpers'; // Import your helper functions
import { mockBulbasaur, mockCharmander, mockSquirtle } from '@/utils/mockData'; // Import your mock data

describe('Pokemon Types', () => {
    test('Bulbasaur should be Grass type', () => {
        expect(isGrassType(mockBulbasaur)).toBe(true);
        expect(isFireType(mockBulbasaur)).toBe(false);
        expect(isWaterType(mockBulbasaur)).toBe(false);
    });

    test('Charmander should be Fire type', () => {
        expect(isGrassType(mockCharmander)).toBe(false);
        expect(isFireType(mockCharmander)).toBe(true);
        expect(isWaterType(mockCharmander)).toBe(false);
    });

    test('Squirtle should be Water type', () => {
        expect(isGrassType(mockSquirtle)).toBe(false);
        expect(isFireType(mockSquirtle)).toBe(false);
        expect(isWaterType(mockSquirtle)).toBe(true);
    });
});
