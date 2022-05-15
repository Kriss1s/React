function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}
console.log('Start');

const usersDB = {
  'user1@hw.js': [{ title: 'video1' }, { title: 'video2' }],
  'user2@hw.js': [{ genre: 'genre1' }, { genre: 'genre1' }],
  'user3@hw.js': [],
};

const loginUser = (email, password, callback, callError) => {
  if (usersDB[email]) {
    setTimeout(() => {
      console.log(`Now we have the data of user: ${email}`);
      callback({ userEmail: email });
    }, 3000);
  } else {
    setTimeout(() => {
      callError('User not found!');
    }, 3000);
  }
};

const getUserVideos = (email, callback, callError) => {
  if (usersDB[email].length) {
    setTimeout(() => {
      callback(usersDB[email]);
    }, 2000);
  } else {
    setTimeout(() => {
      callError('Videos not found!');
    }, 2000);
  }
};

const videoDetails = (video, callback, callError) => {
  if (video.title) {
    setTimeout(() => {
      callback(video.title);
    }, 2000);
  } else {
    setTimeout(() => {
      callError('Video Title not found!');
    }, 2000);
  }
};

const getPassedUsersFirstVideoTitle = user =>
  loginUser(
    user,
    1234,
    user => {
      console.log(`user:`, user);
      getUserVideos(
        user.userEmail,
        videos => {
          console.log(`videos:`, videos);
          videoDetails(
            videos[0],
            title => console.log('title: ', title),
            displayError
          );
        },
        displayError
      );
    },
    displayError
  );
getPassedUsersFirstVideoTitle('user4@hw.js');
getPassedUsersFirstVideoTitle('user3@hw.js');
getPassedUsersFirstVideoTitle('user2@hw.js');
getPassedUsersFirstVideoTitle('user1@hw.js');
console.log('Finish');
