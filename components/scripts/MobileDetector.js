import { useState, useEffect } from "react";

const MobileDetector = () => {
    const [deviceType, setDeviceType] = useState(false);

    useEffect(() => {
        let hasTouchScreen = false;
        if ("maxTouchPoints" in navigator) {
            hasTouchScreen = navigator.maxTouchPoints > 0;
        } else if ("msMaxTouchPoints" in navigator) {
            hasTouchScreen = navigator.msMaxTouchPoints > 0;
        } else {
            const mQ = window.TouchEvent || ('maxTouchPoints' in navigator && navigator.maxTouchPoints > 0) || ('msMaxTouchPoints' in navigator && navigator.msMaxTouchPoints > 0);
            hasTouchScreen = mQ;
        }

        if (hasTouchScreen) {
            setDeviceType(true);
        } else {
            setDeviceType(false);
        }
    }, []);

    return deviceType;
};

export default MobileDetector;
