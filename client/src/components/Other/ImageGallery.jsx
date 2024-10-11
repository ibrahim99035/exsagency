import React, { useState } from 'react';
import '../../CSS/ImageGallery.css'; // Import your styles

const images = [
    { src: '/images/gallary/IMG-20241010-WA0055.jpg', alt: 'Image 1' },
    { src: '/images/gallary/IMG-20241010-WA0056.jpg', alt: 'Image 2' },
    { src: '/images/gallary/IMG-20241010-WA0057.jpg', alt: 'Image 3' },
    { src: '/images/gallary/IMG-20241010-WA0058.jpg', alt: 'Image 4' },
    { src: '/images/gallary/IMG-20241010-WA0059.jpg', alt: 'Image 5' },
    { src: '/images/gallary/IMG-20241010-WA0060.jpg', alt: 'Image 6' },
    { src: '/images/gallary/IMG-20241010-WA0061.jpg', alt: 'Image 7' },
    { src: '/images/gallary/IMG-20241010-WA0062.jpg', alt: 'Image 8' },
    { src: '/images/gallary/IMG-20241010-WA0064.jpg', alt: 'Image 10' },
    { src: '/images/gallary/IMG-20241010-WA0065.jpg', alt: 'Image 11' },
    { src: '/images/gallary/IMG-20241010-WA0066.jpg', alt: 'Image 12' },
    { src: '/images/gallary/IMG-20241010-WA0067.jpg', alt: 'Image 13' },
    { src: '/images/gallary/IMG-20241010-WA0068.jpg', alt: 'Image 14' },
    { src: '/images/gallary/IMG-20241010-WA0069.jpg', alt: 'Image 15' },
    { src: '/images/gallary/IMG-20241010-WA0070.jpg', alt: 'Image 16' },
    { src: '/images/gallary/1bc070_71a1dd49b40e4a77933c72cfeb0962aa~mv2.webp 5x.webp', alt: 'Image 17' },
    { src: '/images/gallary/1bc070_9089c319f3854745a90683fda29518a7~mv2.webp 5x.webp', alt: 'Image 18' },
    { src: '/images/gallary/1bc070_b620808808974c3ca6c6016c7b021302~mv2.webp 5x.webp', alt: 'Image 19' },
    { src: '/images/gallary/1bc070_bda75edb0a0a4ddfb4cc485089c8394f~mv2.webp 5x.webp', alt: 'Image 20' },
    { src: '/images/gallary/1bc070_dc414dc47f9f46be9a153b9a6db0da9e~mv2.webp 5x.webp', alt: 'Image 21' },
    { src: '/images/gallary/1bc070_e96abe15b776418ea95243e007d147ec~mv2.webp 5x.webp', alt: 'Image 22' },
];

const ImageGallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="gallery-container">
                {images.map((image, index) => (
                    <div className={`gallery-item ${image.size}`} key={index} onClick={() => openModal(image)}>
                        <img src={image.src} alt={image.alt} className="gallery-image" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ImageGallery;