import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'

export default function ContentContainer(props) {
    const contentComponent = props.content.component;
    console.log(props)

    return(
        <section className='body-section'>
            <Suspense fallback={<span>Loading...</span>}>
                {contentComponent}
            </Suspense>
            <div className={`${props.pageName}`}></div>
        </section>
    )
}