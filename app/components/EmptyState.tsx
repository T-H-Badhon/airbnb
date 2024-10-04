type TEmptyState = {
    title?:string;
    subtitle?:string;
    showReset?:boolean;
}


const EmptyState = ({title,subtitle,showReset}:TEmptyState) => {
    return (
        <div>
            Empty
        </div>
    );
};

export default EmptyState;