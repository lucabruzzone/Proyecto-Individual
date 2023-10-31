import { SET_DISPLAY_MENU_BAR, SET_DISPLAY_FILTERS, INITIAL_COUNTRIES, RENDER_COUNTRIES } from '../utils/actionTypes';

const initialState = {
    displayMenuBar: false,
    displayFilters: false,
    renderCountries: [],
    initialCountries: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DISPLAY_MENU_BAR:
            return { ...state, displayMenuBar: action.payload };

        case SET_DISPLAY_FILTERS:
            return { ...state, displayFilters: action.payload };

        case INITIAL_COUNTRIES:
            return { ...state, initialCountries: action.payload, renderCountries: action.payload };

        case RENDER_COUNTRIES:
            return { ...state, renderCountries: action.payload };

        default:
            return { ...state };
    }
};

export default rootReducer;
