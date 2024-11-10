import React, { useState } from "react";
import binIcon from "../assets/binIcon.svg";

// TODO Chip showing deletion information

function DeletionButton({ id }: { id: number }) {
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);

    const handleDelete = () => {
        setShowConfirmDialog(true);
    };

    const confirmDelete = () => {
        fetch("/api/phoneEdit/deletePhoneEntry", {
            method: "POST",
            body: new URLSearchParams({ id: id.toString() }),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
            .then((res) => {
                if (res.ok) {
                    window.alert(
                        "Phone entry deleted successfully (redirect in 2s)"
                    );
                    setTimeout(function () {
                        window.location.replace("/phones");
                    }, 2000);
                } else if (res.status === 401) {
                    window.alert("Unauthorized");
                    //window.location.replace("/login");
                } else {
                    console.error(
                        "Error deleting phone entry:",
                        res.statusText
                    );
                }
            })
            .catch((err) => {
                console.error("Error deleting phone entry:", err);
            });
    };

    return (
        <>
            <form className="p-0 m-0 flex flex-row justify-center items-center">
                <button
                    type="button"
                    onClick={handleDelete}
                    className="p-0 m-0"
                >
                    <img
                        src={binIcon.src}
                        className="w-6 h-6 hover:scale-110"
                    />
                </button>
            </form>
            {showConfirmDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-4 rounded">
                        <p className="text-2xl">
                            Czy jestes pewien ze chcesz to usunac?
                        </p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => setShowConfirmDialog(false)}
                                className="mr-2 px-4 py-2 bg-gray-300 rounded"
                            >
                                Zamknij
                            </button>
                            <button
                                onClick={() => {
                                    setShowConfirmDialog(false);
                                    confirmDelete();
                                }}
                                className="px-4 py-2 bg-red-500 text-white rounded"
                            >
                                Usun
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default DeletionButton;
