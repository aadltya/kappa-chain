import logofoot from "./../../../public/apple.png"

export const FooterDev = () =>  {
    return <div>
    
    <footer className="bg-neutral-950">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <hr className="my-6 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="" className="flex items-center mb-4">
                    <img src={logofoot.src} className="h-8 me-3 rounded-md" alt="wpl Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Kappa Ai</span>
                </a>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Building in public at <a target="_blank" href="https://x.com/Kappaa_Ai" className="text-blue-500 ml-1" >@Kappaa_Ai</a></span>
            </div>
            <div className="grid grid-cols-2 gap-8 ">
                
                <div>
                    <h2 className="mb-6 text-base font-bold text-white">Join Us</h2>
                    <ul className="font-light">
                        <li className="mb-4 hover:text-gray-500 text-white">
                            <a href="https://github.com/KappaAl" target="_blank" className="hover:underline ">Github</a>
                        </li>
                        <li className="mb-4 hover:text-gray-500 text-white" >
                            <a href="https://x.com/Kappaa_Ai" target="_blank" className="hover:underline">Twitter</a>
                        </li>
                        <li className="hover:text-gray-500 text-white" >
                            <a href="" target="_blank" className="hover:underline">Contact Address</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

</div>
}