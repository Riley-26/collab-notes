"use client"

export default function Page(){
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex w-full h-2/3">
                <div className="w-1/3 card">
                    <h1 className="h1Bg">CREATE NEW NOTE</h1>
                    <hr className="hrShadow" />
                    <div className="innerCard mt-2">

                    </div>
                </div>
                <div className="w-2/3 flex flex-col">
                    <div className="w-2/2 h-1/2 card">
                        <h1 className="h1Bg">MY NOTES</h1>
                        <hr className="hrShadow" />
                        <div className="innerCard mt-2">
                            Hello
                        </div>
                    </div>
                    <div className="w-2/2 h-1/2 card">
                        <h1 className="h1Bg">JOINED NOTES</h1>
                        <hr className="hrShadow" />
                        <div className="innerCard mt-2">

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-1/3">
                <div className="w-2/3 card">
                    <h1 className="h1Bg">LATEST EDITS</h1>
                    <hr className="hrShadow" />
                    <div className="innerCard mt-2">

                    </div>
                </div>
                <div className="w-1/3 card">
                    <h1 className="h1Bg">RECENT</h1>
                    <hr className="hrShadow" />
                    <div className="innerCard mt-2">

                    </div>
                </div>
            </div>
        </div>
    )
}