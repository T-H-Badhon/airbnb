/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons";
import qs from 'query-string';


type TCategoryBox = {
    label:string;
    icon:IconType
    description:string;
    selected?:boolean
}

const CategoryBox = ({label,icon:Icon,description,selected}:TCategoryBox) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick =() => {
        let clientQuery = {};
        if (params) {
            clientQuery = qs.parse(params.toString())
        }

        const updatedQuery:any ={
            ...clientQuery,
            category:label
        }
        if(params?.get('category')=== label){
            delete updatedQuery.category
        }
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        },{skipNull:true})
        router.push(url)
    
        
    }
    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer 
        ${selected ? 'border-b-neutral-800':'border-transparent'}
        ${selected ? 'text-neutral-800':'text-neutral-300'}
        
        `}>
            <Icon size={26} />
            <div className="font-medium text-sm">
                {label}
            </div>
        </div>
    );
};

export default CategoryBox;