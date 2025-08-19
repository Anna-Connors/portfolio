import React from "react";
import * as styles from "../components/accordion.module.css"
import { useState } from "react";

//This is to accordion the text sections on the about and project pages
//for readability

const AccordionSection = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <div className={styles.accordionItem}>
            <h2
                className={styles.accordionHeader}
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter' || e.key === '') {
                        setIsOpen(!isOpen)
                    }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
            >
                {title}
                <span className={isOpen ? styles.iconOpen : styles.iconClosed}>
                    {isOpen ? '-' : '+'}
                </span>
            </h2>
            {isOpen && (
                <div className={styles.accordionContent}>
                    {children}
                </div>
            )}
        </div>
    )
}

export default AccordionSection