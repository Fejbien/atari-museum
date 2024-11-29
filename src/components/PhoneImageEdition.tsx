import { useState, type FormEvent, type FormEventHandler } from "react";
import ImageFetching from "./ImageFetching";

// TODO Add chip showing what was done

function PhoneImageEdition({
    imageUrls,
    id,
}: {
    imageUrls: string[];
    id: string;
}) {
    const [selectedImages, setSelectedImages] = useState<number[]>([]);

    const handleSelected = (id: number) => {
        if (selectedImages.includes(id))
            setSelectedImages(selectedImages.filter((i) => i !== id));
        else setSelectedImages([...selectedImages, id]);
    };

    const handleDeleteButton = async () => {
        if (selectedImages.length === 0) return;

        const selectedImagesPaths = selectedImages.map((id) =>
            imageUrls[id].split("/public/images/").pop()
        );
        const response = await fetch("/api/phoneEdit/deletePhoneImages", {
            method: "POST",
            body: new URLSearchParams({
                selectedImagesPaths: selectedImagesPaths.join(","),
            }),
        });

        if (response.status == 200) window.location.reload();
        console.log(await response.text());
    };

    const handleImagesSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        const files = (
            document.getElementById("file-input") as HTMLInputElement
        ).files;

        if (!files) return;

        for (let i = 0; i < files.length; i++)
            formData.append("file-input", files[i]);

        formData.append("id", id);

        if (files?.length === 0) return;

        const response = await fetch("/api/phoneEdit/addPhoneImages", {
            method: "POST",
            body: formData,
        });

        if (response.status == 200) window.location.reload();
    };

    return (
        <div className="w-full h-full flex flex-col p-4">
            <div className="h-full flex flex-row flex-wrap overflow-y-auto gap-4 p-4 border-[3px] border-black content-start bg-white betterScroll">
                {imageUrls &&
                    imageUrls.map((url, id) => {
                        return (
                            <SingleImage
                                key={id}
                                imageUrl={url}
                                id={id}
                                handleSelected={handleSelected}
                                isSelected={selectedImages.includes(id)}
                            />
                        );
                    })}
            </div>
            <div className="flex justify-center mt-4 gap-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={handleDeleteButton}
                >
                    Usun zaznaczone obrazy
                </button>
                <form
                    method="POST"
                    encType="multipart/form-data"
                    onSubmit={handleImagesSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg flex flex-row justify-between"
                >
                    <input
                        type="file"
                        id="file-input"
                        name="file-input"
                        multiple
                        accept="image/png, image/jpeg, image/gif, image/bmp, image/webp, image/tiff, image/svg+xml, image/x-icon"
                        className="w-3/4"
                    />
                    <button
                        type="submit"
                        className="border-blue-900 border-l-2 flex flex-row items-center px-2"
                    >
                        Dodaj
                    </button>
                </form>
                {/* Nie patrzec tutaj */}
                <style
                    dangerouslySetInnerHTML={{
                        __html: "\n        .betterScroll::-webkit-scrollbar {\n            width: 0.4rem;\n        }\n\n        .betterScroll::-webkit-scrollbar-thumb {\n            background-color: #888;\n            border-radius: 0px;\n            border: none;\n            padding: 0;\n        }\n\n        .betterScroll::-webkit-scrollbar-track {\n            background: #d1d1d1;\n            border-radius: 0px;\n            padding: 0;\n        }\n\n        .betterScroll::-webkit-scrollbar-thumb:hover {\n            background: #555;\n        }\n    ",
                    }}
                />
            </div>
        </div>
    );
}

function SingleImage({
    imageUrl,
    id,
    handleSelected,
    isSelected = false,
}: {
    imageUrl: string;
    id: number;
    handleSelected: (id: number) => void;
    isSelected?: boolean;
}) {
    let classes = "max-h-80 w-auto border-[3px] border-black";
    classes += isSelected ? " border-[3px] border-red-500" : "";

    return (
        <>
            <ImageFetching
                url={imageUrl}
                style={classes}
                alt="phone"
                onClick={() => {
                    handleSelected(id);
                }}
            />
        </>
    );
}

export default PhoneImageEdition;
