import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PassportApplicationType } from 'models/passport/enums';

interface PassportCardComponentProps {
    imageSrc: string,
    bodyTitle: string,
    bodyText: string,
    buttonText: string,
    onClick: () => void //PassportApplicationType
}

export const PassportCardComponent: React.FC<PassportCardComponentProps> = (passportCardComponentProps: PassportCardComponentProps) => {

    return (<>
        <div className="card action-card" onClick={passportCardComponentProps.onClick}>
            <img src={passportCardComponentProps.imageSrc} alt="Avatar" />
            <div className="container">
                <br />
                <h4><b>{passportCardComponentProps.bodyTitle}</b></h4>
                <p className="text-muted">{passportCardComponentProps.bodyText}</p>
            </div>
            <div className=" text-primary  card-footer">
                {passportCardComponentProps.buttonText} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8l4 4-4 4M8 12h7" /></svg>
            </div>
        </div>
    </>);
}