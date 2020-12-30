import React from 'react';
import {useDispatch ,useSelector} from 'react-redux';
import {
  increment,
  selectCount
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);

  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Press buton
        </button>
        <span className={styles.value}>{count}</span>
      </div> 
    </div>
  );
}
