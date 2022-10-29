export default function Home(props) {
    const rootCtrl = props.rootCtrl;
    
    const desktopClasses = {
        tagline: 'tagline',
        headline: 'headline',
        kaleb: 'headline-item',
        and: 'headline-item headline-item-and',
        jessi: 'headline-item',
        date: 'home-date',
        location: 'home-location',
        locationName: 'home-location-name straight-font',
        locationStreet: 'home-location-street straight-font',
        locationCity: 'home-location-city straight-font'
    }
    const mobileClasses = {
        tagline: 'tagline-mobile',
        headline: 'headline-mobile',
        kaleb: 'headline-item-mobile',
        and: 'headline-item-mobile headline-item-and',
        jessi: 'headline-item-mobile',
        date: 'home-date-mobile',
        location: 'home-location-mobile',
        locationName: 'home-location-name straight-font',
        locationStreet: 'home-location-street straight-font',
        locationCity: 'home-location-city straight-font'
    }

    const classes = rootCtrl.isDesktop ? desktopClasses : mobileClasses;

    return (
        <div className="home-page">
            <span className={classes.tagline}>Come celebrate with</span>
            <div className={classes.headline}>
                <h2 className={classes.kaleb}>Kaleb</h2> 
                {/* <span className='headline-item headline-item-line'></span> */}
                <h2 className={classes.and}>&</h2>
                {/* <span className='headline-item headline-item-line'></span> */}
                <h2 className={classes.jessi}>Jessi</h2>
            </div>

            <span className={classes.date}>4/22/2023</span>

            <div className={classes.location}>
                <span className={classes.locationName}>Northern Stacks Event Center</span>
                <span className={classes.locationStreet}>38 Northern Stacks Drive</span>
                <span className={classes.locationCity}>Fridley, MN</span>
            </div>
        </div>
    )
}