import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import { auth } from "../firebase.init";

const provider = new GoogleAuthProvider();

const useFirebase = () => {
    
    const [user, setUser] = useState({})

    const signInWithGoogle = () => {
        console.log('signing in soon')
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{})
    }

    //user er state change hole 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    return { user, signInWithGoogle,handleSignOut }
}

export default useFirebase;