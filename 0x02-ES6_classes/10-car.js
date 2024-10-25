const validators = {
    validateObjValue: (varName, obj, expectedType) => {
      // eslint-disable-next-line valid-typeof
      if (typeof obj !== expectedType) {
        throw new TypeError(`${varName} must be a ${expectedType}`);
      }
    },
  };
  
  /**
   * This represents a Car
   * @class
   */
  export default class Car {
    /**
     * Creates a Car
     * @constructor
     * @param {string} brand - The brand of the car
     * @param {string} motor - The motor of the car
     * @param {string} color - The color of the car
     */
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    /**
     * Gets the brand of the car
     * @type {string}
     */
    get brand() {
      return this._brand;
    }
  
    /**
     * Gets the motor of the car
     * @type {string}
     */
    get motor() {
      return this._motor;
    }
  
    /**
     * Gets the color of the car
     * @type {string}
     */
    get color() {
      return this._color;
    }
  
    /**
     * Sets the brand of the car
     * @param {string} value - This is the brand of the car
     */
    set brand(value) {
      validators.validateBrand('brand', value, 'string');
      this._brand = value;
    }
  
    /**
     * Sets the motor of the car
     * @param {string} value - This is the motor of the car
     */
    set motor(value) {
      validators.validateBrand('motor', value, 'string');
      this._motor = value;
    }
  
    /**
     * Sets the color of the car
     * @param {string} value - The color of the car
     */
    set color(value) {
      validators.validateBrand('color', value, 'string');
      this._color = value;
    }
  
    /**
     * Creates a clone of the car
     * @returns {Car} - This is the cloned car
     */
    cloneCar() {
      return new this.constructor();
    }
  }
