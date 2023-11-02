import { 
    SET_DISPLAY_MENU_BAR, 
    SET_DISPLAY_FILTERS, 
    INITIAL_COUNTRIES, 
    ACTIVITIES_AVAILABLES,
    RENDER_COUNTRIES, 
    FILTER_ACTIVITIES, 
    FILTER_DIFFICULTY, 
    FILTER_SEASON, 
    FILTER_CONTINENTS,
    REMOVE_ALL_FILTERS
} from '../utils/actionTypes';

export const actionDisplayMenuBar = (value) => { // action para setear true o false si está abierto o cerrado el menu mobile
    return {type: SET_DISPLAY_MENU_BAR, payload: value}
}

export const actionDisplayFilters = (value) => { // action para setear true o false si está abierta o cerrada la sección de filtros
    return {type: SET_DISPLAY_FILTERS, payload: value}
}

export const actionInitialCountries = (array) => { // action para inicializar el estado global de todos los países al iniciar la app
    return {type: INITIAL_COUNTRIES, payload: array}
}

export const actionActivitiesAvailable = (activities) => { // action para inicializar el estado global de todas los actividades que existen al iniciar la app, para renderizarlas como opciones en los filtros
    return {type: ACTIVITIES_AVAILABLES, payload: activities}
}

export const actionRenderCountries = (array) => { // action para modificar los países que se irán renderizando de acuerdo a la búsqueda y filtrado
    return {type: RENDER_COUNTRIES, payload: array}
}

export const actionRemoveAllFilters = (array) => { // action para remover todos los filtros seleccionados por el usuario
    return {type: REMOVE_ALL_FILTERS, payload: array}
}


// las siguientes actions son para guardar o eliminar los filtros que va agregando o quitando el usuario:


export const actionFilterActivities = (activity) => { // agrega
    return {type: FILTER_ACTIVITIES, payload: activity}
}

export const actionFilterDifficulty = (difficulty) => { // agrega
    return {type: FILTER_DIFFICULTY, payload: difficulty}
}

export const actionFilterSeason = (season) => { // agrega
    return {type: FILTER_SEASON, payload: season}
}

export const actionFilterContinents = (continent) => { // agrega
    return {type: FILTER_CONTINENTS, payload: continent}
}