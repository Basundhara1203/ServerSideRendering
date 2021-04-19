import { EmployeeList } from './EmployeeList';
import React from 'react'

import { GlobalProvider } from './GlobalState';

function App2() {
  return (
    <GlobalProvider>
      <div className="App">
        <EmployeeList />
      </div>
    </GlobalProvider>
  );
}

export default App2;