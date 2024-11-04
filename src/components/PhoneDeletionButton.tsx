import React from "react";
import binIcon from "../assets/binIcon.svg";

// TODO Better confirmation dialog
// TODO Chip showing deletion information
// TODO Add permission based deletion (only for admins)

function DeletionButton({ id }: { id: number }) {
    const handleDelete = () => {
        if (
            window.confirm("Are you sure you want to delete this phone entry?")
        ) {
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
                        window.location.replace("/signin");
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
        }
    };

    return (
        <form className="p-0 m-0 flex flex-row justify-center items-center">
            <button type="button" onClick={handleDelete} className="p-0 m-0">
                <img src={binIcon.src} className="w-6 h-6 hover:scale-110" />
            </button>
        </form>
    );
}

export default DeletionButton;
