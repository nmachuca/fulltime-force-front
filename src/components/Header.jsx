import images from './../assets/images';

export const Header = () => {
    return (
        <header>
            <div className="header-container">
                <img src={images.logo} alt='logo' className='logo'></img>
                <h1 className='title'>Fulltime Force Front</h1>
            </div>
        </header>
    );
}