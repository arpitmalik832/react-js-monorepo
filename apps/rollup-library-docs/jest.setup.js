/**
 * @file Jest setup file for the documentation site.
 */
/**
 * Mock URL.createObjectURL to return the image directly.
 * @param {string} img - The image URL to be returned.
 * @returns {string} The image URL.
 * @example
 * window.URL.createObjectURL = img => img;
 */
window.URL.createObjectURL = img => img;
