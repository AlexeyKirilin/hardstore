import { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {setSearchValue} from '../../redux/slices/FilterSlise'
import search from '../../assets/img/search.svg'
import close from '../../assets/img/close.svg'
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';

const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('')
    const inputRef = useRef()

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current?.focus()
    }

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 300),
        [],
    )

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value)
    }

    return (
        <div className={styles.root}>
            <img className={styles.icon} src={search} alt='search'/>
            <input
                ref={inputRef}
                value={value} 
                className={styles.input} 
                placeholder='Поиск товара...'
                onChange={onChangeInput}/>
                
            {value && <img onClick={onClickClear} className={styles.close} src={close} alt='close'/>}
        </div>
    );
};

export default Search;

