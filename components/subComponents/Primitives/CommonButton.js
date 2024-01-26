import React from 'react';
import Modal from "./Modal";

function CommonButton(props) {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClick = (e) => {
        if (props.function) {
            props.function(e);
        }
        else {
            if (props.type) {
                return null
            } else {
                handleOpen();
            }
        }
    };

    const commonStyles = {
        base: "w-full h-full pr-1.5 pb-1.5",
        container: "relative w-full h-full",
        overlay: "absolute inset-0 w-full h-full border border-white justify-center flex items-center",
        button: "absolute top-1.5 left-1.5 w-full h-full border border-white flex items-center pl-4 hover:bg-pink",
        centralButton: "absolute top-1.5 left-1.5 w-full h-full border border-white flex items-center justify-center text-center hover:bg-pink",
    };

    return (
        <div className={commonStyles.base}>
            <div className={commonStyles.container}>
                <div className={commonStyles.overlay}></div>
                <button
                    type={props.type}
                    className={props.isCentral ? commonStyles.centralButton : commonStyles.button}
                    onClick={handleClick}
                >
                    <p className="text-lg">{props.text}</p>
                </button>
                <Modal isOpen={open} onClose={handleClose}></Modal>
            </div>
        </div>
    );
}

export default CommonButton;
