import bgmobile from './images/bg-main-mobile.png'
import bgdesktop from './images/bg-main-desktop.png'
import cardBack from './images/bg-card-back.png'
import cardFront from './images/bg-card-front.png'
import cardLogo from './images/card-logo.svg'

import { CardDetails } from "./carddetailscomponent"

interface props {
    placeholder: CardDetails,
    data: CardDetails
}

const CardsView = (props: props) => {
    const { holderName, cardNumber, expMonth, expYear, cvc } = props.data;

    return (
        <div className='relative bg-white lg:w-full lg:h-full'>
            <img src={bgmobile} className='w-full h-4/5 lg:hidden'/>
            <img src={bgdesktop} className='hidden h-full w-3/4 lg:block ' />
            <div className='absolute z-10 w-4/5 top-8 right-5 shadow-lg lg:top-auto lg:bottom-1/4 lg:w-4/6 lg:right-0'>
            <img className='w-full relative' src={cardBack} alt="" />
            <div className="absolute right-10 top-1/3 pt-4">
                <p className='text-sm tracking-wider'>{cvc === '' ? props.placeholder.cvc : cvc}</p>
            </div>
            </div>
            <div className='absolute shadow-lg z-20 w-4/5 bottom-5 left-5 lg:top-[20%] lg:bottom-auto lg:w-4/6 lg:right-7 lg:left-auto'>
            <img className='relative w-full' src={cardFront} />
            <div className="w-full h-full inset-0 absolute z-10 py-5 px-6 flex flex-col justify-between">
                <img className='w-14 h-8' src={cardLogo} />
                <div>
                <p className='text-xl md:text-lg tracking-widest py-4 w-full'>{cardNumber === '' ? props.placeholder.cardNumber : cardNumber}</p>
                <div className="flex justify-between w-full">
                    <p className='uppercase text-sm'>{holderName === '' ? props.placeholder.holderName : holderName}</p>
                    <p className='text-sm tracking-widest'>{expMonth === '' ? props.placeholder.expMonth : expMonth}/{expYear === '' ? props.placeholder.expYear : expYear}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CardsView