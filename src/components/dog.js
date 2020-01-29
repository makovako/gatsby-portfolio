import React from 'react'
import styles from './dog.module.css'

export default (props) => (
    <div className={styles.dog}>
        <h2>{props.name}</h2>
        <p>{props.color}</p>
    </div>
)