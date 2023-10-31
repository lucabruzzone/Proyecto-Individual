import { SET_DISPLAY_MENU_BAR, SET_DISPLAY_FILTERS, INITIAL_COUNTRIES, RENDER_COUNTRIES } from '../utils/actionTypes';

export const actionDisplayMenuBar = (value) => {
    return {type: SET_DISPLAY_MENU_BAR, payload: value}
}

export const actionDisplayFilters = (value) => {
    return {type: SET_DISPLAY_FILTERS, payload: value}
}

export const actionInitialCountries = (array) => {
    return {type: INITIAL_COUNTRIES, payload: array}
}

export const actionRenderCountries = (array) => {
    return {type: RENDER_COUNTRIES, payload: array}
}