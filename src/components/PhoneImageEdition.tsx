import { useState, type FormEvent, type FormEventHandler } from "react";

// TODO:
// Add button to delete selected images
// Add button to upload new images
// Add chip showing what was done
// :D

function PhoneImageEdition({ imageUrls }: { imageUrls: string[] }) {
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
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        if (response.status == 200) window.location.reload();
        console.log(await response.text());
    };

    const handleImagesSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(e.currentTarget);
    };

    return (
        <div className="w-full h-full flex flex-col p-4">
            <div className="h-full flex flex-row flex-wrap overflow-y-auto gap-4 p-4 border-[3px] border-black content-start bg-white">
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
            <div className="flex justify-center mt-4">
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
                >
                    <input
                        type="file"
                        id="file-input"
                        name="file-input"
                        multiple
                        accept="image/png, image/jpeg, image/gif, image/bmp, image/webp, image/tiff, image/svg+xml, image/x-icon"
                    />
                    <button type="submit">Dodaj</button>
                </form>
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
            <img
                src={imageUrl}
                alt="image"
                className={classes}
                onClick={() => {
                    handleSelected(id);
                }}
            />
        </>
    );
}

export default PhoneImageEdition;
