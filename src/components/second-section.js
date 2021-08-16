import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './second-section.module.css'
import './second-section.css'

const SecondSection = ({ heading, subheading,  content, image }) => (

<div class="how-container">
    <div class="left-container">
        <div class="left-content">
        {image && (
            <GatsbyImage className={styles.image} alt={subheading} image={image} />
            )}
        </div>
    </div>
    <div class="right-container">
        <div class="right-content">
            <h4>{heading}</h4>
            <p>{content}</p>
        </div>
    </div>
</div>
)

export default SecondSection
