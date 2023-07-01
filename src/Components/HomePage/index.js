import './index.css'
import Header from '../Header';
import Navbar from '../Nav';

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
        </main>
    )
}
export default HomePage;