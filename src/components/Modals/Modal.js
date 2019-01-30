import React from 'react';

const Modals = ({ body, title, button }) => {
    return (
        <div
            className="modal fade"
            id="contribModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="contribModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h5 className="modal-title" id="exampleModalLabel">
                            {title}
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body row">
                        {body}
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="button-primary" data-dismiss="modal">
                            {button}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Modals;
