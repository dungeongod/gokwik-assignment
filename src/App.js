import { useEffect, useState } from 'react';
import './App.css';
import {ReactComponent as  Arrow} from './arrow-right.svg'
import Header from './components/header'
import Submit from './components/submit'
function App() {
  const [isValid, setValid] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const [number, setNumber] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const checkNumber =  ({target: { value }}) =>{
    let reg = new RegExp(/^[789]\d{9}$/);
    if(reg.test(value)){
      setNumber(value)
      setValid(true)
    }
    else {
      setValid(false)
    }
  }

  const submitNumber = () => {
    localStorage.setItem('userNumber',number)
    setSubmit(true);
  }

  const handelEnter = (e) => {
    if (e.key === 'Enter' && isValid) {
      submitNumber();
    }
  }

  useEffect(()=> {
      if(localStorage.getItem('userNumber')){
        setSubmit(true);
      }
      setIsLoaded(true)
  },[])

  return (
    <>
    {
      isLoaded && (
        <div className="wrapper">
            <Header/>
            <div className="content-wrapper">
              {
                !isSubmit ? (
                    <div className="content">
                        <div className="won-title">
                          <div className="title">
                            You have WON a Paytm Gift Card of Rs 200 for <strong>placing the order on Man Matters</strong>
                          </div>
                        </div>
                        <div className="input-wrapper">
                          <input type="number" className="num-input" placeholder="Enter Mobile Number"  onChange={checkNumber} onKeyDown={handelEnter}/>
                        </div>
                            <button className="paytm-button" disabled={!isValid} onClick={submitNumber}>Wow! Get my Paytm Gift Card <Arrow/></button>
                    </div>
                )
                : (
                  <Submit/>
                )
              }
                
            </div>
        </div>
      )
    }
    </>
  );
}

export default App;
