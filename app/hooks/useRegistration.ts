import {create} from 'zustand';

type RegistrationStore = {
    open:boolean;
    onOpen:() =>void;
    onClose:() =>void;
}

const useRegistration = create<RegistrationStore>((set) => ({
    open: false,
    onOpen:()=> set({open:true}),
    onClose:()=> set({open:false}),

}))
export default useRegistration;