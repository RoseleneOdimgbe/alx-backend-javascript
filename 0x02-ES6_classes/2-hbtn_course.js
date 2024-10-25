const privateData = new WeakMap();

/**
 * This represents a Holberton Course
 */
export default class HolbertonCourse {
  /**
   * This creates a new instance of HolbertonCourse
   * @param {string} name - This is the name of the course
   * @param {number} length - This is the length of the course in hours
   * @param {string[]} students - An array of student names enrolled in the course
   */
  constructor(name, length, students) {
    privateData.set(this, {
      validateLength(length) {
        if (typeof length !== 'number') {
          throw new TypeError('Length must be a number');
        }
        if (length <= 0) {
          throw new Error('Length must be greater than 0');
        }
      },
      validateName(name) {
        if (typeof name !== 'string') {
          throw new TypeError('Name must be a string');
        }
      },
      validateStudents(students) {
        if (!Array.isArray(students)) {
          throw new TypeError('Students must be an array');
        }

        // verify that each student is a string
        for (const student of students) {
          if (typeof student !== 'string') {
            throw new TypeError('Each student must be a string');
          }
        }

        // verify that the array is not empty
        if (students.length === 0) {
          throw new Error('Students array must not be empty');
        }
      },
    });

    privateData.get(this).validateName(name);
    privateData.get(this).validateLength(length);
    privateData.get(this).validateStudents(students);

    // We can now set the properties since we know they are valid
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * This gets the name of the course
   * @returns {string} This is the name of the course
   */
  get name() {
    return this._name;
  }

  /**
   * This sets the name of the course
   * @param {string} value - This is the new name of the course
   */
  set name(value) {
    privateData.get(this).validateName(value);
    this._name = value;
  }

  /**
   * This gets the length of the course
   * @returns {number} This is the length of the course in hours
   */
  get length() {
    return this._length;
  }

  /**
   * This sets the length of the course
   * @param {number} value - This is the new length of the course in hours
   */
  set length(value) {
    privateData.get(this).validateLength(value);
    this._length = value;
  }

  /**
   * This gets the students enrolled in the course
   * @returns {string[]} This is an array of student names
   */
  get students() {
    return this._students;
  }

  /**
   * This sets the students enrolled in the course
   * @param {string[]} value - This is an array of student names
   */
  set students(value) {
    privateData.get(this).validateStudents(value);
    this._students = value;
  }
}
