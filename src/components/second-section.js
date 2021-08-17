import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './second-section.module.css'
import './second-section.css'

const SecondSection = ({ heading, subheading,  content, image }) => (

<div className="how-container">
        <div className="left-container">
            <div className="left-content">
        {image && (
            <GatsbyImage className={styles.image} alt={subheading} image={image} />
            )}
        </div>
    </div>
        <div className="right-container">
            <div className="right-content">
            <h4>{heading}</h4>
            <p>{content}</p>
        </div>
    </div>
</div>
)

export default SecondSection
