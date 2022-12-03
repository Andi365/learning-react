import divider from './images/pattern-divider-desktop.svg';
import dize from './images/icon-dice.svg'
import { useEffect, useState } from 'react';

type slip = {
    id: number,
    advice: string
}

// https://cors-anywhere.herokuapp.com/corsdemo
const FETCH_URL = "https://cors-anywhere.herokuapp.com/https://api.adviceslip.com";

function AdviceGenerator() {
    const [slip, setSlip] = useState<slip>()

    async function fetchAdvice() {
        const res = await fetch(`${FETCH_URL}/advice`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAdvice();
            console.log(data);
            
            return setSlip(data);
        }

        fetchData()
    }, [])

    return(
        <>
            <div className="bg-dark-blue rounded-xl p-6 mx-2 pb-10 text-center flex flex-col relative">
                <p className='text-neon-green text-lg tracking-widest py-6'>Advice {slip?.id}</p>
                <p className='text-xl text-white'>"{slip?.advice}"</p>
                <img src={divider} alt="" className='py-4' />

                <div className='absolute bottom-[-1.5rem] left-0 right-0 ml-auto mr-auto w-14 p-4 rounded-full bg-neon-green'>
                    <img src={dize} alt="" className='w-6 h-6'/>
                </div>
            </div>
        </>
    )
}

export default AdviceGenerator