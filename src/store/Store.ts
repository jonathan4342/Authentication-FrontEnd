import {configureStore} from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { setupListeners } from "@reduxjs/toolkit/dist/query";


export const store= configureStore({
    reducer:{
        
    }
})

export type RootState= ReturnType<typeof store.getState>

export const useAppSelector=()=>useSelector((state:RootState)=>state)

setupListeners(store.dispatch)