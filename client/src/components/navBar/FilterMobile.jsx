import styles from './FilterMobile.module.css';

function FilterMobile() {
    return (
        <div id={styles.mainContainer}>
            <section>
                <label className={styles.actividad} htmlFor="">Actividad</label>
                <ul className={styles.listUl} name="actividad" id="actividad">
                    <li value="Cabalgata">Cabalgata<span>＋</span></li>
                    <li value="Trekking">Trekking<span>＋</span></li>
                    <li value="Paseo_en_bote">Paseo en bote<span>＋</span></li>
                    <li value="Museo">Museo<span>＋</span></li>
                </ul>
            </section>

            <section>
                <label className={styles.dificultad} htmlFor="">Dificultad</label>
                <ul className={styles.listUl} name="Dificultad" id="Dificultad">
                    <li value="1">1 Muy Baja<span>＋</span></li>
                    <li value="2">2 Baja<span>＋</span></li>
                    <li value="3">3 Media<span>＋</span></li>
                    <li value="4">4 Media Alta<span>＋</span></li>
                    <li value="5">5 Alta<span>＋</span></li>
                </ul>
            </section>

            <section>
                <label className={styles.temporada} htmlFor="">Temporada</label>
                <ul className={styles.listUl} name="Temporada" id="Temporada">
                    <li value="Verano">Verano<span>＋</span></li>
                    <li value="Otoño">Otoño<span>＋</span></li>
                    <li value="Invierno">Invierno<span>＋</span></li>
                    <li value="Primavera">Primavera<span>＋</span></li>
                </ul>
            </section>

            <section>
                <label className={styles.continente} htmlFor="">Continente</label>
                <ul className={styles.listUl} name="Continente" id="Continente">
                    <li value="Americas">América<span>＋</span></li>
                    <li value="Europa">Europa<span>＋</span></li>
                    <li value="Asia">Asia<span>＋</span></li>
                    <li value="Africa">Africa<span>＋</span></li>
                    <li value="Oceanía">Oceanía<span>＋</span></li>
                </ul>
            </section>
        </div>
    );
}

export default FilterMobile;