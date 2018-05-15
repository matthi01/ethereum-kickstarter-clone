pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimumContribution) public {
        address newCampaign = new Campaign(minimumContribution, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    // need a Request struct to hold information about spending requests
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    // declarations
    address public manager;
    uint public minContribution;
    Request[] public requests;
    mapping(address => bool) public approvers; 
    uint public totalApproversCount;
    
    // modifiers
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    constructor (uint minimum, address creator) public {
        manager = creator;
        minContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minContribution);
        
        approvers[msg.sender] = true;
        totalApproversCount++;
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
    // keep in mind, each approver should only be able to approve once
    // to determine which request is the target, pass in request index
    function approveRequest(uint requestIndex) public {
        Request storage request = requests[requestIndex]; // storage -- byRef
        
        require(approvers[msg.sender]); // person is a contributer
        require(!request.approvals[msg.sender]); // person has not yet voted on this request
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finalizeRequest(uint requestIndex) public restricted {
        Request storage request = requests[requestIndex];
        
        require(!request.complete);
        require(request.approvalCount > (totalApproversCount / 2));
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns(uint, uint, uint, uint, address ) {
        return (
            minContribution,
            this.balance,
            requests.length,
            totalApproversCount,
            manager
        );
    }

    function getRequestCount() public view returns(uint) {
        return requests.length;
    }
}