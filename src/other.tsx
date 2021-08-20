export { };// import { useState, useRef  } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// import { firebase, auth, firestore } from '../services/firebase';
// import { FormEvent } from 'react';


// function App() {
//   const [user] = useAuthState(auth); //SignIn --> user is an object | SignOut --> user is null
//   return (
//     <div className="App">
//       {user? <ChatRoom/> : <SignIn/>}
//     </div>
//   );
// }


// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

//   return (
//     <button onClick={signInWithGoogle}>Sign in with Google</button>
//   )

// }


// // function SignOut() {
// //   return auth.currentUser && (
// //     <button onClick={() => auth.signOut()}>Sign Out</button>
// //   )
// // }


// interface Message{
//   text: string,
//   createdAt: string,
//   uid: string;
//   photoURL: string;
// }

// function ChatRoom() {
//   const dummy = useRef<HTMLElement>(null);
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt').limit(25);

//   const [messages] = useCollectionData(query, { idField: 'id' });

//   const [formValue, setFormValue] = useState('');


//   const sendMessage = async (e: FormEvent) => {
//     e.preventDefault();

//     if (!auth.currentUser) {
//       throw new Error('User not authenticated. Message not send.')
//     }

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL
//     })

//     setFormValue('');
//     dummy.current?.scrollIntoView({ behavior: 'smooth' });
//   }

//   return (<>
//     <main>

//       {messages && messages.map( msg => <ChatMessage key={msg.id} message={(msg as any)} />)}

//       <span ref={dummy}></span>

//     </main>

//     <form onSubmit={sendMessage}>

//       <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

//       <button type="submit" disabled={!formValue}>🕊️</button>

//     </form>
//   </>)
// }


// function ChatMessage({message}: {message: Message}) {
//   const { text, uid, photoURL } = message;

//   const messageClass = uid === auth.currentUser?.uid ? 'sent' : 'received';

//   return (<>
//     <div className={`message ${messageClass}`}>
//       <img alt="User" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//       <p>{text}</p>
//     </div>
//   </>)
// }

// // export default App;
