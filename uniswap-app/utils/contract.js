import {ethers} from 'ethers';
import UniswapABI from '../utils/Uniswap.json';
import CustomTokenABI from '../utils/CustomToken.json';
const address = '0xB307c597600DE5aF2492f3Eb3B1F09Aeb1f46AD9'

export const tokenContract = async address => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const { ethereum } = window
  
    if (ethereum) {
      const signer = provider.getSigner()
  
      const contractReader = new ethers.Contract(address, CustomTokenABI.abi, signer)
  
      return contractReader
    }
  }
  
  export const contract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const { ethereum } = window
  
    if (ethereum) {
      const signer = provider.getSigner()
  
      const contractReader = new ethers.Contract(
        '0xB307c597600DE5aF2492f3Eb3B1F09Aeb1f46AD9',
        UniswapABI.abi,
        signer,
      )
  
      return contractReader
    }
  } 