const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
    await deployer.deploy(Migrations);
    await deployer.deploy(DaiTokenMock);
    const tokenMock = await DaiTokenMock.deployed();
    // Mint 1,000 Dai Tokens for the deployer
    await tokenMock.mint(
        "0x073801D42996eaE3F372ac7e4Ff29b319777d722",
        "1000000000000000000000"
    );
};