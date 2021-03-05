import whatsapp from '../whatsapp.png';
import bookmark from '../bookmark-flat.png'
import cancel from '../cancel.png'

export default function Submit() {
    return (
        <div className="submit-content">
                    <div className="info-container">
                        <img src={whatsapp} className="whatsapp-logo" alt="whatsapp-logo"/>
                        <div className="info-wrapper">
                            <div className="question">
                                Where will i get the gift card?
                            </div>
                            <div className="answer">
                              You will receive it on Whatsapp/SMS on your mobile.
                            </div>
                        </div>
                    </div>
                    <div className="info-container">
                        <img src={bookmark} className="sub-logo" alt="time-logo"/>
                        <div className="info-wrapper">
                            <div className="question">
                                When will i get the gift card?
                            </div>
                            <div className="answer">
                              Within 48 hours, when your Man Matters order is delivered.
                            </div>
                        </div>
                    </div>
                    <div className="info-container">
                      <img src={cancel} className="sub-logo" alt="cancel-logo" />
                        <div className="info-wrapper">
                            <div className="question">
                                WHat if i cancel the order?
                            </div>
                            <div className="answer">
                              The voucher will not delivered if you cancel the order.
                            </div>
                        </div>
                    </div>
                </div>
    )
}