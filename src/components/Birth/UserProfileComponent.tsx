import React from "react";
import Col from "react-bootstrap/Col";

export const UserProfileComponent: React.FC = () => {
    return (
        <>
            <Col xl={{ offset: 1, span: 9 }} lg={{ offset: 1, span: 9 }} md={{ offset: 1, span: 9 }} sm={{ offset: 1, span: 9 }} className="justify-content-md-center profile-inner-container">
                <div className="profile-detail">
                    <div>
                    <img style={{display:'flex'}} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" className="avatar-profle" />
                    </div>
                    <div><br/>
                        <span>Tesfalem Nigussie hailu</span>
                    </div>
                    <div>
                        <span>Tesfalem.Nigussie.h@gmail.com</span>
                    </div>
                </div>
            </Col>
        </>
    );
}