import contractArtifact from './ProfileImageNfts.json'

export const contractAddress = '0x7Eae8874bF9294919977585b8cDBF7a6BB5DFFF2'
export const contractABI = contractArtifact.abi

export const connected = 'connected'
export const notConnected = 'notConnected'
export const noMetaMask = 'noMetaMask'

export const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: '#334250a7',
    zIndex: '20',
  },
}
