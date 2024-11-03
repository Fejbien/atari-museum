import React, { useState } from "react";

function LoginUI() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
        const formData = new FormData(e.target as HTMLFormElement);

        let dataVals: { [key: string]: any } = {};
        for (const [key, value] of formData.entries()) {
            if (value === "") continue;
            dataVals[key] = value;
        }

        const response = await fetch("/api/auth/signin", {
            method: "POST",
            body: new URLSearchParams(dataVals),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        if (response.ok) {
            window.location.replace("/");
        } else {
            const errorDetails = await response.text();
            console.log(errorDetails);
            switch (errorDetails) {
                case "Email and password are required":
                    setErrorMessage("Email i hasło są wymagane");
                    break;
                case "Invalid login credentials":
                    setErrorMessage("Nieprawidłowe dane logowania");
                    break;
                default:
                    setErrorMessage("Wystąpił błąd");
                    break;
            }
        }
    };

    return (
        <>
            <h1 className="text-6xl font-pixeledFont">Zaloguj sie</h1>
            <p className="text-xl">
                Nowy tutaj?{" "}
                <a
                    href="/register"
                    className="text-blue-600 underline font-bold hover:text-blue-800 hover:no-underline"
                >
                    Utworz konto
                </a>
            </p>
            {errorMessage && (
                <div className="w-full flex justify-center transition-all">
                    <p className="bg-red-500 p-2 m-2 text-white rounded w-3/4 text-center font-bold">
                        {errorMessage}
                    </p>
                </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col p-2">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="min-w-96 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
                <div className="m-2"></div>
                <label htmlFor="password">Hasło:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="min-w-96 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
                <div className="w-full flex justify-center mt-4">
                    <button
                        type="submit"
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-3/4"
                    >
                        Login
                    </button>
                </div>
            </form>
        </>
    );
}

export default LoginUI;
