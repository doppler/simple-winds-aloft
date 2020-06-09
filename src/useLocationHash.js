import { useState, useEffect } from 'react';

const useLocationHash = () => {
  const [hash, setHash] = useState(
    window.location.hash === '' ? 'mia:ATL' : window.location.hash
  );

  const handleHashChange = () => setHash(document.location.hash);

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return hash.replace(/^#/, '');
};

export default useLocationHash;
