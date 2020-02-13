import React from "react"
import styles from "./container.module.css"
import Navigation from '../components/navigation'
import Footer from '../components/footer'
export default ({ children }) => (
  <div className={styles.container}>
    <Navigation></Navigation>
    {children}
    <Footer></Footer>
  </div>
)
