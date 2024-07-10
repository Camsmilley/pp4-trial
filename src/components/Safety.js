import React from 'react';
import img from '../Assets/img.jpg'
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg';
import img4 from '../Assets/img4.jpeg';
import img5 from '../Assets/img5.jpg';
import img6 from '../Assets/img6.jpg';
import img7 from '../Assets/img7.jpg';
import img8 from '../Assets/img8.webp';
import img9 from '../Assets/img9.jpg';
import SurfingCheck from '../components/SurfingCheck';

const Data = [
    {
        id:1,
        imgSrc: img,
        character: 'Always surf between the black and white chequered flags',
        description: 'Follow the advice of our lifeguards. '
    },

    {
        id:2,
        imgSrc: img2,
        character: 'Surf with a mate',
        description: 'Especially in a big swell. Surfers look out for one another. '
    },

    {
        id:3,
        imgSrc: img3,
        character: 'Tell someone you’re going surfing',
        description: 'Let someone know when and where you are going out and, importantly, when you expect to be back. '
    },

    {
        id:4,
        imgSrc: img4,
        character: 'Understand surf etiquette and rights of way',
        description: 'Consider other surfers and water users'
    },

    {
        id:5,
        imgSrc: img5,
        character: 'Check weather and tides',
        description: 'Before you set out, check the local forecast for wind, swell and tide.'
    },

    {
        id:6,
        imgSrc: img6,
        character: 'Know your limits',
        description: 'It’s easy to be caught out. Don’t challenge yourself too early and know your limits.'
    },

    {
        id:7,
        imgSrc: img7,
        character: 'Be aware of rip currents',
        description: 'Rips are strong currents running out to sea, which can quickly drag people and debris away from the shallows of the shoreline and out to deeper water.'
    },

    {
        id:8,
        imgSrc: img8,
        character: 'Always wear a leash',
        description: 'So you don’t become separated from your board.'
    },

    {
        id:9,
        imgSrc: img9,
        character: 'Wear the right wetsuit',
        description: 'ear an appropriate wetsuit for surfing. As well as keeping you warm, wetsuits give some added protection from scrapes on rocks or impacts from other surfboards.'
    } 

]

const Safety = () => {
    return(
        <>
        <SurfingCheck/>
        <section className='main container section'>
            <div className='secTitle'>
                <div className='title'>
                    <h3>Surfing Safety Checklist</h3>
                </div>
                <small>Nine Simple Check for Safe Surfing</small>
                    <h4></h4>
                <div className='secContent grind'>
                {
                    Data.map(({id ,imgSrc ,character ,description}) =>{
                        return(
                            <div key={id}className='singleDestination'>
                                <div className='imageDiv'>
                                    <img src={imgSrc} alt={character}></img>
                                </div>
                            <div className='cardInfo'>
                                <h4 className='destTitle'>{character}</h4>

                                <div className='desc'>
                                    <p>{description}</p>
                                </div>

                            </div>
                            </div>
                        )
                    }

                    
                )
                }
                </div>
            </div>
        </section>
        </>
)
}

export default Safety;


