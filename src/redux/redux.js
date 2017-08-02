// Actions
const CHANGE_PAGE_TO = 'table-of-contents/item-click';

// Reducer
export const createReducer = defaultPage => (state = {currentPage:defaultPage} , action = {}) => {
	switch (action.type) {
		case CHANGE_PAGE_TO:
			return {
				...state ,
				currentPage:action.newPage
			};

		default:
			return state;
	}
}

// Action Creators
export const itemClick = newPage => ({type:CHANGE_PAGE_TO , newPage});