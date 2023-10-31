import styles from './Form.module.css';
import axios from 'axios';
import flagIcon from '../../img/flag-solid.svg';
import { HOME, COUNTRY, URL } from '../../utils/pathroutes';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actionDisplayMenuBar, actionDisplayFilters, actionRenderCountries } from '../../redux/actions';

function Form() {
    const dispatch = useDispatch();
    const initialCountries = useSelector(state => state.initialCountries);
    const renderCountries = useSelector(state => state.renderCountries);
    const [displayedTable, setDisplayedTable] = useState(false);
    const [formCompleted, setFormCompleted] = useState(false);
    const [newActivity, setNewActivity] = useState({
        nombre: '',
        dificultad: 0,
        duracion: 0,
        temporada: '',
        paises: ''
    });

    function handleInput(e) {
        const value = e.target.value;
        const id = e.target.id;
        const title = e.target.title;
        const titlParse = parseInt(title);
        if (title || id === 'dificultad') setNewActivity({ ...newActivity, dificultad: titlParse });
        if (id === 'paises') setNewActivity({ ...newActivity, paises: value });
        if (id === 'nombre') setNewActivity({ ...newActivity, nombre: value });
        if (id === 'Verano' || id === 'Otoño' || id === 'Invierno' || id === 'Primavera') setNewActivity({ ...newActivity, temporada: id });
        if (id === 'duracion') setNewActivity({ ...newActivity, duracion: value });
    }

    function handleFocus() {
        setDisplayedTable(true);
    }

    function handleBlur() {
        setDisplayedTable(false);
    }

    async function handleSearch(e) {
        try {
            const value = e.target.value;
            if (value !== '') {
                const { data } = await axios(`${URL}/${COUNTRY}?name=${value}`);
                if (data) {
                    dispatch(actionRenderCountries(data));
                }
            }
            else dispatch(actionRenderCountries(initialCountries));
        } catch (error) {
            dispatch(actionRenderCountries([]));
            console.log(error.message);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    useEffect(() => {
        //acá nos aseguramos de que el menú desplegable y los filtros no se abran indeseablemente al renderizar este componente
        //este dispatch hace que al NavBar le llegue un false del menú desplegable y de los filtros, evitando que se abran
        dispatch(actionDisplayMenuBar(false));
        dispatch(actionDisplayFilters(false));
    }, []);

    useEffect(() => {
        const some = Object.entries(newActivity).map(([key, value]) => {
            if (value !== '' && value !== 0) return true;
        });
        for (let i = 0; i < some.length; i++) {
            if (!some[i]) {
                return setFormCompleted(false);
            }
        }
        return setFormCompleted(true);
    }, [newActivity]);

    return (
        <form onSubmit={handleSubmit} className={styles.mainView}>
            <div className={styles.mainContainer}>
                <p>Nueva actividad</p>
                <NavLink to={HOME}>
                    <button className={styles.closeButton}>
                        Cerrar x
                    </button>
                </NavLink>

                <div className={styles.inputsContainer}>
                    <div className={styles.paisNombreInput}>
                        <label className={styles.inputsLabel} htmlFor="">País o países</label>
                        <div className={styles.inputBox}>
                            <input onChange={handleSearch} onFocus={handleFocus} onBlur={handleBlur} id='paises' type="search" autoComplete='off' placeholder='Puedes agregar mas de un país' />
                            <div className={styles.inputBoxImgBox}>
                                <p>0</p>
                                <img src={flagIcon} alt="" />
                                <p id={styles.inputBoxImgBoxAfter}>Seleccionados</p>
                                <div className={styles.seleccionPaisContainer} id={displayedTable ? '' : styles.hidden}>
                                    {renderCountries?.map((country, i) => {
                                        return (
                                            <div key={i} className={styles.countrySelectionRow}>
                                                <p>{country.nombre}</p>
                                                <img src={country.imagenBandera} alt="" />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.paisNombreInput}>
                        <label className={styles.inputsLabel} htmlFor="">Nombre de la actividad</label>
                        <input onChange={handleInput} id='nombre' type="text" autoComplete='off' placeholder='Ej. Cabalgata' />
                    </div>
                    <div className={styles.dificultadInput}>
                        <label className={styles.inputsLabel} htmlFor="">Dificultad</label>
                        <div className={styles.numberBox}>
                            <p className={newActivity.dificultad === 1 && styles.difOn} title='1' onClick={handleInput} id='dificultad'>1</p>
                            <p className={newActivity.dificultad === 2 && styles.difOn} title='2' onClick={handleInput} id='dificultad'>2</p>
                            <p className={newActivity.dificultad === 3 && styles.difOn} title='3' onClick={handleInput} id='dificultad'>3</p>
                            <p className={newActivity.dificultad === 4 && styles.difOn} title='4' onClick={handleInput} id='dificultad'>4</p>
                            <p className={newActivity.dificultad === 5 && styles.difOn} title='5' onClick={handleInput} id='dificultad'>5</p>
                        </div>
                    </div>
                    <div className={styles.duracionInput}>
                        <label className={styles.inputsLabel} htmlFor="">Duración (horas)</label>
                        <input onChange={handleInput} id='duracion' type="number" placeholder='Ej. 3' />
                    </div>
                    <div className={styles.temporadaInput}>
                        <label htmlFor="">Temporada</label>
                        <div className={styles.temporadaBox}>
                            <p className={newActivity.temporada === 'Verano' && styles.tempOn} onClick={handleInput} id='Verano'>Verano</p>
                            <p className={newActivity.temporada === 'Otoño' && styles.tempOn} onClick={handleInput} id='Otoño'>Otoño</p>
                            <p className={newActivity.temporada === 'Invierno' && styles.tempOn} onClick={handleInput} id='Invierno'>Invierno</p>
                            <p className={newActivity.temporada === 'Primavera' && styles.tempOn} onClick={handleInput} id='Primavera'>Primavera</p>
                        </div>
                    </div>
                    <button id={styles.submitButton} className={formCompleted ? styles.submitButtonOn : styles.submitButtonOff}>
                        Crear actividad
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Form;