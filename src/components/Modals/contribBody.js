import React from 'react';
import Modals from './Modal';

const ContribBody = ({ data }) => {
    const cards = data.map((user, index) => {
        return (
            <a
                key={index}
                className="col-xs-12 col-sm-6 col-md-6 col-lg-4 text-center"
                href={user.html_url}
            >
                <div className="contribCard">
                    <img
                        className="d-none d-sm-block"
                        src={user.avatar_url}
                        alt={`${user.login}'s Avatar`}
                    />
                    <h5>{user.login}</h5>
                    <p>{user.contributions} Contributions</p>
                </div>
            </a>
        );
    })
    return (
        <Modals body={cards} title="Project Contributors" button="Close" />
    )
}

export default ContribBody;
