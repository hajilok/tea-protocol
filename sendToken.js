import handle from "./handle.js";

const sendToken = async (px, to, amount) => {
  const { address, wallet, exproler } = await handle(px);
  if (!wallet) {
    console.log("Wallet not found");
    return;
  }
  const balance = await wallet.eth.getBalance(address);
  if (
    Number(balance) < Number(wallet.utils.toWei(amount.toString(), "ether"))
  ) {
    console.log("Insufficient balance, plz req faucet ");
    return;
  }
  console.log(`Sending ${amount} TEA to ${to} `);
  try {
    const tx = await wallet.eth.sendTransaction({
      from: address,
      to: to,
      value: wallet.utils.toWei(amount.toString(), "ether"),
    });
    console.log(`Transaction successful: ${exproler}${tx.transactionHash}`);
  } catch (error) {
    console.log(error);
  }
};
export default sendToken;
