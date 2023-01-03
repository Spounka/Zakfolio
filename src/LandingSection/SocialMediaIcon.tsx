import React from 'react'

function SocialMediaIcon({ link, image }: any) {
    return (
        <a className="max-h-10 pr-5" href={link}>
            <img className="max-h-5" src={image} alt="social media icon" />
        </a>
    )
}

export default SocialMediaIcon