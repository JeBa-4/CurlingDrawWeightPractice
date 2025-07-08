/**
 * Unit tests for the Shot Accuracy Calculator
 * 
 * This file demonstrates the Test-Driven Development approach
 * by defining tests for the accuracy calculation algorithm
 * before implementing the actual function.
 */

// Import the module that will be implemented
const { calculateShotAccuracy } = require('./ShotAccuracyCalculator');

describe('Shot Accuracy Calculator', () => {
  
  describe('calculateShotAccuracy', () => {
    
    test('should return 100% for perfect shots (0 distance, 0 direction)', () => {
      const result = calculateShotAccuracy(0, 0);
      expect(result).toBe(100);
    });
    
    test('should decrease accuracy as distance increases', () => {
      // Distance increases, direction stays at 0
      const result1 = calculateShotAccuracy(50, 0);
      const result2 = calculateShotAccuracy(100, 0);
      const result3 = calculateShotAccuracy(200, 0);
      
      // Accuracy should decrease as distance increases
      expect(result1).toBeGreaterThan(result2);
      expect(result2).toBeGreaterThan(result3);
      
      // All accuracies should be between 0-100
      expect(result1).toBeLessThan(100);
      expect(result1).toBeGreaterThan(0);
      expect(result2).toBeLessThan(100);
      expect(result2).toBeGreaterThan(0);
      expect(result3).toBeLessThan(100);
      expect(result3).toBeGreaterThan(0);
    });
    
    test('should decrease accuracy as direction angle increases', () => {
      // Direction increases, distance stays at 0
      const result1 = calculateShotAccuracy(0, 15);
      const result2 = calculateShotAccuracy(0, 45);
      const result3 = calculateShotAccuracy(0, 90);
      
      // Accuracy should decrease as direction angle increases
      expect(result1).toBeGreaterThan(result2);
      expect(result2).toBeGreaterThan(result3);
      
      // All accuracies should be between 0-100
      expect(result1).toBeLessThan(100);
      expect(result1).toBeGreaterThan(0);
      expect(result2).toBeLessThan(100);
      expect(result2).toBeGreaterThan(0);
      expect(result3).toBeLessThan(100);
      expect(result3).toBeGreaterThan(0);
    });
    
    test('should consider both distance and direction in accuracy calculation', () => {
      // Perfect direction but some distance
      const accuracyDistance = calculateShotAccuracy(100, 0);
      
      // Perfect distance but some direction offset
      const accuracyDirection = calculateShotAccuracy(0, 45);
      
      // Both distance and direction offset
      const accuracyCombined = calculateShotAccuracy(100, 45);
      
      // Individual offsets should have higher accuracy than combined offset
      expect(accuracyDistance).toBeGreaterThan(accuracyCombined);
      expect(accuracyDirection).toBeGreaterThan(accuracyCombined);
    });
    
    test('should handle extreme values appropriately', () => {
      // Maximum possible distance and direction
      const result = calculateShotAccuracy(500, 180);
      
      // Should still return a value between 0-100
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(100);
      
      // Very poor shot should have very low accuracy
      expect(result).toBeLessThan(20);
    });
    
    test('should handle common real-world scenarios', () => {
      // Slightly off shots (common in good play)
      const slightlyOff = calculateShotAccuracy(20, 10);
      expect(slightlyOff).toBeGreaterThanOrEqual(80);
      
      // Moderately off shots
      const moderatelyOff = calculateShotAccuracy(100, 45);
      expect(moderatelyOff).toBeGreaterThanOrEqual(40);
      expect(moderatelyOff).toBeLessThanOrEqual(80);
      
      // Way off shots
      const wayOff = calculateShotAccuracy(300, 90);
      expect(wayOff).toBeLessThanOrEqual(40);
    });
    
    test('should handle normalized direction correctly', () => {
      // Direction angles that wrap around (e.g., 350Â° is equivalent to 10Â° off)
      const result1 = calculateShotAccuracy(0, 350);
      const result2 = calculateShotAccuracy(0, 10);
      
      // Should give the same accuracy for equivalent angles
      expect(result1).toBeCloseTo(result2);
    });
    
    test('should validate input parameters', () => {
      // Invalid distance (negative)
      expect(() => calculateShotAccuracy(-10, 0)).toThrow();
      
      // Invalid direction (outside 0-359 range)
      expect(() => calculateShotAccuracy(0, 400)).toThrow();
      expect(() => calculateShotAccuracy(0, -10)).toThrow();
      
      // Non-numeric inputs
      expect(() => calculateShotAccuracy('abc', 0)).toThrow();
      expect(() => calculateShotAccuracy(0, 'abc')).toThrow();
    });
    
    test('should return rounded accuracy value', () => {
      // Check that results are rounded appropriately (1 decimal place)
      const result = calculateShotAccuracy(123, 45);
      
      // Result should be a number
      expect(typeof result).toBe('number');
      
      // Check that it has at most 1 decimal place
      const decimalPlaces = result.toString().split('.')[1]?.length || 0;
      expect(decimalPlaces).toBeLessThanOrEqual(1);
    });
  });
});