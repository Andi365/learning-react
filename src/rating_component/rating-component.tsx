import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import iconstar from "./images/icon-star.svg";
import thankyou from './images/thank-you.svg';
import '../App.css'
import './rating.css'

function RatingComponent() {
    const [submitted, setSubmitted] = useState<boolean>()
    const [rating, setRating] = useState<string>()
    const ratings = ["1", "2", "3", "4", "5"];
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(event.target);
        
        setSubmitted(true)
    }

    function handleRating(event: React.MouseEvent<HTMLInputElement>) {
        console.log((event.target as HTMLInputElement).value);
        setRating((event.target as HTMLInputElement).value);
    }

    function ThankYou() {
        return (
            <div className="text-left bg-dark-blue m-auto p-6 w-3/5 rounded-xl flex flex-col items-center">
                <img src={thankyou} className="w-32 m-4" alt="" />
                <p className='text-submit-orange py-2 bg-new-gray rounded-3xl p-4'>You selected {rating} out of 5</p>
                <h2 className='text-3xl py-2 pt-6'>Thank you!</h2>
                <p className='text-md text-center pb-4 text-light-gray'>We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
            </div>
        )
    }

    function Rating() {
        return (
            <div className="text-left bg-dark-blue m-auto p-6 w-3/5 min-h-min rounded-xl">
                <div className='bg-dark-blue w-10 h-10 flex items-center justify-center rounded-full'>
                    <img src={iconstar} className="w-4 h-4" alt="" />
                </div>
                <h1 className='text-3xl text-white py-4'>How did we do?</h1>
                <p className='text-md text-light-gray'>Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!</p>
                <ol className='flex w-full flex-auto justify-between py-4'>
                    {ratings.map((number, index) => (
                        <input type="button" key={index} className={"text-light-gray bg-slate-800 hover:bg-submit-orange w-12 h-12 rounded-full flex items-center justify-center" + (rating == number ? ' bg-slate-700' : '')} onClick={handleRating} value={number}/>
                    ))}
                </ol>
                <button className='flex flex-auto w-full bg-submit-orange rounded-3xl justify-center mb-4' type="submit">SUBMIT</button>
            </div>
        )
    }
    
    
    return (
        <form className='flex w-full' action="" onSubmit={handleSubmit}>
            {
            submitted ? 
            <ThankYou /> : 
            <Rating />
            }
        </form>
    )
}
export default RatingComponent
