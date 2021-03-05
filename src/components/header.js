import manmat from '../manmat.svg'
import paytm from '../paytm.png'
export default function Header () {
    return (
        <div className="header">
              <img className="manLogo" src={manmat} />
              <div className="congo grad-color">Congratulations <img  src="https://cdn-0.emojis.wiki/emoji-pics-lf/whatsapp/partying-face-whatsapp.png"/></div>
              <div className="giftcard">
                  <img className="paytmLogo" src={paytm} />
                  <p className="giftTitle grad-color">
                    Gift<sub className="card">Card</sub><span className=" grad-color"><sup className="rupee">₹</sup><span className="price">200</span></span>
                  </p>
              </div>
          </div>
    )
}