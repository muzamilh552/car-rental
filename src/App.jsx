import './App.css'
import { Routes, Route } from 'react-router-dom'
import SignIn from './SignIn/SignIn'
import SignUp from './SingUp/SignUp'
import MailVerification from './MailVerification'
import ResetPassword from './ResetPassword'
import UpdatePassword from './UpdatePassword'

import UserSelection from './UserSelection'
import Header from './Header'
import Footer from './Footer'
import HomeScreen from './HomeScreen'
import CategoryCarRent from './CategoryCarRent'
import DetailCarRent from './DetailCarRent'
import CarBooking from './CarBooking'


function App() {


  return (
    <>

<Routes>
<Route path='/' element={<SignIn/>}/>
 <Route path='signup' element={<SignUp/>} />
 <Route path='mailverification' element={<MailVerification/>} />
 <Route path='resetpassword' element={<ResetPassword/>} />
 <Route path='updatepassword' element={<UpdatePassword/>} />
 <Route path='userselection' element={<UserSelection/>} />
 <Route path='header' element={<Header/>} />
 {/* <Route path='footer' element={<Footer/>} /> */}
 <Route path='homescreen' element={
  <>
  <Header/>
  <HomeScreen/>
  <Footer/>
  </>
  } />

 <Route path='categorycarrent' element={
  <>
  <Header/>
  <CategoryCarRent/>
  <Footer/>
  </>
  } />

 <Route path='detailcarrent' element={
  <>
  <Header/>
  <DetailCarRent/>
  <Footer/>
  </>
  } />

 <Route path='carbooking' element={
  <>
  <Header/>
  <CarBooking/>
  <Footer/>
  </>
  } />

</Routes>

    </>
  )
}

export default App
