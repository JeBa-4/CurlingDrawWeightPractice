/**
 * Shot Accuracy Calculator
 * 
 * This module provides functionality to calculate the accuracy of curling shots
 * based on the distance from target and the direction angle.
 */

/**
 * Configuration for accuracy calculation
 */
const accuracyConfig = {
  maxDistance: 500, // Maximum distance in cm (used for normalization)
  distanceWeight: 0.7, // 70% of accuracy comes from distance
  directionWeight: 0.3, // 30% of accuracy comes from direction
  maxDirection: 180, // Maximum direction angle (used for normalization)
  roundingPrecision: 1 // How many decimal places to round to
};

/**
 * Validates input parameters for accuracy calculation
 * 
 * @param {number} distanceCm - Distance from target in centimeters
 * @param {number} directionDegrees - Direction angle in degrees (0-359)
 * @throws {Error} If inputs are invalid
 */
function validateInputs(distanceCm, directionDegrees) {
  // Check that inputs are numbers
  if (typeof distanceCm !== 'number' || isNaN(distanceCm)) {
    throw new Error('Distance must be a number');
  }
  
  if (typeof directionDegrees !== 'number' || isNaN(directionDegrees)) {
    throw new Error('Direction must be a number');
  }
  
  // Check that inputs are within valid ranges
  if (distanceCm < 0) {
    throw new Error('Distance cannot be negative');
  }
  
  if (directionDegrees < 0 || directionDegrees >= 360) {
    throw new Error('Direction must be between 0 and 359 degrees');
  }
}

/**
 * Normalizes a direction angle to be in the range 0-180
 * Since a shot that's 350 degrees off is equivalent to one that's 10 degrees off
 * 
 * @param {number} directionDegrees - Direction angle in degrees (0-359)
 * @returns {number} Normalized direction angle (0-180)
 */
function normalizeDirection(directionDegrees) {
  // For angles over 180, measure the smaller angle
  if (directionDegrees > 180) {
    return 360 - directionDegrees;
  }
  return directionDegrees;
}

/**
 * Calculates shot accuracy based on distance from target and direction angle
 * 
 * @param {number} distanceCm - Distance from target in centimeters
 * @param {number} directionDegrees - Direction angle in degrees (0-359)
 * @returns {number} Accuracy percentage (0-100)
 */
function calculateShotAccuracy(distanceCm, directionDegrees) {
  // Validate inputs
  validateInputs(distanceCm, directionDegrees);
  
  // Special case for perfect shot
  if (distanceCm === 0 && directionDegrees === 0) {
    return 100;
  }
  
  // Normalize direction to 0-180 scale
  const normalizedDirection = normalizeDirection(directionDegrees);
  
  // Calculate distance component of accuracy (inversely proportional to distance)
  // 0 distance = 100% accuracy, maxDistance = 0% accuracy
  const distancePercentage = Math.max(0, 100 - (distanceCm / accuracyConfig.maxDistance) * 100);
  
  // Calculate direction component of accuracy (inversely proportional to angle)
  // 0 degrees = 100% accuracy, maxDirection = 0% accuracy
  const directionPercentage = Math.max(0, 100 - (normalizedDirection / accuracyConfig.maxDirection) * 100);
  
  // Calculate weighted average of distance and direction components
  const accuracy = 
    (accuracyConfig.distanceWeight * distancePercentage) + 
    (accuracyConfig.directionWeight * directionPercentage);
  
  // Round to specified precision
  const factor = Math.pow(10, accuracyConfig.roundingPrecision);
  return Math.round(accuracy * factor) / factor;
}

/**
 * Export the accuracy calculation function and configuration
 */
module.exports = {
  calculateShotAccuracy,
  accuracyConfig
};