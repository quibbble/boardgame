import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer"
import { Health } from "../../api/API";

export function DownPage({ config }) {

    const navigate = useNavigate();

    useEffect(() => {
        const checkHealth = async () => {
            let response = await Health(config.host);
            if (response && response.status === 200) {
                let gameID = sessionStorage.getItem("gameID")
                if (gameID) navigate(`/${ gameID }`);
                else navigate("/");
            }
        }
        checkHealth();

        const interval = setInterval(async () => {
            checkHealth();
        }, 10000);
        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center my-8 md:my-12">
            <div className="w-full flex flex-col items-center mt-48">
                <p className="font-black text-4xl italic">We'll be right back!</p>
                <p className="mb-1 font-thin"><span className={`text-3xl font-black font-['${ config.font }'] text-${ config.color } mr-1`}>{ config.key }</span> is down for maintenance</p>
            </div>
            <div className="absolute bottom-8 md:bottom-12">
                <Footer />
            </div>
       </div>
    )
}
