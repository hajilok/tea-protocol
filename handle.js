import Web3 from "web3";

const handle = async (px) => {
  const web3 = new Web3(`https://tea-sepolia.g.alchemy.com/public`);
  if (!web3.eth) {
    console.log("RPC connection failed");
    return;
  }
  const privateKey = px.startsWith("0x") ? px : "0x" + px;
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  web3.eth.accounts.wallet.add(account);
  return {
    address: account.address,
    wallet: web3,
    exproler: `https://sepolia.tea.xyz/tx/`,
  };
};

export default handle;
