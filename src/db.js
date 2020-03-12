import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
  .initializeApp({ projectId: 'extended-method-253512' })
  .firestore()

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })