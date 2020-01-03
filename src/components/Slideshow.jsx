import React from 'react';
import {images} from '../slideshow_images/images'
import { Gallery, GalleryImage} from 'react-gesture-gallery'

function Slideshow() {
    const [index, setIndex] = React.useState(0)
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (index === images.length - 1) {
                setIndex(0)
            } else {
                setIndex(index + 1)
            }
        }, 2000)
        return () => clearInterval(interval)
    }, [index])
    return(
        <Gallery
            style={{
                heigth: '200px',
                width: 'auto', 
            }}
            index={index}
            onRequestChange= {i => {
                setIndex(i);
            }}
        >
            {images.map((image, i) => (
                <GalleryImage key={i} objectFit="fit" src={image} style={{height: '400px', width: 'auto'}}/>
            ))}
        </Gallery>
    )
}

export default Slideshow