import React, { useEffect, useState } from "react";

export function ConnStatus({ isConn }) {
    
    const [hide, setHide] = useState(0);
    
    useEffect(() => {
        if (isConn) setTimeout(() => setHide(h => h-1), 1500);
        else setHide(0)
    }, [isConn, setHide])

    return (
        <div className={`flex items-center ${isConn ? "cursor-pointer" : ""}`}>
            {
                !hide ? <div className="px-1">
                            { isConn ? "connected" : "reconnecting"}
                        </div> : null
            }
            <div onClick={() => {
                if (isConn) {
                    setHide(0)
                    setTimeout(() => setHide(hide-1), 1500)
                }
            }} className={`rounded-full w-2 h-2 ${isConn ? "bg-green-500" : "bg-orange-500"}`}>
                {
                    isConn ? null : <div className={`rounded-full w-2 h-2  bg-orange-500 animate-ping`} />
                }
            </div>
        </div>
    )
}
