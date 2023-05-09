const Features = () => {
    return (
        <section id="features">
            <div className="container flex flex-col px-12 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row xl:px-24">
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                        Whats different about Manage?
                    </h2>
                    <p className="text-center text-darkGrayishBlue md:text-left xl:max-w-[450px] lg:max-w-[400px] md:max-w-[300px]">
                    Manage is a comprehensive software management company that helps organizations streamline their operations by managing their software, 
                    employee data, and more. What sets us apart from other companies is our focus on providing a customized and personalized experience to 
                    each of our clients. We understand that every organization has unique needs, and we work closely with our clients to tailor our solutions 
                    to meet those needs. Our software management solutions are designed to be user-friendly and easy to implement, with minimal disruption
                    to your business operations.
                    </p>
                </div>
                <div className="flex flex-col space-y-8 md:w-1/2">{/*Numbered list*/}

                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">{/*container - item one*/}
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">{/*heading*/}
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                    01
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">{/*Mobile heading text*/}
                                    Track company-wide progress
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="sm:hidden mb-4 text-lg font-bold md:block">{/*Larger device heading text*/}
                                Track company-wide progress
                            </h3>
                            <p className="text-darkGrayishBlue">
                                See how your day-to-day tasks fit into the wider vision.
                                Go from tracking progress at the milestone level all the way
                                done to the smallest of details. Never lose sight of the bigger
                                picture again.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">{/*container - item two*/}
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">{/*heading*/}
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                    02
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">{/*Mobile heading text*/}
                                    Advanced built-in reports
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="sm:hidden mb-4 text-lg font-bold md:block">{/*Larger device heading text*/}
                                Advanced built-in reports
                            </h3>
                            <p className="text-darkGrayishBlue">
                                Set internal delivery estimates and track progress toward
                                company goals. Our customisable dashboard helps you build out
                                the reports you need to keep key stakeholders informed.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">{/*container - item three*/}
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">{/*heading*/}
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                    03
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">{/*Mobile heading text*/}
                                    Everything you need in one place
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="sm:hidden mb-4 text-lg font-bold md:block">{/*Larger device heading text*/}
                                Everything you need in one place
                            </h3>
                            <p className="text-darkGrayishBlue">
                                Stop jumping from one service to another to communicate, store
                                files, track tasks and share documents. Manage offers an
                                all-in-one team productivity solution.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features