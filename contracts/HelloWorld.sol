// SPDX-License-Identifier: NONE

pragma solidity ^0.8.24;

contract HelloWorld {
    event UpdatedMessage(string oldString, string newString);

    string public message;

    constructor(string memory _initMessage) {
        message =_initMessage;
    }

    function update(string memory _newMessage) external {
        string memory oldMessage = message;
        message = _newMessage;
        emit UpdatedMessage(oldMessage, _newMessage);
    }
}