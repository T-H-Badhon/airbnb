/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

type HeadingProps = {
    title:string;
    subTitle?:string;
    center?:boolean;
}
const Heading = ({title,subTitle,center}:HeadingProps) => {
    return (
        <div className={`center?:'text-center':'text-start'`}>
            <div className="text-2xl font-bold">
                {title}
            </div>
            <div className="font-light text-neutral mt-2">
                {subTitle && <div className="text-sm">{subTitle}</div>}
            </div>
            
        </div>
    );
};

export default Heading;