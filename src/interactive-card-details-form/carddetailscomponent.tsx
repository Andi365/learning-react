import React from 'react'
import "@fontsource/space-grotesk"
import CardSimpleInput from './cardInputFields'

type Props = {

}

const Carddetailscomponent = (props: Props) => {
  return (
    <>
      <form className='mb-0 font-grotesk bg-white h-full px-4 pt-4' action="#">
        <CardSimpleInput labelText="Cardholder name" placeholder="e.g. Jane Appleseed" name='cardholder-name'/>
        <CardSimpleInput labelText="Card number" placeholder="e.g. 1234 5678 9123 0000" name='card-number'/>
        <div className='pt-4'>
          <div>
            <label htmlFor='exp-date' className='inline-block mb-1 uppercase text-very-dark-violet text-sm font-medium'>exp. date (MM/YY)</label>
            <div className='flex gap-2 flex-1'>
              <input className="px-4 rounded-lg border-gray-300 shadow-sm placeholder:text-gray-300 focus:ring-light-grayish-violet w-full" name='exp-date' type='text' value='' placeholder='MM' />
              <input className="px-4 rounded-lg border-gray-300 shadow-sm placeholder:text-gray-300 focus:ring-light-grayish-violet w-full" name='exp-date' type='text' value='' placeholder='YY' />
            </div>
          </div>
          <div>
            <label htmlFor="cvc" className='inline-block mb-1 uppercase text-very-dark-violet text-sm font-medium'>CVC</label>
          </div>
        </div>
      </form>
    </>
  )
}

export default Carddetailscomponent