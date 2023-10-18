import React from 'react';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Layout from './shared/Layout';
import Dashboard from './shared/Dashboard';
function App() {
  return(
    <Routes>
      <Route path="/layout" element={<Layout />} />
      <Route path="/dashboard" element ={<Dashboard />} />
      <Route path="*" element = {<Layout />} />
      <Route path="/login" element={<div> This Is Login </div>} />
    </Routes>
  );
}

export default App;


