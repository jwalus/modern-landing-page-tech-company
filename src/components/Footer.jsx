const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0 xl:px-24">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div>
            <img src="src/assets/logo-white.png" alt='logo' className="h-8 md:h-6" />
          </div>
          <div className="flex justify-center space-x-4 sm:pb-4">
            <a href="#">
              <img src="src/assets/icon-facebook.png" alt="social_icon" className="lg:h-8 md:h-5" />
            </a>
            <a href="#">
              <img src="src/assets/icon-youtube.png" alt="social_icon" className="lg:h-8 md:h-5" />
            </a>
            <a href="#">
              <img src="src/assets/icon-pinterest.png" alt="social_icon" className="lg:h-8 md:h-5" />
            </a>
            <a href="#">
              <img src="src/assets/icon-twitter.png" alt="social_icon" className="lg:h-8 md:h-5" />
            </a>
            <a href="#">
              <img src="src/assets/icon-instagram.png" alt="social_icon" className="lg:h-8 md:h-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
  <div className="flex xl:mx-20 lg:mx-10 md:mx-4 sm:mx-10">
    <div className="flex flex-col space-y-3 text-white">
      <a href="" className="hover:text-brightRed">Home</a>
      <a href="" className="hover:text-brightRed">Pricing</a>
      <a href="" className="hover:text-brightRed">Products</a>
      <a href="" className="hover:text-brightRed">About</a>
    </div>
  </div>
  <div className="flex mx-4">
    <div className="flex flex-col space-y-3 text-white">
      <a href="" className="hover:text-brightRed">Careers</a>
      <a href="" className="hover:text-brightRed">Community</a>
      <a href="" className="hover:text-brightRed">Privacy</a>
    </div>
  </div>
</div>
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input type="text"
                className="flex-1 px-4 md:px-2 rounded-full focus:outline-none"
                placeholder="Message..."
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Send</button>
            </div>
          </form>
          <div className="hidden text-white md:block">Copyright &copy; 2023, All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer