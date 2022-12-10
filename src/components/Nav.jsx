import Logo from './Assert/logo.png'


export default function Nav(){

     function styleEvent(e){
          e.target.classList.add('navDivBB')
          let elem = e.target
          let allNodes = e.target.parentElement.parentElement.childNodes

          allNodes.forEach(element => {
            if(elem.id !==element.firstChild.id)
            element.firstChild.classList.remove('navDivBB')
          });

          if(e.target.id === 'contactP'){
               console.log('hi');
               
          }
          else if(e.target.id === 'aboutP'){
               console.log('hello');
          }
     }

     return (
          <>
          <div id="Logo" className="LogoDiv">
               <img src={Logo} alt="Logo" className="logoImg"/>
               <label htmlFor="logoImg" className="LogoText">Food</label>
          </div>
          <div className="restNav" id='restNav'>
          <div id="homeI" className="navDiv" onClick={styleEvent}>
          <p id="homeP"  className="navP navDivBB" style={{textDecoration:'none',color:'white'}}>Home</p>
          </div> 
          <div id="contactI" className="navDiv" onClick={styleEvent}>
          <a href='#contact' id="contactP" className="navP" style={{textDecoration:'none',color:'white'}}>Contact</a>
          </div>
          <div id="aboutI" className="navDiv" onClick={styleEvent}>
          <a href='#about' id="aboutP" className="navP" style={{textDecoration:'none',color:'white'}}>About Us</a>
          </div>
          <div id="signIn" className="navDiv" onClick={styleEvent}>
          <p id="signP" className="navP" style={{textDecoration:'none',color:'white'}}>SignIn</p>
          </div>   
          </div> 
          </>
     )
}