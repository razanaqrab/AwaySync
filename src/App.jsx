import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import EmployeeHome from './components/EmployeeHome';
import Footer from './components/Footer';
import Header from './components/Header';
import LeaveInfo from './components/LeaveInfo';
import LeavePolicy from './components/LeavePolicy';
import LeaveRequestForm from './components/LeaveRequestForm'; 
import FilledForm from './components/FilledForm';
import SignInPage from './components/SignInPage';
import SystemAdmin from "./components/SystemAdmin"; // Correct import
import LeavePolicyAdmin from './components/LeavePolicyAdmin';
import FilledFormAdmin from './components/FilledFormAdmin';
import RejectExplanation from './components/RejectExplanation';
import EmployeeInfo from './components/EmployeeInfo';
import CreateAccount from './components/CreateAccount';


  

function App() {



  return (

    <Router>
    <Header />
    <Routes>
    <Route path="/" element={<SignInPage />} />
    <Route path="/employeehome" element={<EmployeeHome />} />
      <Route path="/LeaveInfo" element={<LeaveInfo />} />
      <Route path="/LeavePolicy" element={<LeavePolicy/>} />
      <Route path="/LeaveRequestForm" element={<LeaveRequestForm />} />
      <Route path="/filledform" element={<FilledForm />} />
      <Route path="/systemadmin" element={<SystemAdmin />} /> 
      <Route path="/LeavePolicyAdmin" element={<LeavePolicyAdmin />} />
      <Route path="/FilledFormAdmin" element={<FilledFormAdmin />} />
      <Route path="/reject-explanation" element={<RejectExplanation />} />
      <Route path="/employee-info" element={<EmployeeInfo />} />
      <Route path="/create-account" element={<CreateAccount />} />
     </Routes>
    <Footer />
  </Router>
  )
}

export default App
