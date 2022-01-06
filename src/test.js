import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('alCe3Bc9B1aS9gMHNP9a').collection('cartItems').doc('cCFKvAZxek81qv4fmKMn');
// its same equivalent with below
firestore.doc('/users/alCe3Bc9B1aS9gMHNP9a/cartItems/cCFKvAZxek81qv4fmKMn');
// its same equivalent with below when get collection only
firestore.collection('/users/alCe3Bc9B1aS9gMHNP9a/cartItems');