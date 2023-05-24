const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center pb-8">
        <h2 className="text-4xl font-bold text-center">
          Still not sure? Check out what our current clients say!
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src="src/assets/avatar-anisha.png" alt="picture" className="w-16 -mt-14"/>
            <h5 className="text-lg font-bold">Anisha Lin</h5>
            <p className="text-sm text-darkGrayishBlue max-w-[350px]">
              “Manage has supercharged our teams workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          {/*hidden mobile, shown larger device*/}
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src="src/assets/avatar-ali.png" alt="picture" className="w-16 -mt-14"/>
            <h5 className="text-lg font-bold">Ali Swansin</h5>
            <p className="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          {/*hidden larger device, show mobile*/}
          <div className="md:hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src="src/assets/avatar-ali.png" alt="picture" className="w-16 mt-8"/>
            <h5 className="text-lg font-bold">Ali Swansin</h5>
            <p className="text-sm text-darkGrayishBlue max-w-[350px]">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          {/*hidden mobile, shown larger device*/}
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src="src/assets/avatar-richard.png" alt="picture" className="w-16 -mt-14"/>
            <h5 className="text-lg font-bold">Richard Panski</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Using Manage, we have successfully cancelled numerous subscriptions.
              This has eliminated cross-channel confusion and improved everyones focus.”
            </p>
          </div>
          {/*hidden larger device, show mobile*/}
          <div className="md:hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src="src/assets/avatar-richard.png" alt="picture" className="w-16 mt-8"/>
            <h5 className="text-lg font-bold">Richard Panski</h5>
            <p className="text-sm text-darkGrayishBlue max-w-[350px]">
              “Using Manage, we have successfully cancelled numerous subscriptions.
              This has eliminated cross-channel confusion and improved everyones focus.”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials