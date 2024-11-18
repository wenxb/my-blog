"use client"
import {PersistGate} from "redux-persist/integration/react";
import {persistor} from "@/stores";

const PersistProvider = ({children}) => {
    return (
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    );
};

export default PersistProvider;
