async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account: ", deployer.address);

    const instanceOfContract = await ethers.deployContract("paramsForConstructor");

    console.log("Contract address: ", await instanceOfContract.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    