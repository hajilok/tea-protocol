import chalk from "chalk";
import figlet from "figlet";
import fs from "fs/promises";
import sendToken from "./sendToken.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const displayBanner = () => {
  console.log(
    chalk.cyan(
      figlet.textSync("Makmum Airdrop", {
        font: "Slant",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      })
    )
  );
  const hakari = chalk.bgBlue("Created by https://t.me/hakaringetroll");
  console.log(hakari);
  console.log("Join To get Info airdrop : https://t.me/makmum");
};

(async () => {
  displayBanner();
  const wallet = (await fs.readFile("wallet.txt", "utf-8"))
    .replace(/\r/g, "")
    .split("\n")
    .filter(Boolean);
  const address = (await fs.readFile("address.txt", "utf-8"))
    .replace(/\r/g, "")
    .split("\n")
    .filter(Boolean);
  while (true) {
    for (const to of address) {
      for (const px of wallet) {
        const amount = Math.floor(Math.random() * 0.1) + 0.12; // Random amount between 0.01 and 0.02
        await sendToken(px, to, amount);
      }
      console.log(chalk.yellow("Waiting for 5 seconds..."));
      await delay(5000); // Wait for 5 seconds before the next iteration
    }
    console.log(chalk.yellow("Waiting 24 hours for the next round..."));
    await delay(86400000); // Wait for 24 hours before the next round
  }
})();
