import images from './images/address.png';


const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-div'>
                <div>
                    <p>Home</p>
                    <p>News</p>
                    <p>Contact Us</p>
                    <p>Promotions</p>
                </div>
                <div>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Telegram</p>
                    <p>TikTok</p>
                </div>
                <div>
                    <p>21 Erlinda Drive Vermont Royale Subd.</p>
                    <p>Brgy. Mayamot Antipoli Rizal 1870.</p>
                    <p>+639665839308</p>
                    <p>marc.edwin.mamaradlo@gmail.com</p>
                </div>
                <div>
                    <img className='footer-img' src={images} alt='map address' />
                </div>
            </div>
        </div>
    )
}


export default Footer;