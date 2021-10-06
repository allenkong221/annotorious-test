import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import to from 'await-to-js'
import './'

const auth = getAuth()
export const currentUser = ref()

/**
 * Handles Google Login
 * @returns True if login was successful, false otherwise
 */
export const googleLogin = async () => {
  const provider = new GoogleAuthProvider()
  const [err, res] = await to(signInWithPopup(auth, provider))
  if (err) {
    console.error(err)
    return false
  }
  currentUser.value = res?.user
  return true
}

/**
 * Handles E-mail/Password Login
 */
export const emailLogin = async (email: string, password: string) => {
  const [err, res] = await to(signInWithEmailAndPassword(auth, email, password))
  if (err) {
    console.error(err)
    // TODO SHOW SOME ERROR
    return false
  }
  currentUser.value = res?.user
  return true
}

/**
 * Creates a new user with Email/Password
 * @param email - User's email
 * @param password - User's password
 * @returns - True if creation was successful
 */
export const createEmailUser = async (email: string, password: string) => {
  const [err, res] = await to(
    createUserWithEmailAndPassword(auth, email, password)
  )
  if (err) {
    console.error(err)
    // TODO SHOW SOME ERROR
    return false
  }
  currentUser.value = res?.user
  return true
}

/**
 * Updates the current user
 */
export const updateCurrentUser = async () => {
  currentUser.value = await new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (u) => {
        unsubscribe()
        resolve(u)
      },
      reject
    )
  })
}
