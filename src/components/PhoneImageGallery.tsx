import { useState } from "react";
import ImageFetching from "./ImageFetching";

function PhoneImageGallery({ imageUrls }: { imageUrls: string[] }) {
    if (imageUrls.length === 0)
        return (
            <div className="w-full h-full flex justify-center items-center">
                <p className="text-7xl">Brak Zdjęć</p>
            </div>
        );

    return (
        <>
            {imageUrls &&
                imageUrls.map((url, id) => {
                    return <SingleImage key={id} imageUrl={url} />;
                })}
        </>
    );
}

function SingleImage({ imageUrl }: { imageUrl: string }) {
    const [isFullPage, setIsFullPage] = useState(false);
    const [image, setImageSrc] = useState<string | null>(null);

    return (
        <>
            <ImageFetching
                url={imageUrl}
                style="max-h-80 w-auto border-[3px] border-black"
                alt="phone"
                onClick={() => {
                    setIsFullPage(true);
                }}
            />
            {isFullPage && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex justify-center items-center"
                    onClick={() => {
                        setIsFullPage(false);
                    }}
                >
                    <img
                        src={imageUrl}
                        alt="image"
                        className="max-h-[90%] w-auto"
                    />
                </div>
            )}
        </>
    );
}

export default PhoneImageGallery;
