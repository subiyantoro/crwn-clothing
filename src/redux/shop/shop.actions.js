import { convertSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap,
});

export const fetchCollectionsFailure = message => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: message,
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(err => dispatch(fetchCollectionsFailure(err.message)));
    }
}