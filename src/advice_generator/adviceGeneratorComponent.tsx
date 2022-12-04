import divider from './images/pattern-divider-desktop.svg';
import dize from './images/icon-dice.svg'
import { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';

type Advice = {
    slip: {
        id: number,
        advice: string
    }
}

// https://cors-anywhere.herokuapp.com/corsdemo
const FETCH_URL = "https://api.adviceslip.com";

function AdviceGenerator() {
    const [advice, setAdvice] = useState<Advice>()
    const [loading, setLoading] = useState<Boolean>(true);

    async function fetchAdvice() {
        const res = await fetch(`${FETCH_URL}/advice`, {
            method: 'GET',
            headers: {
                
            }
        });
        const data = await res.json();
        return data;
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAdvice();
            setAdvice(data);
            setLoading(false);
        }

        fetchData()
    }, [])

    function Placeholder() {
        return (
            <ContentLoader 
                speed={2}
                width={'100%'}
                height={'100%'}
                viewBox="0 0 340 84"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="3" ry="3" width="67" height="11" /> 
                <rect x="76" y="0" rx="3" ry="3" width="140" height="11" /> 
                <rect x="127" y="48" rx="3" ry="3" width="53" height="11" /> 
                <rect x="187" y="48" rx="3" ry="3" width="72" height="11" /> 
                <rect x="18" y="48" rx="3" ry="3" width="100" height="11" /> 
                <rect x="0" y="71" rx="3" ry="3" width="37" height="11" /> 
                <rect x="18" y="23" rx="3" ry="3" width="140" height="11" /> 
                <rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
            </ContentLoader>
        )
    }

    function renderFact() {
        return (
            <>
                <p className='text-neon-green text-lg tracking-widest py-6'>Advice {advice!.slip.id}</p>
                <p className='text-xl text-white'>"{advice!.slip.advice}"</p>
                <img src={divider} alt="" className='py-4' />

                <div className='absolute bottom-[-1.5rem] left-0 right-0 ml-auto mr-auto w-14 p-4 rounded-full bg-neon-green'>
                    <img src={dize} alt="" className='w-6 h-6'/>
                </div>
            </>
        )
    }

    return(
        <>
            <div className="bg-dark-blue rounded-xl p-6 mx-auto pb-10 text-center max-w-[50%] flex flex-col absolute left-0 right-0 top-1/2 translate-y-[-50%]">
                {loading ? Placeholder(): renderFact()}
            </div>
        </>
    )
}

export default AdviceGenerator