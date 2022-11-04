// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");

async function main() {

    const CRUD = await hre.ethers.getContractFactory("CRUD");
    const crud = await CRUD.deploy();

    await crud.deployed();

    /* console.log(
        `CRUD deployed to ${crud.address}`
    ); */

    const createTest = await crud.create(
        "Yogya",
        "yo@gmail.com",
        6,
        "0x5FbDB2315678afecb367f032d93F642f64180aa3");

    const createSecond = await crud.create(
        "Tham",
        "tham@gmail.com",
        90,
        "0x5FbDB2315678afecb367f032d93F642f64180aa3");

    const createThird = await crud.create(
        "Bhavin",
        "Bhav@gmail.com",
        20,
        "0x5FbDB2315678afecb367f032d93F642f64180aa3");

    const totalEmployees = await crud.totalEmployees();

    // console.log(totalEmployees);

    const firstEmployee = await crud.employees(0);
    const updateEmployee = await crud.updateEmployee("Yog","yo@gmail.com");

    const firstEmployeeChange = await crud.employees(0);

    //console.log(firstEmployee, firstEmployeeChange); // testing update

    const secondEmployee = await crud.employees(1);

    const removeEmployee = await crud.deleteEmployee("tham@gmail.com");

    const totalEmployees2 = await crud.totalEmployees();

    //console.log(removeEmployee);

    //console.log(totalEmployees2);

    const secondEmployee2 = await crud.employees(1);

    console.log(secondEmployee, secondEmployee2);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
