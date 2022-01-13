import { createSelector } from "reselect";

const selectUser = state => state.user;
const selectCart = state => state.hidden;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser,
)

