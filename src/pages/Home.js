import React from 'react'
import Client from '../component/Client'
import Experts from '../component/Experts'
import Mid_section from '../component/Mid_section'
import Platform from '../component/Platform'
import Slider_image from '../component/Slider_image'
import Video_header from '../component/Video_header'

function Home() {
    return (
        <div>
            <Mid_section />
            <Experts />
            <Client />
            <Slider_image />
            <Platform />
            <Video_header />
        </div>
    )
}

export default Home
