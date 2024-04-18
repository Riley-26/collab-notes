import {type RefObject, useState, useEffect, useRef} from "react"

export default function BackImg(){
    const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%"})
    const cardsRef = useRef<HTMLElement>(null)
    const [cursor, setCursor] = useState({ x: 0, y: 0})
    const [mouseOnCard, setMouseOnCard] = useState(false)

    const handleMouseMove = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (cardsRef.current !== null){
            const x = event.clientX
            const y = event.clientY
            setCursor({x: x, y:y})
        }
    }

    useEffect(() => {
        if (cardsRef.current && cursor.x !== null && cursor.y !== null){
            const cxPercentage = (cursor.x) * 100
            const cyPercentage = (cursor.y) * 100
            setGradientCenter({
                cx: `${cxPercentage}%`,
                cy: `${cyPercentage}%`
            })
        }
    }, [cursor, cardsRef])

    return (
        <main className="w-full h-screen flex place-items-center justify-center absolute z-[-1]">
            <section ref={cardsRef} onMouseMove={event => handleMouseMove(event)} onMouseEnter={() => setMouseOnCard(true)} onMouseLeave={() => setMouseOnCard(false)}>
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.2} stroke="currentColor" className="w-[800px] h-[800px]">
            <defs>
                <radialGradient 
                    id="blueGradient"
                    gradientUnits="userSpaceOnUse"
                    r="35%"
                    cx={gradientCenter.cx}
                    cy={gradientCenter.cy}
                    >
                    <stop stopColor="#93c5fd" />
                    <stop offset={1} stopColor="#404040"/>
                </radialGradient>
            </defs>
            <path  
                stroke="url(#blueGradient)" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
        </svg>
                </div>
            </section>
        </main>
    )
}