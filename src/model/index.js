import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { renderErrorMessage, setActiveScreen, successful } from "../view";

export let createNewUser = (email, password, firstName, lastName) => {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);

      // Signed in

      updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
        photoURL: "url,",
      })
        .then(() => {
          // Profile updated!
          // ...
        })
        .catch((error) => {
          // An error occurred
          // ...
        });

      // user.displayName = `${firstName} ${lastName}`;
      // console.log(user.displayName);

      //   successful();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      renderErrorMessage("server-error-message", errorMessage);
      // ..
    });
};

export let signInExistingUser = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      setActiveScreen("chatPage");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export let displayProfileName = (id, imgId) => {
  const displayProfileName = document.getElementById(id);
  const displayProfilePic = document.getElementById(imgId);
  const auth = getAuth();
  const user = auth.currentUser;
  displayProfileName.innerText = user.displayName;
  displayProfilePic.src = user.photoURL;
};
export let uploadImgRegister = (inputId) => {
  // const userImg = getAuth().currentUser.photoURL;
  // document.getElementById(avaId).src;
  const file = document.getElementById(inputId).files[0];
  // console.log(file);
  const storage = getStorage();

  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: "image/jpeg",
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, "images/" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        updateProfile(getAuth().currentUser, {
          photoURL: downloadURL,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      });
    }
  );
  // const ref = firebase.storage().ref();
  // const file = document.getElementById(id).files[0];
  // console.log(file.files);

  // const metadata = {
  //   contentType: file.type,
  // };
  // const name = file.name;
  // const uploadIMG = ref.child(name).put(file, metadata);
  // uploadIMG
  //   .then((snapshot) => snapshot.ref.getDownloadURL())
  //   .then((url) => {
  //     console.log(url);
  //   })
  //   .catch(console.error);
};
export let uploadImg = (inputId, avaId) => {
  // const userImg = getAuth().currentUser.photoURL;
  // document.getElementById(avaId).src;
  const file = document.getElementById(inputId).files[0];
  // console.log(file);
  const storage = getStorage();

  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: "image/jpeg",
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, "images/" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        document.getElementById(avaId).src = downloadURL;
        updateProfile(getAuth().currentUser, {
          photoURL: downloadURL,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        // userImg = downloadURL;
      });
    }
  );
  // const ref = firebase.storage().ref();
  // const file = document.getElementById(id).files[0];
  // console.log(file.files);

  // const metadata = {
  //   contentType: file.type,
  // };
  // const name = file.name;
  // const uploadIMG = ref.child(name).put(file, metadata);
  // uploadIMG
  //   .then((snapshot) => snapshot.ref.getDownloadURL())
  //   .then((url) => {
  //     console.log(url);
  //   })
  //   .catch(console.error);
};
export let resetPasswordEmail = (email) => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
