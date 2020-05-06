import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions.js';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import './shop.styles.scss';




class ShopPage extends React.Component {

    //this whole section is moved to it's own reducer
    // just an easier way to write state
    // state = {
    //     loading: true 
    // };

    // unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
        
        //const { updateCollections } = this.props;
        // const collectionRef = firestore.collection('collection');

        // this way is the promise pattern way but the caveat with it is that we only get information once when the component gets mounted
        //  collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false });
        // });

        // RXjs way :
        // collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false });
        // });


        //Rest API way with fetch, it was hard and the data it provided us was really nested so we used the promise pattern instead XD
        // fetch('https://firestore.googleapis.com/v1/projects/experimental-react/databases/(default)/documents/collection')
        // .then(response => response.json())
        // .then(collections => console.log(collections));


    }

    render() {
        const { match } = this.props;
        return(
            <div className='shop-page'>
                <Route
                    exact
                    path={`${match.path}`} 
                    component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(null, mapDispatchToProps)(ShopPage);