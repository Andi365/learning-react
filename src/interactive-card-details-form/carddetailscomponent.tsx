import React from 'react'
import "@fontsource/space-grotesk/500.css"
import CardSimpleInput from './cardInputFields'

type Props = {

}

const Carddetailscomponent = (props: Props) => {
  return (
    <>
      <form className='mb-0 font-grotesk bg-white h-full px-4 pt-4 md:max-w-xs' action="#">
        <CardSimpleInput labelText="Cardholder name" placeholder="e.g. Jane Appleseed" name='cardholder-name'/>
        <CardSimpleInput labelText="Card number" placeholder="e.g. 1234 5678 9123 0000" name='card-number'/>
        <div className='pt-4 grid grid-cols-2 gap-2'>
          <div className='flex flex-col'>
            <label htmlFor='exp-date' className='inline-block mb-1 uppercase text-very-dark-violet text-sm font-medium'>exp. date (MM/YY)</label>
            <div className='flex gap-2'>
              <input className="px-4 rounded-lg border-gray-300 shadow-sm placeholder:text-gray-300 focus:ring-light-grayish-violet w-full" name='exp-date' type='text' value='' placeholder='MM' />
              <input className="px-4 rounded-lg border-gray-300 shadow-sm placeholder:text-gray-300 focus:ring-light-grayish-violet w-full" name='exp-date' type='text' value='' placeholder='YY' />
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="cvc" className='inline-block mb-1 uppercase text-very-dark-violet text-sm font-medium'>CVC</label>
            <input className='rounded-lg border-gray-300 shadow-sm placeholder:text-gray-300 focus:ring-light-grayish-violet' type="text" name="cvc" id="" placeholder='CVC' />
          </div>
        </div>
        <button className='w-full my-4 py-3 text-xl bg-very-dark-violet' type="submit">Confirm</button>
      </form>
    </>
  )
}

export default Carddetailscomponent