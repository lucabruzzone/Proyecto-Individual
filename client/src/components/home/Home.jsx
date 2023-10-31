import styles from './Home.module.css';
import Card from './Card';
import Paginado from './Paginado';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionDisplayMenuBar, actionDisplayFilters, actionRenderCountries } from '../../redux/actions';

function Home() {
    const initialCountries = useSelector(state => state.initialCountries);
    const renderCountries = useSelector(state => state.renderCountries);
    const [page, setPage] = useState(1);
    const [eachPage, setEachPage] = useState(24);
    let totalPages = Math.ceil(renderCountries.length / eachPage);
    let initialSlice = (page - 1) * eachPage;
    let lastSlice = ((page - 1) * eachPage) + eachPage;
    const dispatch = useDispatch();

    useEffect(() => {
        //acá nos aseguramos de que el menú desplegable y los filtros no se abran indeseablemente al renderizar este componente
        //este dispatch hace que al NavBar le llegue un false del menú desplegable y de los filtros, evitando que se abran
        dispatch(actionDisplayMenuBar(false));
        dispatch(actionDisplayFilters(false));
        // con la línea de abajo nos aseguramos de que otras barSearch usados en otros componentes no borren países del estado global
        // de lo contrario, en el home u otros componentes, no se mostrarían todos los países
        dispatch(actionRenderCountries(initialCountries));
    }, []);

    return (
        <div className={styles.mainView}>
            <section className={styles.filterSelectionsView}>
                <div className={styles.filterSelectionsContainer}>
                    <p>0 filtros:</p>
                    <div className={styles.addedFiltersContainer}>
                    </div>
                </div>
            </section>
            <p id={styles.seleccionaUnPais}>Selecciona un país:</p>
            <section className={styles.cardsView}>
                {renderCountries.length ?
                    <div className={styles.cardsContainer}>
                        {renderCountries.slice(initialSlice, lastSlice).map((country, index) => {
                            return (
                                <div key={index} className={styles.cardComponentBox}>
                                    <Card country={country} />
                                </div>
                            )
                        })}
                    </div> :
                    <div className={styles.cardsContainer}>
                        <div className={styles.cardComponentBox}></div>
                        <div className={styles.cardComponentBox}></div>
                        <div className={styles.cardComponentBox}></div>
                        <div className={styles.cardComponentBox}></div>
                        <div className={styles.cardComponentBox}></div>
                        <div className={styles.cardComponentBox}></div>
                    </div>
                }
            </section>
            <section className={styles.paginado}>
                <Paginado page={page} setPage={setPage} totalPages={totalPages} />
            </section>
        </div>
    );
}

export default Home;