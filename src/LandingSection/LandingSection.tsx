import React from 'react'
import { Description, PresentationImage, SocialMediaIcon, SocialMediaList } from '.'

function LandingSection() {
    return (
        <header className='py-40 flex flex-col lg:flex-row align-middle'>
            <div className='flex flex-col mb-5 md:mb-0'>
                <SocialMediaList>
                    <SocialMediaIcon link={"https://www.facebook.com/profile.php?id=100059057542725"}
                        image={"/facebook.png"} />
                    <SocialMediaIcon link={"https://www.instagram.com/v_the_world_v?r=nametag"}
                        image={"/instagram.png"} />
                    <SocialMediaIcon link={"mailto:abderrazak.maallem@gmail.com"}
                        image={"/gmail.png"} />
                </SocialMediaList>
                <Description title={"Abderrazak Maallem"}
                    description={`Starting a new business or project? Starting the store you've
                                  always dreamed of having and looking to make a powerful brand for it?
                                  I will gladly be the designer who will make the amazing brand identity you desire !!`} />
            </div>
            <PresentationImage image={"/zak.jpg"} />
        </header >
    )
}

export default LandingSection
