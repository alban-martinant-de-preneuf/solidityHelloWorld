async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account: ", deployer.address);

    const HelloWoldFactory = await ethers.getContractFactory("HelloWorld");

    const helloWorld = await HelloWoldFactory.deploy("Hello World!");

    console.log("Contract address: ", helloWorld.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    