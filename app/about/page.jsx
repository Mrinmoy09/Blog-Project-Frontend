import React from 'react'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>About Us</h1>
    <p className={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet
      enim et lobortis consequat. Nulla facilisi. Donec bibendum, nunc vitae
      pellentesque pretium, nisl massa semper nunc, vel pellentesque mauris
      purus quis purus. Nullam a felis eros. Sed elementum neque lectus,
      vitae venenatis nunc faucibus sit amet. Donec bibendum sapien sit amet
      risus elementum egestas. Suspendisse potenti. Nunc porttitor sapien ut
      eros pharetra molestie. Nulla facilisi. Pellentesque dignissim neque
      purus, sed dapibus leo lobortis sed. Donec ultricies quis libero vel
      pellentesque. Vestibulum ut urna eu nulla varius ultrices non sed
      mauris. Etiam sed convallis magna. Duis ac ultrices nulla, ut rhoncus
      magna.
    </p>
  </div>
  )
}

export default AboutPage