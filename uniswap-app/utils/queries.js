import { BigNumber, ethers } from 'ethers'
import { contract, tokenContract } from './contract'
import { toEth, toWei } from './ether-utils'

export const swapEthToToken = async (tokenName, amount) => {
    try {
           let tx = {value: toWei(amount)}
              const contractObj = await contract();
              const data = await contractObj.swapEthToToken(tokenName, tx);
              const receipt = await data.wait();
                return receipt;  

    } catch (error) {
        console.log(error)
    }
}

export const getBalance = async (tokenName, address) => {
    const contractObj = await contract();
    const balance = await contractObj.getBalance(tokenName, address);
    return balance;
  

}

export const getTokenAddress = async (tokenName) => {
    const contractObj = await contract();
    const address = await contractObj.getTokenAddress(tokenName);
    return address;

}





export async function increaseAllowance(tokenName, amount) {
    try {
      const contractObj = await contract()
      const address = await contractObj.getTokenAddress(tokenName)
  
      const tokenContractObj = await tokenContract(address)
      const data = await tokenContractObj.approve(
        '0xB307c597600DE5aF2492f3Eb3B1F09Aeb1f46AD9',
        toWei(amount),
      )
  
      const receipt = await data.wait()
      return receipt
    } catch (e) {
      console.log(e)
    }
  }

  export const  hasValidAllowance = async (owner, tokenName, amount) => {
    try {
      const contractObj = await contract()
      const address = await contractObj.getTokenAddress(tokenName)
  
      const tokenContractObj = await tokenContract(address)
      const data = await tokenContractObj.allowance(
        owner,
        '0xB307c597600DE5aF2492f3Eb3B1F09Aeb1f46AD9',
      )
  
      const result = BigNumber.from(data.toString()).gte(
        BigNumber.from(toWei(amount)),
      )
  
      return result
    } catch (e) {
     console.log(e)
    }
  }
  
  export async function swapTokenToEth(tokenName, amount) {
    try {
      const contractObj = await contract()
      const data = await contractObj.swapTokenToEth(tokenName, toWei(amount))
  
      const receipt = await data.wait()
      return receipt
    } catch (e) {
      console.log(e)
    }
  }
  
  export async function swapTokenToToken(srcToken, destToken, amount) {
    try {
      const contractObj = await contract()
      const data = await contractObj.swapTokenToToken(
        srcToken,
        destToken,
        toWei(amount),
      )
  
      const receipt = await data.wait()
      return receipt
    } catch (e) {
      console.log(e)
    }
  }