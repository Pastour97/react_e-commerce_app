import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collection');
        dispatch(fetchCollectionsStart());

        collectionRef
            .get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
                //used to be:
                //updateCollections(collectionsMap);
                dispatch(fetchCollectionsSuccess(collectionsMap));
                //this part is removed to since we aren't in a component
                //this.setState({ loading: false });
            })
            .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
};