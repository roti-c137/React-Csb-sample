/* eslint-disable no-unused-vars */
import React, { useState, useRef, useCallback, useEffect } from "react";

export default function LeetCode() {
    const [merchantDetail, setMerchantDetail] = useState({});
    const [productData, setProductData] = useState([]);

    function getMerchantDetail() {
        setMerchantDetail({ id: "MBB100" });
        // setProductData([id:])
    }

    useEffect(() => {
        console.log("howdy");
        getMerchantDetail();
    }, []);

    return <div />;
}
