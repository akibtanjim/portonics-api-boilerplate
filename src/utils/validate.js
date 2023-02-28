'use strict';

const Validator = require('validatorjs');

/**
 * Register Custom Validation Rules
 */

Validator.registerImplicit(
  'isArray',
  (value) => {
    if (value === undefined) return true;
    return Array.isArray(value) && value.length > 0;
  },
  ':attribute must be an array and not empty'
);

Validator.registerImplicit(
  'isValidLength',
  (value) => {
    if (value === undefined) return true;
    return Array.isArray(value) && value.length <= 5;
  },
  'Only 5 Images Allowed'
);

Validator.registerImplicit(
  'isAlphabetsDotUnderscoreHyphen',
  (value) => /^[A-Za-z? ._-]+$/.test(value),
  'Only alphabets, dot, underscore & hyphen accepted for :attribute'
);

Validator.registerImplicit(
  'isLessThanSellingPriceMax',
  (value, attribute) => {
    if (attribute === undefined || attribute === 'undefined') return true;
    if (value === undefined) return true;
    const max = parseFloat(attribute);
    return max >= value;
  },
  `:attribute must less than sellingPriceMax`
);

Validator.registerImplicit(
  'isGreaterThanSellingPriceMin',
  (value, attribute) => {
    if (attribute === undefined || attribute === 'undefined') return true;
    if (value === undefined) return true;
    const min = parseFloat(attribute);
    return value >= min;
  },
  `:attribute must greater than sellingPriceMin`
);

Validator.registerImplicit(
  'isLessThanActualPriceMax',
  (value, attribute) => {
    if (attribute === undefined || attribute === 'undefined') return true;
    if (value === undefined) return true;
    const max = parseFloat(attribute);
    return max >= value;
  },
  `:attribute must less than actualPriceMax`
);

Validator.registerImplicit(
  'isGreaterThanActualPriceMin',
  (value, attribute) => {
    if (attribute === undefined || attribute === 'undefined') return true;
    if (value === undefined) return true;
    const min = parseFloat(attribute);
    return value >= min;
  },
  `:attribute must greater than actualPriceMin`
);

Validator.registerImplicit(
  'isLessThanWeeklyPriceMax',
  (value, attribute) => {
    if (attribute === undefined || attribute === 'undefined') return true;
    if (value === undefined) return true;
    const max = parseFloat(attribute);
    return max >= value;
  },
  `:attribute must less than weeklyPriceMax`
);

Validator.registerImplicit(
  'isGreaterThanWeeklyPriceMin',
  (value, attribute) => {
    if (attribute === undefined || attribute === 'undefined') return true;
    if (value === undefined) return true;
    const min = parseFloat(attribute);
    return value >= min;
  },
  `:attribute must greater than weeklyPriceMin`
);

/**
 * List of validation rules
 */
const validationRules = {
};

/**
 * Get validation rules for a specific type
 * @param {*} type
 * @returns object
 */
const getRules = (type, data = {}) => {
  switch (type) {
    default:
      return {};
  }
};

/**
 * Validate user reuqest
 * @param {*} req
 * @returns boolean / throw error
 */
const validate = (type, data = {}) => {
  const rules = getRules(type, data);
  const validation = new Validator(data, rules);
  if (validation.fails()) {
    throw Object.assign({}, new Error(), {
      status: 400,
      data: {},
      errors: validation.errors.all(),
      message: `Invalid Parameter(s): ${Object.keys(validation.errors.all())
        .map((item) => item)
        .join(',')}`,
    });
  }
  return true;
};

module.exports = {
  getRules,
  validate,
};
