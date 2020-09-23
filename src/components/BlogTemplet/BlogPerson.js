import React from 'react'

import styles from '../../stylesheets/templet.module.scss'
import PersonImage from '../../assets/Blog/Person'

const Person = (props) => {
    return(
        <>
            <div className={styles.box}>
                <div className={styles.personAlign}><PersonImage /></div>
                <div className={styles.boxalign}>
                <div className={styles.personTitle}>Akshat Kharbanda</div>
                <div className={styles.personSubtitle}>Struggled with B2B leadgen for 3.5 years. Took 1.5 years to perfect a system that throws out hot leads at the end.</div> 
                </div>
            </div>
        </>
    )
}

export default Person;