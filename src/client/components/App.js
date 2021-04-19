import { EmployeeList } from './EmployeeList';
import React from 'react'

import { GlobalProvider } from './GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <EmployeeList />
      </div>
    </GlobalProvider>
  );
}

export default App;