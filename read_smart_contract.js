const { ethers } = require("ethers");

const INFURA_ID = 'dbee5a9cdd864392bd99f204bd74de53'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
];

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const name = await contract.name();
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();
    console.log(`Name: ${name}`)
    console.log(`Symbol: ${symbol}`)
    console.log(`totalSupply: ${totalSupply}`)
}

main()