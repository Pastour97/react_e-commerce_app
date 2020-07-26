import { createSelector } from 'reselect';

const selectUser = state => state.user;

// export const selectCurrentUser = createSelector(
//     //you can pass them like this too: selectUser, selectCart 
//     [selectUser, selectCart],
//     (user, cart) => user.currentUser;
// )
// we don't have cart selector here ,it was only as an example 

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

