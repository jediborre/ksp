import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function FooterComponent() {
    return (
        <div className="w-full relative h-10 dark:bg-gray-800 bottom-0">
            <div className="absolute right-0 flex gap-3 mt-2">
                <div>
                    <h2 className="text-white"><span className='text-gray-400'>Realizado por:</span> Fernando Borrego Vargas</h2>
                </div>
                <div className="mr-10">
                    <h2 className="text-white">
                        <a href="tel:+525560145372" className='hover:text-cyan-300'>
                            <FontAwesomeIcon icon={faPhone} />
                            +52 55.6014.5372
                        </a>
                    </h2>
                </div>
            </div>
        </div>
    );
}