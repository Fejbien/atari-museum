import { useState } from 'react';

function PhoneImageGallery({ imageUrls }: { imageUrls: string[] }) {
    return (
        <div className="flex flex-row flex-wrap content-start w-full m-4 gap-4">
            {
                imageUrls &&
                    imageUrls.map((url, id) => {
                        return (
                            <SingleImage key={id} imageUrl={url}/>
                        );
                    })
            }
        </div>
    );
};

function SingleImage({ imageUrl }: { imageUrl: string }) {
    const [isFullPage, setIsFullPage] = useState(false);

    return (
        <>
            <img src={imageUrl} alt='image' className='max-h-80 w-auto border-[3px] border-black' onClick={()=>{setIsFullPage(true)}}/>
            {isFullPage && 
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex justify-center items-center' onClick={()=>{setIsFullPage(false)}}>
                    <img src={imageUrl} alt='image' className='max-h-[90%] w-auto'/>
                </div>
            }
        </>
    );
}

export default PhoneImageGallery;