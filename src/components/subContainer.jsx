import React,{useState,useEffect} from 'react'
import alertLogo from './Assert/danger.png'

export default function SubCon(){
    let [isOrderPage,setOrderPage] = useState(true)
    let [isSignIn,setSignIn] = useState(false)
    let [isOTP,setOTP] = useState(false)
    let [alertState,setAlertState] = useState(0)

    useEffect(()=>{
       let timmer =  setTimeout(()=>{
            if(document.querySelector('.sAlert')){
                document.body.removeChild(document.querySelector('.sAlert'))
            }
        },2000)
        return ()=>clearTimeout(timmer)
    },[alertState])

    function Orderpage(){
        return(
            <>
            <div className='disc' onClick={orderNow}>
            <p className="innerDisc">OrderNow</p>
            </div>
            <input type="text" placeholder='Enter Delivery Adderss' className='address'/>
            <br/>
            <input type="text" placeholder="Enter Your Current Location" className="location" />
            </>
        )
    }

    function SignIn(){
        return(
            <>
            <input type="text" placeholder='Enter Mobile Number' className='signInInpu'/>
            <div className='sBttnDiv'>
            <button className='sBttn' onClick={signIn}>SignIN</button>
            </div>
            </>
        )
    }

    function OTP(){
        return(
            <>
            <input type="text" placeholder='Enter OTP' className='signInInpu'/>
            <div className='sBttnDiv'>
            <button className='sBttn' onClick={verify}>Verify</button>
            </div>
            </>
        )
    }

    function signInAlert(value){
       let div = document.createElement('div')
       div.className ='sAlert'
       let message = document.createElement('h1')
       message.innerHTML =value
       let img = document.createElement('img')
       img.src = alertLogo
       div.appendChild(img)
       div.appendChild(message)
       return div
    }

    function verify(){
        let v = document.querySelector('.signInInpu').value
        if(v ==='' ||!v.match(/^\d{4}$/gi)){
            if(alertState === 0)setAlertState(1)
            else setAlertState(0)
            if(!document.querySelector('.sAlert'))
            document.body.appendChild(signInAlert('Invalid OTP'))
            return
        }
        sessionStorage.setItem('isLogedin',true)
        setOrderPage(true)
        setOTP(false)
    }

    function signIn(){

        let v = document.querySelector('.signInInpu').value

        if(v ==='' || !v.match(/^[6-9]\d{9}$/gi)){
            if(alertState === 0)setAlertState(1)
            else setAlertState(0)
            if(!document.querySelector('.sAlert'))
            document.body.appendChild(signInAlert('Invalid Number'))
            return
        }
        sessionStorage.setItem('mobileNumber',v)
        setSignIn(false)
        setOTP(true)
    }

    function orderNow(){
        if(!sessionStorage.getItem('isLogedin')){
            if(!document.querySelector('.sAlert'))
            document.body.appendChild(signInAlert('Must SignIn'))
            setOrderPage(false)
            setSignIn(true)
          if(alertState === 0)setAlertState(1)
          else setAlertState(0)
          return
        }

        window.location.assign('http://172.17.241.184:3000')
    }

    if(isOrderPage){
        document.querySelector('#homeP').classList.add('navDivBB')
        let child = document.querySelector('.restNav').childNodes
        child.forEach(element => {
            if('homeP' !==element.firstChild.id)
            element.firstChild.classList.remove('navDivBB')
          });
    }
    else if(isSignIn || isOTP){
        document.querySelector('#signP').classList.add('navDivBB')
        let child = document.querySelector('.restNav').childNodes
        child.forEach(element => {
            if('signP' !==element.firstChild.id)
            element.firstChild.classList.remove('navDivBB')
          });
    }

   if(isOrderPage)return <Orderpage />
   else if(isSignIn)return <SignIn />
   else if(isOTP)return <OTP />
}

