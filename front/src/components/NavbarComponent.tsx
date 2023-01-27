import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function NavbarComponent() {

    return (
        <header className="dark:bg-gray-800 bg-white sticky w-full h-10 top-0 z-10">
            <div className="items-center flex justify-between pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-2">
                <div>
                    <h3 className="pt-1 text-[#467BB4] font-bold text-2xl">Prueba KSP</h3>
                </div>
                <div></div>
                <div className='pr-10 flex gap-5 transition-opacity ease-in-out delay-150'>
                    <div>
                        <a target="_blank" href="https://wa.me/525560145372" className="text-white hover:opacity-50" title="WhatsApp">
                            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://github.com/jediborre/ksp" className="text-white hover:opacity-50" title="GitHub">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/in/fernando-borrego-v/" className="text-white hover:opacity-50" title="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}