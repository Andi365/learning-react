import React, { useReducer, useState } from 'react'
import "@fontsource/space-grotesk/500.css"
import CardsView from './CardsView'
import CardForm from './CardForm'
import './cardDetails.css'

export interface CardDetails {
  holderName: string,
  cardNumber: string,
  expMonth: string,
  expYear: string,
  cvc: string
}

const placeholderState: CardDetails = {
  holderName: 'Jane Appleseed',
  cardNumber: '0000 0000 0000 0000',
  expMonth: '00',
  expYear: '00',
  cvc: '000'
}

const Carddetailscomponent = () => {
  const [cardDetails, setCardDetails] = useState<CardDetails>({ holderName: '', cardNumber: '', expMonth: '', expYear: '', cvc: ''})
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const testInput = (regex: RegExp, value: string) => {
    return (regex).test(value);
  } 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormSubmitted(true);
  }
  
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = (e.target as HTMLInputElement);
    var validInput = false;
    switch (name) {
      case 'cardNumber':
        validInput = testInput(/^[ 0-9]{0,19}$/, value);
        if(validInput) {
          const formattedCardNum = value.replace(/(\d{4})(\d)/, "$1 $2");
          setCardDetails({...cardDetails, [name]: formattedCardNum})
        }
        break;
      case 'holderName':
        validInput = testInput(/^[ a-zA-Z]*$/, value);
        if(validInput) setCardDetails({...cardDetails, [name]: value }); 
        break;
        case 'expMonth':
        validInput = testInput(/^([ 0-9]|0[1-9]|1[0-2]|)$/, value);
        if(validInput) setCardDetails({...cardDetails, [name]: value }); 
        break;
        case 'expYear':
          validInput = testInput(/^[ 0-9]{0,2}$/, value);
          if(validInput) setCardDetails({...cardDetails, [name]: value }); 
          break;
          case 'cvc': 
          validInput = testInput(/^[ 0-9]{0,3}$/, value);
          if(validInput) setCardDetails({...cardDetails, [name]: value }); 
        break;
    }
  }

  return (
    <div className='w-full h-screen font-grotesk bg-white overflow-y-scroll grid grid-rows-[40%_1fr] lg:grid-rows-none lg:grid-cols-[40%_1fr]'>
      <CardsView placeholder={placeholderState} data={cardDetails} />
      <CardForm placeholder={placeholderState} data={cardDetails} isSubmitted={formSubmitted} handleOnChange={handleOnChange} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Carddetailscomponent