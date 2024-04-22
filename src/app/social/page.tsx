"use client"

export default function Page(){
    return (
        <div className="flex w-full h-full">
            <div className="flex flex-col w-1/3 mr-2">
                <div className="h-1/3 w-full animCard">
                    <div className="card">
                        <div className="innerCard">
                            <h1>Friend count</h1>
                        </div>
                    </div>
                </div>
                <div className="h-2/3 w-full animCard">
                    <div className="card">
                        <h1 className="h1Bg">FRIEND LIST</h1>
                        <hr className="hrShadow" />
                        <div className="innerCard">

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-1/3 mr-2">
                <div className="h-2/3 w-full animCard">
                    <div className="card">
                        <h1 className="h1Bg">MY SHARED NOTES</h1>
                        <hr className="hrShadow" />
                        <div className="innerCard mt-2">

                        </div>
                    </div>
                </div>
                <div className="h-1/3 w-full animCard">
                    <div className="card">
                        <h1 className="h1Bg">FRIEND REQUESTS</h1>
                        <hr className="hrShadow" />
                        <div className="innerCard mt-2">

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-1/3">
                <div className="h-2/3 w-full animCard">
                    <div className="card">
                        <h1 className="h1Bg">JOINED NOTES</h1>
                        <hr className="hrShadow" />
                        <div className="innerCard mt-2">

                        </div>
                    </div>
                </div>
                <div className="h-1/3 w-full animCard">
                    <div className="card">
                        <h1 className="h1Bg">RECENTLY ADDED</h1>
                        <hr className="hrShadow" />
                        <div className="innerCard mt-2">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}