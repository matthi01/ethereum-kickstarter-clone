<p><b>Ethereum based Kickstarter clone</b></p>

<p>Kickstarter seems like a perfect use case for ethereum smart contracts.</p>

<p>This contract will allow a manager (person running the kickstarter campaign) to specify a minimum contribution amount.
<br /> anyone will then be able to join this campaign by contributing anything above that amount.<br /> This is where
the smart contract is better. With the current kickstarter app (if contribution limit was reached) the manager would have
full discretion of how the money is spent, and contributers have no say in how it is spent. <br />
This smart contract will give the contributers of the campaign a say in how the money is used. The manager of the campaign will
need to submit spending requests to justify any money spent from the contract which every contributer will need to approve before the money in the contract can
be allocated. This should eliminate the fraud issues that plague kickstarter.</p>

<p>Deployment problem: Letting a user (manager) create a contract and having them send back the contract address for the app to display
could be a security risk. The user could modify the contract to funnel the money to their account.<br />
Other option would be to have the app create the campaign contract, but that could get expensive.<br />
Instead, creating a second contract (Factory) to request the creation of a Campaign contract instance (contract to create another contract).
This way the user pays for the cost of the new contract instance, but there is no security risk.</p>
<p>Instead of just making use of the CampaignFactory to create new Campaign instances, it could also be used to
keep track of all existing instances.</p>

<p>Usage:</p>

<p>Canpaign</p>
<ul>
<uh>Variables:</uh>
	<li>manager</li>
	<li>minContribution</li>
	<li>requests</li>
    <li>approvers</li>
    <li>totalApproversCount</li>
</ul>
<ul>
<uh>Functions:</uh>
	<li>contribute()</li>
	<li>createRequest(string description, uint value, address recipient)</li>
	<li>approveRequest(uint requestIndex)</li>
    <li>finalizeRequest(uint requestIndex)</li>
    <li></li>
    <li></li>
</ul>

<p>CampaignFactory</p>
<ul>
<uh>Variables:</uh>
	<li>deployedCampaigns</li>
</ul>
<ul>
<uh>Functions:</uh>
	<li>createCampaign(uint minimumContribution) </li>
	<li>getDeployedCampaigns()</li>
</ul>
