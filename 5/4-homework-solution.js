function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}
console.log('Start');

const usersDB = {
  'user1@hw.js': [{ title: 'video1' }, { title: 'video2' }],
  'user2@hw.js': [{ genre: 'genre1' }, { genre: 'genre1' }],
  'user3@hw.js': [],
};

const loginUser = (email, password) =>
  new Promise((resolve, reject) => {
    if (usersDB[email]) {
      setTimeout(() => {
        console.log(`Now we have the data of user: ${email}`);
        resolve({ userEmail: email });
      }, 3000);
    } else {
      setTimeout(() => {
        reject('User not found!');
      }, 3000);
    }
  });

const getUserVideos = email =>
  new Promise((resolve, reject) => {
    if (usersDB[email].length) {
      setTimeout(() => {
        resolve(usersDB[email]);
      }, 2000);
    } else {
      setTimeout(() => {
        reject('Videos not found!');
      }, 2000);
    }
  });

const videoDetails = (video, callback, callError) =>
  new Promise((resolve, reject) => {
    if (video.title) {
      setTimeout(() => {
        resolve(video.title);
      }, 2000);
    } else {
      setTimeout(() => {
        reject('Video Title not found!');
      }, 2000);
    }
  });

const getPassedUsersFirstVideoTitle = async user => {
  try {
    let userlog = await loginUser(user, 1234);
    console.log(`user:`, userlog);
    let userVideos = await getUserVideos(userlog.userEmail);
    console.log(`videos:`, userVideos);
    let videoTitle = await videoDetails(userVideos[0]);
    console.log('title: ', videoTitle);
  } catch (error) {
    displayError(error);
  }
};
getPassedUsersFirstVideoTitle('user4@hw.js');
getPassedUsersFirstVideoTitle('user3@hw.js');
getPassedUsersFirstVideoTitle('user2@hw.js');
getPassedUsersFirstVideoTitle('user1@hw.js');
console.log('Finish');
