// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

contract CRUD {

    struct employee {
        string name;
        string email;
        uint256 age;
        address walletAddress;
    }

    employee[] public employees;
    uint256 public totalEmployees;

    constructor() {
        totalEmployees = 0;
    }

    function create(string memory _name, string memory _email, uint256 _age,
     address _walletAddress) 
    public returns (uint256) {
        employee memory newEmployee = employee(_name, _email, _age, _walletAddress);
        employees.push(newEmployee);
        totalEmployees++;
        return totalEmployees;
    }

   
    function updateEmployee(string memory _name, string memory _email) 
    external returns (bool) {
        for(uint i = 0; i < totalEmployees; i++) {
            if(compareStrings(employees[i].email, _email)) {
                employees[i].name = _name;
                return true;
            }
        } 
        return false;
    }

    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }

    function deleteEmployee(string memory _email) external returns(bool) {
        
        for(uint i = 0; i < totalEmployees; i++) {
            if(compareStrings(employees[i].email, _email)) {
                employees[i] = employees[totalEmployees - 1];
                delete employees[totalEmployees - 1];
                totalEmployees--;
                return true;
            } 
        }
        return false;
    }





}