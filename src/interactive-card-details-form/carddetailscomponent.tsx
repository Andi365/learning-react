import React, { useReducer, useState } from 'react'
import "@fontsource/space-grotesk/500.css"
import CardSimpleInput from './cardInputFields'
import './cardDetails.css'

interface CardDetails {
  holderName: string,
  cardNumber: string,
  expMonth: string,
  expYear: string,
  cvc: string
}

const initialState: CardDetails = {
  holderName: '',
  cardNumber: '',
  expMonth: '',
  expYear: '',
  cvc: ''
}



const Carddetailscomponent = () => {
  const [cardDetails, setCardDetails] = useState<CardDetails>(initialState)

  const {holderName, cardNumber, expMonth, expYear, cvc } = cardDetails;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = (e.target as HTMLInputElement);

    switch (name) {
      case 'holderName':
        const isOnlyText = (/^[a-z A-Z]+$/).test(value)
        console.log(isOnlyText);
        
        var regex = /^[a-zA-Z]+$/;
        break;
      case 'cardNumber':
        break;
    }
    
    setCardDetails({...cardDetails, [name]: value })

  }

  return (
    <>
      <form className='mb-0 font-grotesk bg-white h-full px-4 pt-4 md:max-w-xs' action="#">
        <CardSimpleInput labelText="Cardholder name" placeholder="e.g. Jane Appleseed" name='holderName' value={holderName}  handleOnChange={handleOnChange} classList='input-primary px-4 w-full'/>
        <CardSimpleInput labelText="Card number" placeholder="e.g. 1234 5678 9123 0000" name='cardNumber' value={cardNumber} handleOnChange={handleOnChange} classList='input-primary px-4 w-full'/>
        <div className='pt-4 grid grid-cols-2 gap-2'>
          <div className='flex flex-col'>
            <label htmlFor='exp-date' className='label-primary'>exp. date (MM/YY)</label>
            <div className='flex gap-2'>
              <input className="input-primary px-4 w-full" name='expMonth' type='text' value={cardDetails.expMonth} placeholder='MM' onChange={handleOnChange} />
              <input className="input-primary px-4 w-full" name='expYear' type='text' value={cardDetails.expYear} placeholder='YY' onChange={handleOnChange} />
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="cvc" className='label-primary'>CVC</label>
            <input className='input-primary' type="text" name="cvc" value={cvc} placeholder='CVC' onChange={handleOnChange}/>
          </div>
        </div>
        {/* <button className='w-full my-4 py-3 text-xl bg-very-dark-violet' type="submit">Confirm</button> */}
      </form>
    </>
  )

   // function handleChange(evt: any) {
    //   setState({ firstName: evt.target.value });
    // }

    // const [state, setState] = React.useState({
    //     firstName: ""
    //   })
    //   return (
    //     <form>
    //       <label>
    //         First name
    //         <input className='text-black'
    //           type="text"
    //           value={state.firstName}
    //           onChange={handleChange}
    //         />
    //       </label>
    //     </form>
    //   );
}

export default Carddetailscomponent