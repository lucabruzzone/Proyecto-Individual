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
                    <li value="Cabalgata">Cabalgata<span>＋</span></li>
                    <li value="Trekking">Trekking<span>＋</span></li>
                    <li value="Paseo_en_bote">Paseo en bote<span>＋</span></li>
                    <li value="Museo">Museo<span>＋</span></li>
                    <li value="Cabalgata">Cabalgata<span>＋</span></li>
                    <li value="Trekking">Trekking<span>＋</span></li>
                    <li value="Paseo_en_bote">Paseo en bote<span>＋</span></li>
                    <li value="Museo">Museo<span>＋</span></li>
                    <li value="Cabalgata">Cabalgata<span>＋</span></li>
                    <li value="Trekking">Trekking<span>＋</span></li>
                    <li value="Paseo_en_bote">Paseo en bote<span>＋</span></li>
                    <li value="Museo">Museo<span>＋</span></li>
                </ul>
            </section>

            <section>
                <label className={styles.dificultad} htmlFor="">Dificultad</label>
                <ul className={styles.listUl} name="Dificultad" id="Dificultad">
                    <li value="Cabalgata">1 Muy Baja<span>＋</span></li>
                    <li value="Trekking">2 Baja<span>＋</span></li>
                    <li value="Paseo_en_bote">3 Media<span>＋</span></li>
                    <li value="Museo">4 Media Alta<span>＋</span></li>
                    <li value="Museo">5 Alta<span>＋</span></li>
                </ul>
            </section>

            <section>
                <label className={styles.temporada} htmlFor="">Temporada</label>
                <ul className={styles.listUl} name="Temporada" id="Temporada">
                    <li value="Cabalgata">Verano<span>＋</span></li>
                    <li value="Trekking">Otoño<span>＋</span></li>
                    <li value="Paseo_en_bote">Invierno<span>＋</span></li>
                    <li value="Museo">Primavera<span>＋</span></li>
                </ul>
            </section>

            <section>
                <label className={styles.continente} htmlFor="">Continente</label>
                <ul className={styles.listUl} name="Continente" id="Continente">
                    <li value="Cabalgata">América<span>＋</span></li>
                    <li value="Trekking">Europa<span>＋</span></li>
                    <li value="Paseo_en_bote">Asia<span>＋</span></li>
                    <li value="Museo">Africa<span>＋</span></li>
                    <li value="Museo">Oceanía<span>＋</span></li>
                </ul>
            </section>
        </div>
    );
}

export default FilterMobile;