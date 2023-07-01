import './index.css'
import Header from '../Header';
import Navbar from '../Nav';
import FooterFunc from '../Footer';
import lasag from './lasag.jpg'
import spag from './spag.jpg'

const HomePage = () => {
    return (
        <main className="hpmain">
            <Header />
            <Navbar />
            <section className='hpsection'>
                <h2>Welcome to little Lemon!</h2>
                <p style={{width: '400px', textAlign: 'center'}}>We are a locally owned business, dedicated to bringing high quality cuisine
                    to Chicago. Drop by!
                </p>
            </section>
            <section className='specials'>
                <h4>Daily Specials</h4>
                <div className='spdv'>
                    <article className='spar'>
                        <img src={spag} alt="spag"></img>
                        <div>Spaghetti, $8.99</div>
                    </article>
                    <article className='spar'>
                        <img src={lasag} alt="spag"></img>
                        <div>Lasagne, $9.99</div>
                    </article>
                </div>
            </section>
            <FooterFunc />
        </main>
    )
}
export default HomePage;