const handleButtonClick = () => {
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('menu');
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
}


const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between xl:mx-20">
        <div className="pt-2">
          <img src="src/assets/logo.svg" alt="logo" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
          <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
          <a href="#" className="hover:text-darkGrayishBlue">Product</a>
          <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
          <a href="#" className="hover:text-darkGrayishBlue">Community</a>
        </div>
        <a href="#" className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
        <button onClick={handleButtonClick} id="menu-btn" className="block hamburger md:hidden focus:outline-none">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div id="menu" className="hidden absoulte flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-lg">
          <a href="#">Pricing</a>
          <a href="#">About Us</a>
          <a href="#">Product</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar