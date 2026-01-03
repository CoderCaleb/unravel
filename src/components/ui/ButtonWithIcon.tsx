import React from "react";

export default function ButtonWithIcon({buttonText, buttonIcon}: {buttonText: string, buttonIcon: React.ReactNode}) {
    return(
        <div className="flex gap-3 px-7 py-3 bg-brand rounded-soft text-white cursor-pointer">
            {buttonIcon}
            <p className="text-white text-normal-size font-bold">{buttonText}</p>
        </div>
    )
}