import {initializeApp} from 'firebase/app';

import{getAuth,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth'

import{ getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDLcg5we9QnOb-mLy4vHNVG4tuPaDzu8XU",
    authDomain: "crwn-clothing-db-88984.firebaseapp.com",
    projectId: "crwn-clothing-db-88984",
    storageBucket: "crwn-clothing-db-88984.appspot.com",
    messagingSenderId: "616515226639",
    appId: "1:616515226639:web:d8ccd3d68b473b6ac3a77a"
  };
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider=new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt:"select_account"
  });

  export const auth=getAuth();

  export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
  
  export const db=getFirestore();

  export const createUserDocumentFromAuth=async (
    userAuth,
    additionalInformation={}
    )=>{
    // console.log("hello from console");
    if(!userAuth) return;
      const userDocRef=doc(db,'users',userAuth.uid);
     
      const userSnapshot=await getDoc(userDocRef);

      if(!userSnapshot.exists()){
        const {displayName,email}=userAuth;
        const createAt=new Date();

        try{
          await setDoc(userDocRef,{
            displayName,
            email,
            createAt,
            ...additionalInformation,
          });
        }catch(error){
          console.log("error",error.message);
        }
      }
      return userDocRef;
      };

export const createAuthUserWithEmailAndPassword =async(email,password)=>{
  if(!email||!password) return;
  return await createUserWithEmailAndPassword(auth,email,password);
};

export const signInAuthUserWithEmailAndPassword =async(email,password)=>{
  if(!email||!password) return;
  return await signInWithEmailAndPassword(auth,email,password);
};