import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/firebase.utils';

import { 
    fetchCollectionsFailure,
    fetchCollectionsSuccess,
} from './shop.actions';

import ShopActionTypes from './shop.types';


export function* fetchCollectionsAsync() {
    try{
        const collectionRef = firestore.collection('collection');
        //why can't the commented code work instead of the above one
        //const collectionRef = yield call(firestore.collection, 'collection');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapShotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }   catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
    
        // the above code is exactly the same as this one which we wrote in our redux thunk
        // collectionRef
        //     .get()
        //     .then(snapshot => {
        //         const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
        //         //used to be:
        //         //updateCollections(collectionsMap);
        //         dispatch(fetchCollectionsSuccess(collectionsMap));
        //         //this part is removed to since we aren't in a component
        //         //this.setState({ loading: false });
        //     })
        //     .catch(error => dispatch(fetchCollectionsFailure(error.message)));

};


export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
} 