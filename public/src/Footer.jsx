import './Footer.css'
export default function Footer(){
    return(
        <footer>
    <p>Made with <i className="fa-solid fa-heart" style={{color:'#ff4013'}}></i> by sayak</p>
    <p>&copy;&nbsp;Weatheroon private limited</p>
    
    <div className="refLink-outbox">
        <span className="refLink">
            <a href="https://www.facebook.com/profile.php?id=100095210420752"><i className="fa-brands fa-facebook fa-xl"></i></a>
        </span>
        <span className="refLink">
            <a href="https://www.linkedin.com/in/sayak-chowdhury-515ab5273/"><i className="fa-brands fa-linkedin fa-xl"></i></a>
        </span>
        <span className="refLink">
            <a href="https://github.com/sayak2103"><i className="fa-brands fa-github fa-xl"></i></a>
        </span>
    </div>
    </footer>
    );
}