"use client"

export default function Page(){
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex w-full h-2/3">
                <div className="w-1/3 card">
                    <h1 className="h1Bg">WELCOME, RILEY</h1>
                    <hr className="hrShadow" />
                    <div className="innerCard mt-2 p-4">
                        
                    </div>
                </div>
                <div className="w-2/3 card">
                    <h1 className="h1Bg">STATS</h1>
                    <hr className="hrShadow" />
                    <div className="innerCard mt-2">
                        
                    </div>
                </div>
            </div>
            <div className="flex w-full h-1/3">
                <div className="w-2/3 card">
                    <h1 className="h1Bg">MY RECENT</h1>
                    <hr className="hrShadow" />
                    <div className="innerCard mt-2">

                    </div>
                </div>
                <div className="w-1/3 card justify-center items-center text-center">
                    <h1 className="text-2xl hover:text-blue-300 transition-all my-4 cursor-pointer py-2 px-4 rounded-lg max-w-[350px]">CHANGE USERNAME/PASSWORD</h1>
                    <h1 className="text-2xl hover:text-red-400 transition-all my-4 cursor-pointer py-2 px-4 rounded-lg">LOG OUT</h1>
                </div>
            </div>
        </div>
    )
}