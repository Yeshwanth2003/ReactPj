// import React,{Component} from 'react'

// export default class SubCon extends Component{

//      isOrderPage = true;
//      isOTP = false;
//      isSignIn = false;

//      constructor(){
//           super();
//           this.state = {
//                isOrderPage :true,
//                isOTP :false,
//                isSignIn :false
//           }
//      }

//      Orderpage=()=>{
//         return(
//             <>
//             <div className='disc' onClick={this.orderNow}>
//             <p className="innerDisc">OrderNow</p>
//             </div>
//             <input type="text" placeholder='Enter Delivery Adderss' className='address'/>
//             <br/>
//             <input type="text" placeholder="Enter Your Current Location" className="location" />
//             </>
//         )
//     }

//      SignIn=()=>{
//         return(
//             <>
//             <input type="text" placeholder='Enter Mobile Number' className='signInInpu'/>
//             <div className='sBttnDiv'>
//             <button className='sBttn' onClick={this.signIn}>SignIN</button>
//             </div>
//             </>
//         )
//     }

//       OTP =()=>{
//         return(
//             <>
//             <input type="text" placeholder='Enter OTP' className='signInInpu'/>
//             <div className='sBttnDiv'>
//             <button className='sBttn' onClick={this.verify}>Verify</button>
//             </div>
//             </>
//         )
//     }

//      verify=()=>{
//         this.setState({isOTP:false,isOrderPage:true})
//     }

//     signIn=()=>{
//         this.setState({isSignIn:false,isOTP:true})
        
//     }

//      orderNow=()=>{
//         this.setState({isSignIn:true,isOrderPage:false})
//     }

//    render(){
//       if(this.state.isOrderPage)return <this.Orderpage />
//       else if(this.state.isSignIn)return <this.SignIn />
//       else if(this.state.isOTP)return <this.OTP />
//    }
// }

