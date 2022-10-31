import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

const HomePage= () => {


    const isReceived = useSelector((state) => state.bitcoin.isReceived);
    const loading = useSelector((state) => state.bitcoin.loading);
    const error = useSelector((state) => state.bitcoin.error);
    const data = useSelector((state) => state.bitcoin.data);

    const dispatch = useDispatch();

    return (
        <div>
            home page
        </div>
    );
}

export default HomePage;
