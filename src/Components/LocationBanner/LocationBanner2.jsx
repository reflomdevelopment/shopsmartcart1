// import React from 'react'
// import './LocationBanner.css';
// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button'
// import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import {Link } from 'react-router-dom';
// import Modal from 'react-bootstrap/Modal';
// import Signin from '../Signin/Signin';


// class LocationBanner2 extends React.Component{
// constructor(props){
//     super(props)
//     this.state={

//     }
// }


// render(){
//     return(
//         <>


// <div class="container-fluid mb-3">
  

//   <section id="background-img">

//     <div class="mask d-flex justify-content-center align-items-center">
   
//       <div class="container py-5 my-5">
        
  
//         <div class="row d-flex align-items-center justify-content-center">
      
//           <div class="col-md-6 col-xl-5" style={{marginTop:'80px',marginBottom:'80px'}}>
          
//             <div class="card" style={{borderRadius:'10px'}}>
            
//               <div class="card-body z-depth-2 px-5">
//               <h2 className=" m-4 "> Groceries to your Door Step</h2>
               

//                 <form >
//                     <OutlinedInput
//                             startAdornment=
//                             {<InputAdornment position="start">
//                                 <LocationOnRoundedIcon/>
//                             </InputAdornment>}
//                             placeholder="Enter your City"
//                             fullWidth
//                             className="mb-2 "
//                             autoComplete="address"
//                     />

//                     <button className="fluid big orange  ui button mt-4">
//                         Continue
//                     </button>

//                     <p className="p-3" style={{textAlign:'center' ,fontSize:'20px' }}>  <span  > <Link style={{color:'orange'}} to="/dashboard">
//                                 Shop Now..!
//                             </Link></span></p>
                    
                    
                   

                    
                    
                    
                    
                    
//                     </form>
//               </div>
//             </div>
      
//           </div>
      
//         </div>
       
//       </div>
   
//     </div>

//   </section>

  
// </div>

    
//         </>
//     );
// }


// }
// export default LocationBanner2;



// import React from 'react'
// import './LocationBanner.css';

// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button'
// import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import OutlinedInput from '@material-ui/core/OutlinedInput';

// import { Link } from 'react-router-dom';
// import Modal from 'react-bootstrap/Modal';
// import Signin from '../Signin/Signin';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField'
// import Axios from 'axios';
// // import { MDBAutocomplete}  from "mdbreact";





// class LocationBanner2 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       list: [],
//       citys: []
//     }
//   }






//   handleChange(event) {

//     // const axios = require('axios');

//     // axios.get("http://www.shopsmartcart.reflomsolutions.com/public/api_city")
//     //   .then(res => {
//     //     // this.state.citys = res.data;
//     //     this.setState({ citys: res.data })

//     //   })

//     console.log("hello")



//   }







//   render() {








//     return (
//       <>


//         <div class="container-fluid mb-3">


//           <section id="background-img">

//             <div class="mask d-flex justify-content-center align-items-center">

//               <div class="container py-5 my-5">


//                 <div class="row d-flex align-items-center justify-content-center">

//                   <div class="col-md-6 col-xl-5" style={{ marginTop: '80px', marginBottom: '80px' }}>

//                     <div class="card" style={{ borderRadius: '10px' }}>

//                       <div class="card-body z-depth-2 px-5">
//                         <h2 className=" m-3 " > Groceries to your Door Step</h2>


//                         <form >
//                           {/* <OutlinedInput
//                                   startAdornment=
//                                   {<InputAdornment position="start">
//                                       <LocationOnRoundedIcon/>
//                                   </InputAdornment>}
//                                   placeholder="Enter your City"
//                                   fullWidth
//                                   className="mb-2 "
//                                   autoComplete="address"
//                           /> */}





//                           <Autocomplete
//                             id="combo-box-demo"
//                             options={this.state.citys}
//                             getOptionLabel={option => option.city_name}
//                             renderInput={(params) =>
//                               <TextField

//                                 {...params}
//                                 fullWidth
//                                 placeholder="Enter Your City"

//                                 variant="outlined"
//                                 // onChange={(event, newValue) => this.setState({ location: newValue })}

//                                 onChange={(event) => this.handleChange(event)}
//                               />}
//                           />





//                           {/* <button className="fluid big orange  ui button mt-4">
//                             Continue
//                           </button> */}
//                           <button className="btn peach-gradient btn-lg btn-block p-3 mt-4" ><h5>Continue</h5></button>
                        
//                          <p className="p-3" style={{ textAlign: 'center', fontSize: '20px' }}>  <span  > <Link style={{ color: 'orange' }} to="/dashboard">
//                                  Shop Now..!
//                              </Link></span></p>



//                         </form>
//                       </div>
//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </section>


//         </div>


//       </>
//     );
//   }


// }
// export default LocationBanner2;



import React from 'react'
import './LocationBanner.css';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Signin from '../Signin/Signin';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'
import Axios from 'axios';
// import { MDBAutocomplete}  from "mdbreact";





class LocationBanner2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      citys: []
    }
  }

  componentDidMount(){
    this.handleChange();
  }

  




  handleChange(event) {

    const axios = require('axios');


// var config = {
//        method: 'post',
//        url: 'https://shopsmartcart.reflomsolutions.com/public/api/login',
//        headers: {
//          "Content-Type": "application/json",
//          'Access-Control-Allow-Origin': '*'
//        },
//        data: data
//      };




    axios.get("https://shopsmartcart.reflomsolutions.com/public/api_city")
      .then(res => {
        // this.state.citys = res.data;
        this.setState({ citys: res.data })
     
      })



  }


 
  



  render() {




   
   
    

    return (
      <>


        <div class="container-fluid mb-3">


          <section id="background-img">

            <div class="mask d-flex justify-content-center align-items-center">

              <div class="container py-5 my-5">


                <div class="row d-flex align-items-center justify-content-center">

                  <div class="col-md-6 col-xl-5" style={{ marginTop: '80px', marginBottom: '80px' }}>

                    <div class="card" style={{ borderRadius: '10px' }}>

                      <div class="card-body z-depth-2 px-5">
                        <h2 className=" m-3 " > Groceries to your Door Step</h2>
                      

                        <form >
                                {/* <OutlinedInput
                                  startAdornment=
                                  {<InputAdornment position="start">
                                      <LocationOnRoundedIcon/>
                                  </InputAdornment>}
                                  placeholder="Enter your City"
                                  fullWidth
                                  className="mb-2 "
                                  autoComplete="address"
                          /> */}

                          

                       

                          <Autocomplete
                            id="combo-box-demo"
                            options={this.state.citys}
                           
                            getOptionLabel={option => option.city_name}
                            renderInput={(params) =>
                            
                             <TextField

                                {...params}
                                fullWidth
                                placeholder="Enter Your City"
                                
                                variant="outlined"
                                // onChange={(event, newValue) => this.setState({ location: newValue })}

                                onClick={(event) => this.handleChange(event)}
                              />}
                          />

                        



                          {/* <button className="fluid big orange  ui button">
                            Continue
                          </button> */}

                          <button className="btn peach-gradient btn-lg btn-block p-3 mt-4" ><h5>Continue</h5></button>

                          
                            <p className="p-3" style={{ textAlign: 'center', fontSize: '20px' }}>  <span  > <Link style={{ color: 'orange' }} to="/dashboard">
                                 Shop Now..!
                             </Link></span></p>



                        </form>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>


        </div>


      </>
    );
  }


}
export default LocationBanner2;