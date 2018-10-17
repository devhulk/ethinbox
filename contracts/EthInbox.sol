pragma solidity ^0.4.17;

contract EthInbox {
    string public message;
    
    constructor(string InitialMessage) public {
        message = InitialMessage;
    }
    
    function setMessage (string newMessage) public {
        message = newMessage;
    }
}
