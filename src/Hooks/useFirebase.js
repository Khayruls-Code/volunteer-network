import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";
import { useEffect, useState } from "react";


initializeAuthentication()

const useFirebase = () => {
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()
  const [user, setUser] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const singInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        setIsLoading(false)
      } else {
        setUser({})
      }
    })
    return () => unSubscribe
  }, [])

  const singOutuser = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(false))
  }

  return {
    user,
    setUser,
    singInUsingGoogle,
    singOutuser,
    isLoading,
    setIsLoading
  }
}

export default useFirebase;