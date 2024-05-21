import React from 'react';

const reviews = [
    {
        id: 1,
        name: 'Luca Verdi',
        text: 'Prezzi competitivi e grande varietà di titoli. Consigliato!',
        rating: 4,
        magicCss: 'shadow-inner shadow-green-500/50',
        image: 'https://randomuser.me/api/portraits/men/85.jpg'
    },
    {
        id: 2,
        name: 'Giulia Bianchi',
        text: 'Ho trovato tutti i libri di cui avevo bisogno per i miei studi universitari. Ottimo servizio!',
        rating: 4,
        magicCss: 'shadow-inner shadow-white',
        image: 'https://randomuser.me/api/portraits/women/95.jpg'
    },
    {
        id: 3,
        name: 'Mario Rossi',
        text: 'Ampia selezione di libri e consegna velocissima! Assistenza clienti eccellente.',
        rating: 5,
        magicCss: 'shadow-inner shadow-red-500/50',
        image: 'https://randomuser.me/api/portraits/men/17.jpg'
    },


];

const ReviewsSection = () => {
    const renderStars = (rating: number): any => {
        return [...Array(5)].map((star, index) => {
            return (
                <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M9.049.716L11.18 6.118l6.046.458c.422.032.592.55.278.832L13.454 10.7l1.847 5.902c.124.397-.363.733-.732.512L10 13.188l-4.57 3.926c-.369.221-.856-.115-.732-.512L6.545 10.7.495 7.408c-.314-.282-.144-.8.278-.832l6.046-.458L9.049.716a.5.5 0 01.902 0z" />
                </svg>
            );
        });
    };

    return (
        <div className="container mx-auto p-4 pt-20 pb-20">
            <div className="text-center mb-8">
                <h2 className="mb-5 text-5xl font-bold text-primary">Non ti fidi?</h2>
                <p className="mb-5">Controlla le nostre recensioni</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {reviews.map((review) => (
                    <div key={review.id} className={`card w-80 bg-base-100 shadow-xl ${review.magicCss}`}>
                        <figure className="px-10 pt-10">
                            <img src={review.image} alt={review.name} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h3 className="card-title">{review.name}</h3>
                            <div className="flex justify-center mb-2">
                                {renderStars(review.rating)}
                            </div>
                            <p>{review.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsSection;
