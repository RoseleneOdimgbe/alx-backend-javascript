import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * This asynchronously handles profile signup by signing up a user and uploading a photo.
 * @param {string} firstName - This is the first name of the user.
 * @param {string} lastName - This is the last name of the user.
 * @param {string} fileName - This is the name of the file to upload.
 * @returns {Promise<Array<{status: string, value: any}>>} An array of objects
 * containing the status and value of each operation. The status is either
 * 'fulfilled' or 'rejected'.
 */
export default async function handleProfileSignup(firstName, lastName, fileName) {
  const handlePromise = (promise) => promise
    .then((result) => ({ status: 'fulfilled', value: result }))
    .catch((error) => ({ status: 'rejected', error: `Error: ${error.message}` }));

  const promises = [
    handlePromise(signUpUser(firstName, lastName)),
    handlePromise(uploadPhoto(fileName)),
  ];

  return Promise.all(promises);
}
