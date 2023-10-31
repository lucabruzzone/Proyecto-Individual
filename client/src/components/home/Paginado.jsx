import styles from './Paginado.module.css';
import leftImg from '../../img/circle-left-regular.svg';
import rightImg from '../../img/circle-right-regular.svg';
import { useState } from 'react';

function Paginado({ page, setPage, totalPages }) {
    const [input, setInput] = useState(1);

    function handleNextPage() {
        if (page < totalPages) {
            setInput(input + 1);
            setPage(page + 1);
        }
    }

    function handlePrevPage() {
        if (page > 1) {
            setInput(input - 1);
            setPage(page - 1);
        }
    }

    function handleOnChange(e) {
        const value = e.target.value;
        const valueParse = parseInt(value);
        setInput(value);
        setPage(valueParse);
        if (valueParse < 1 || valueParse > Math.ceil(totalPages) || isNaN(valueParse)) {
            setPage(1);
            setInput(1);
        }
        else {
            setPage(valueParse);
        }
    }

    function handleKeyDown(e) {
        const keyPressed = e.target.value;
        const keyParse = parseInt(keyPressed);
        if (e.keyCode === 13) {
            setPage(keyParse);
            if (keyParse < 1 || keyParse > Math.ceil(totalPages) || isNaN(keyParse)) {
                setPage(1);
                setInput(1);
            }
            else {
                setPage(keyParse);
            }
        }
    }

    return (
        <div className={styles.mainView}>
            <img onClick={handlePrevPage} id={styles.arrows} className={styles.leftArrow} src={leftImg} alt="" />
            <div className={styles.pagesBox}>
                <div className={styles.pagesSubBox}>
                    <input value={input} type="text" readOnly max={totalPages} min='0' />
                    <p>de {totalPages}</p>
                </div>
            </div>
            <img onClick={handleNextPage} id={styles.arrows} className={styles.rightArrow} src={rightImg} alt="" />
        </div>
    );
}

export default Paginado;