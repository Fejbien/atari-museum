import { useState } from 'react';

function PhoneImageGallery({ imageUrls }: { imageUrls: string[] }) {
    return (
        <div className="flex flex-wrap w-3/4 m-4 gap-4">
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
            <img src={imageUrl} alt='image' className='max-h-72 w-auto' onClick={()=>{setIsFullPage(true)}}/>
            {isFullPage && 
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex justify-center items-center' onClick={()=>{setIsFullPage(false)}}>
                    <img src={imageUrl} alt='image' className='max-h-[90%] w-auto'/>
                </div>
            }
        </>
    );
}

export default PhoneImageGallery;