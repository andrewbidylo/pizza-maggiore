import styles from './Search.module.scss'
import React, { useCallback, useRef, useState } from 'react'
import debounce from 'lodash.debounce'
import {setSearchValue} from '../../redux/filter/slice'
import {  useDispatch } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("")

  
  // After click clear the input focus on the input
  const searchRef = useRef<HTMLInputElement>(null)
  const clearSearchValue = () => {
    dispatch(setSearchValue(""))
    setValue("")
    searchRef.current?.focus()
  }

  // Optimization the search field. Update setSerchValue after same time.

  const memorizedSearchValue = useCallback(debounce(str=>{
    dispatch(setSearchValue(str)) 
  },350),[])
  
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    memorizedSearchValue(event.target.value)
   
  }
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        ref={searchRef}
        className={styles.input}
        placeholder="Search a pizza..."
        value={value}
        onChange={onChangeInput}
      />
      {value && <svg
        className={styles.clearIcon}
        onClick={() => clearSearchValue()}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
      </svg>}
    </div>
  );
}

export default Search