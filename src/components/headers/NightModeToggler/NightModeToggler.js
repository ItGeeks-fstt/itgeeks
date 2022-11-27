import styles from './NightModeToggler.module.css'

import React, { useContext } from 'react'
import { ThemeContext } from '../../../App'

function NightModeToggler() {

    const ctx=useContext(ThemeContext)
    
    return (


    <label className={styles['switch']}>
    <input checked={ctx.theme==='dark'?true:false} onChange={ctx.togglerTheme} type="checkbox"/>
    <span className={styles['slider']}  ></span>
    </label>
     


  )
}

export default NightModeToggler