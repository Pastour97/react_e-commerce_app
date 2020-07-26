import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions.js';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import Spinner from '../../components/Spinner/spinner.component.jsx';

import './shop.styles.scss';





const ShopPage = ({ fetchCollectionsStart, match }) => {


    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])



    try {
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
    } catch {
        return (
            <Spinner />
        )
    }
        
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);