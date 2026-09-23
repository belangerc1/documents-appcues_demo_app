import { useState } from 'react';
import { APPCUES_ACCOUNTS, DEFAULT_ACCOUNT } from '../appcuesConfig';

export default function SwitchScript() {
  const [activeScript, setActiveScript] = useState(() => {
    return localStorage.getItem('selectedScript') || DEFAULT_ACCOUNT;
  });
  
  const switchScript = (scriptKey) => {
    localStorage.setItem('selectedScript', scriptKey);
    setActiveScript(scriptKey);
    window.location.reload();
  };
  
  return (
    <div className='acctSwitcher'>
      <p style={{textAlign:"center"}}>Currently using: {activeScript}</p>
      <button className='acctSwitchBtn' style={{marginRight:"10px"}} onClick={() => switchScript(APPCUES_ACCOUNTS.EU)}>
        Load EU Account {APPCUES_ACCOUNTS.EU}
      </button>
      <button className='acctSwitchBtn' onClick={() => switchScript(APPCUES_ACCOUNTS.US)}>
        Load US Account {APPCUES_ACCOUNTS.US}
      </button>
    </div>
  );
}