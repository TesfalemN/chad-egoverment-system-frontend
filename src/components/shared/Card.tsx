import React from 'react';
import '../../assets/css/shared/main.css';

interface CustomCardProps {
    cardBody?: String,
    cardTitle?: String,
    className?: String,
    children?: React.ReactNode;
}

export const CustomCard: React.FC<CustomCardProps> = (customCardProps) => {
    return (<>
        <div className={`${customCardProps.className} custom-card-container`}>
            <div className="title-box text-center">
                <h4 className="mt-4">
                    {customCardProps.cardTitle}
                </h4>
            </div>
            <div className='mt-4'>
                {customCardProps.cardBody}
            </div>
            {customCardProps.children}
        </div>
    </>);
}