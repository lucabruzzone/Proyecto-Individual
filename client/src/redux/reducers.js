import deleteDuplicates from '../utils/deleteDuplicates';
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

const initialState = {
    displayMenuBar: false,
    displayFilters: false,
    renderCountries: [],
    initialCountries: [],
    activitiesAvailable: [],
    activitiesFilter: [],
    difficultyFilter: [],
    seasonFilter: [],
    continentsFilter: [],
};

const rootReducer = (state = initialState, action) => {
    let newArray = [];

    switch (action.type) {
        case SET_DISPLAY_MENU_BAR: // para avisarnos si se desplagó la barra menú mobile
            return { ...state, displayMenuBar: action.payload };

        case SET_DISPLAY_FILTERS: // para avisarnos si se desplagó la sección de los filtros
            return { ...state, displayFilters: action.payload };

        case INITIAL_COUNTRIES: // carga todos los países al iniciar la app
            return { ...state, initialCountries: action.payload, renderCountries: action.payload };

        case ACTIVITIES_AVAILABLES: // estado que muestra la variedad de actividades que existen en total
            return { ...state, activitiesAvailable: action.payload };

        case FILTER_ACTIVITIES: // actividades seleccionadas por el usuario en la sección filtros
            if (!state.activitiesFilter.includes(action.payload)) {
                return { ...state, activitiesFilter: [...state.activitiesFilter, action.payload] };
            }
            return { ...state, activitiesFilter: state.activitiesFilter.filter(activity => activity !== action.payload) };

        case FILTER_DIFFICULTY: // dificultad seleccionada por el usuario en la sección filtros
            if (!state.difficultyFilter.includes(action.payload)) {
                return { ...state, difficultyFilter: [...state.difficultyFilter, action.payload] };
            }
            return { ...state, difficultyFilter: state.difficultyFilter.filter(difficulty => difficulty !== action.payload) };

        case FILTER_SEASON: // temporada seleccionada por el usuario en la sección filtros
            if (!state.seasonFilter.includes(action.payload)) {
                return { ...state, seasonFilter: [...state.seasonFilter, action.payload] };
            }
            return { ...state, seasonFilter: state.seasonFilter.filter(season => season !== action.payload) };

        case FILTER_CONTINENTS: // continentes seleccionados por el usuario en la sección filtros
            if (!state.continentsFilter.includes(action.payload)) {
                return { ...state, continentsFilter: [...state.continentsFilter, action.payload] };
            }
            return { ...state, continentsFilter: state.continentsFilter.filter(continent => continent !== action.payload) };

        case REMOVE_ALL_FILTERS: // remueve todos los filtros seleccionados
            return { ...state, activitiesFilter: [], difficultyFilter: [], seasonFilter: [], continentsFilter: [] };




        // el siguiente case renderiza los países de acuerdo a la suma de filtros que el usuario selecciona
        // es complejo ya que acumula las seleciones en lugar de excluirlas
        case RENDER_COUNTRIES:
            // primero preguntamos si hay filtros seleccionados. En caso de que no hayan, saltamos al final de este CASE ya que el usuario no está utilizando los filtros.
            // si esque hay filtros seleccionados, comentamos a iterar cada lista de filtros.
            if (state.activitiesFilter.length || state.difficultyFilter.length || state.seasonFilter.length || state.continentsFilter.length) {

                // primero pregunta si esque hay filtros de actividades turísticas seleccionados
                // para iterar en dos ciclos for las actividades de cada país y hacer un match con los filtros del usuario
                // si se hace el match, entonces hacemos un push de ese país al array madre "newArray" que lo inicializamos antes de comenzar el SWITCH
                if (state.activitiesFilter.length) {
                    let actionPayload = action.payload;
                    for (const country of actionPayload) {
                        let booleanValue = false;
                        let countryActivities = country.activities;
                        for (const activity of countryActivities) {
                            if (state.activitiesFilter.includes(activity.nombre)) {
                                booleanValue = true;
                            }
                        }
                        if (booleanValue) newArray.push(country);
                    }
                }
    
                // luego hace lo mismo pero con los filtros de dificultad de las actividades turísticas
                if (state.difficultyFilter.length) {
                    let actionPayload = action.payload;
                    for (const country of actionPayload) {
                        let booleanValue = false;
                        let countryActivities = country.activities;
                        for (const activity of countryActivities) {
                            if (state.difficultyFilter.includes(activity.dificultad)) {
                                booleanValue = true;
                            }
                        }
                        if (booleanValue) newArray.push(country);
                    }
                }
    
                // luego exactamente lo mismo pero con los filtros de las temporadas (verano, otoño..etc)
                if (state.seasonFilter.length) {
                    let actionPayload = action.payload;
                    for (const country of actionPayload) {
                        let booleanValue = false;
                        let countryActivities = country.activities;
                        for (const activity of countryActivities) {
                            if (state.seasonFilter.includes(activity.temporada)) {
                                booleanValue = true;
                            }
                        }
                        if (booleanValue) newArray.push(country);
                    }
                }
    
                // y aquí sigue con los filtros de continentes
                if (state.continentsFilter.length) {
                    let actionPayload = action.payload;
                    for (const country of actionPayload) {
                        let booleanValue = false;
                        let countryContinents = country.continente.toLowerCase();
                        if (state.continentsFilter.includes(countryContinents)) {
                            booleanValue = true;
                        }
                        if (booleanValue) newArray.push(country);
                    }
                }
    
                // Finalmente preguntamos si el array madre se llenó con países filtrados o no.
                // si se llenó, quiere decir que los filtros están activos y modificarán el renderizado de los países.
                // pero antes, debemos eliminar los países duplicados en el array (si esque se duplicaron).
                // para eso, llamamos a la función "deleteDuplicates" que hace ese trabajo y finalmente retornamos el renderizado con los cambios.
                // De lo contrario, si el array madre está vacío, quiere decir que no hay ningún país que coincida con el o los filtros seleccionados por el usuario.
                // por lo tanto simplemente retornamos el estado con el array vacío para que muestre la bandeja vacía sin países.
                if (newArray.length) {
                    const arraySinDuplicados = deleteDuplicates(newArray);
                    return { ...state, renderCountries: arraySinDuplicados };
                }
                return { ...state, renderCountries: newArray }; 
            }
            return { ...state, renderCountries: action.payload };

        default:
            return { ...state };
    }
};

export default rootReducer;
