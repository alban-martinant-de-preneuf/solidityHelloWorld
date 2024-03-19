const { expect } = require("chai");

describe("HelloWorld contract", function () {
  it("Should set the initial message correctly", async function () {
    const HelloWorldFactory = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorldFactory.deploy("Initial Message");

    const message = await helloWorld.message();
    expect(message).to.equal("Initial Message");
  });

  it("Should update the message correctly", async function () {
    const HelloWorldFactory = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorldFactory.deploy("Initial Message");

    await helloWorld.update("New Message");

    const message = await helloWorld.message();
    expect(message).to.equal("New Message");
  });
});
