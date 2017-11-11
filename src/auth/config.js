import firebase from 'firebase'

// const config = {
//   apiKey: "AIzaSyDHL6JFTyBcaV60WpE4yXfeO0aZbzA9Xbk",
//   authDomain: "practice-auth.firebaseapp.com",
//   databaseURL: "https://practice-auth.firebaseio.com",
// }
const config = {
  apiKey: "AIzaSyCtZN8ZFq-OeU9Q0mBYBqokaeVDA3WIoQw",
  authDomain: "fir-test-a4e00.firebaseapp.com",
  databaseURL: "https://fir-test-a4e00.firebaseio.com",
  projectId: "fir-test-a4e00",
  storageBucket: "fir-test-a4e00.appspot.com",
  messagingSenderId: "54905034528"
}
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth