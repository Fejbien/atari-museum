import { useState } from "react";

// TODO:
// - Add fixed button to edit images (add, remove)
// - Add state which changes what does clicking image do (full screen, edit)
// - When in edit state every image top right corner will have a checkbox to select it
// - When in edit state there will be a button to remove selected images
// - When in edit state there will be a button to add new images
// - Add loading state for images

function PhoneImageGallery({ imageUrls }: { imageUrls: string[] }) {
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

    return (
        <>
            <img
                src={imageUrl}
                alt="image"
                className="max-h-80 w-auto border-[3px] border-black"
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
