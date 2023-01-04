import React from 'react'

function SocialMediaIcon({ link, image }: any) {
    return (
        <a target="_blank" rel="noreferrer" className="hover:animate-updown delay-75 max-h-10 pr-5" href={link}>
            <img className="h-5 w-auto" src={image} alt="social media icon" />
        </a>
    )
}

export default SocialMediaIcon