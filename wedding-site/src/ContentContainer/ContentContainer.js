import React, { Suspense } from 'react'

export default function ContentContainer(props) {
    const contentComponent = props.content.component;

    return(
        <section className='body-section'>
            
            <Suspense fallback={<span>Loading...</span>}>
                <div className='content-container'>
                    {contentComponent}
                </div>
            </Suspense>
            <div className={`${props.pageName}`}></div>
            
        </section>
    )
}