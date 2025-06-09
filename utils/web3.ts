declare global {
  interface Window {
    ethereum?: any;
  }
}

export const isWeb3Available = () => {
  return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';
}