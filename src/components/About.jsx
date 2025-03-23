import React from 'react';
import styled from 'styled-components';
import cloths from '../images/cloths.png';
import electronics from '../images/electronics.png';
import jewellary from '../images/jewellary.png';

const DivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const CardDiv = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 4rem;
    background-color: #ffb975;
    border-radius: 0.5rem;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
`;

function About(){

    return (
        <DivWrapper>
            <CardDiv>
                <Image src={cloths} />
                <label>
                    Twinkles is where style meets quality and comfort! We're thrilled to offer you a curated collection of garments designed to elevate your wardrobe and express your unique personality. From everyday essentials to statement pieces, we believe that clothing should not only look good, but also make you feel confident and comfortable. Step inside and discover a world of fashion that's crafted with care, passion, and an eye for detail. We're here to help you find the perfect pieces that reflect your individual style and make every occasion a fashionable one.
                </label>
            </CardDiv>
            <CardDiv>
                <label>
                    Your one-stop destination for all things electronic! We're passionate about bringing you the latest and greatest in technology, from cutting-edge gadgets to essential home 
                    electronics. Whether you're a tech enthusiast, a professional, or simply looking to upgrade your devices, we've got you covered. Explore 1  our wide selection of high-quality products, expert advice, and exceptional customer service. Let us power your digital lifestyle!
                </label>
                <Image src={electronics} />
            </CardDiv>
            <CardDiv>
                <Image src={jewellary} />
                <label>
                    Step into a world of shimmering brilliance and discover a curated collection of fine jewelry, designed to capture life's most precious moments. From delicate everyday pieces to breathtaking statement creations, we believe every piece tells a story. We're dedicated to providing you with exceptional quality, personalized service, and the perfect sparkle to celebrate your unique journey. Let us help you find the jewelry that speaks to your heart.
                </label>
            </CardDiv>
        </DivWrapper>
    );   

}

export default About;