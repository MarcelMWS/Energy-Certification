pragma solidity ^0.4.20;

import './IERC20.sol';
import './SafeMath.sol';
import './EnergyProduction.sol';

contract OliCoin is IERC20 {

    using SafeMath for uint;
    /* instantiating parent contract*/
    EnergyProduction p = EnergyProduction(0x692a70d2e424a56d2c6c27aa97d1a86395877b3a);
    uint256 public totalSupply;

    /* transfer tokens function  */
    function transfer(address _to, uint256 _tokens) returns (bool success) {
        /* check if sender has enough token to transfer */
        require(balances[tx.origin] >= _tokens && _tokens > 0);

        balances[tx.origin] = balances[tx.origin].sub(_tokens);
        balances[_to] = balances[_to].add(_tokens);

        Transfer(tx.origin, _to, _tokens);
        return true;
    }

    /* checking out the balances */
    function balanceOf(address _tokenOwner) constant returns (uint256 _tokens) {
        return balances[_tokenOwner];
    }

    /* approve spender to spend tokens */
    function approve(address _spender, uint256 _tokens) returns (bool success) {
        require(_tokens > 0
        && balances[tx.origin] > 0);

        allowances[tx.origin][_spender] = _tokens;

        Approval(tx.origin, _spender, _tokens);
        return true;
    }

    /* checking the amount of allowed tokens */
    function allowance(address _tokenOwner, address _spender) constant returns (uint remaining) {
        return allowances[_tokenOwner][_spender];
    }

    /* spending allowed tokens on behalf of owner */
    function transferFrom(address _from, address _to, uint256 _tokens) returns (bool success) {
        require(_tokens > 0
        && balances[_from] >= _tokens
        && allowances[_from][tx.origin] >= _tokens);

        balances[_from] = balances[_from].sub(_tokens);
        balances[_to] = balances[_to].add(_tokens);

        allowances[_from][tx.origin] = allowances[_from][tx.origin].sub(_tokens);

        Transfer(_from, _to, _tokens);
        return true;
    }

    /* minting new coins */
    function getEnerProductionForCoin() public view returns (uint32[]){
        return p.getEnerProductionForCoin(tx.origin);
    }

    string name;

    function setName(string _name) public view returns (string){
        name = _name;
        return name;
    }

    string deviceType;
    string location;

    function mintToken() {
        uint multiplier;

        deviceType = getDeviceType();
        location = getLocation();
        multiplier = getMultiplier();

        balances[tx.origin] = balances[tx.origin].add((p.getEnerProductionForCoin(tx.origin)[p.getEnerProductionForCoin(tx.origin).length - 1]) * multiplier);
        totalSupply = totalSupply.add((p.getEnerProductionForCoin(tx.origin)[p.getEnerProductionForCoin(tx.origin).length - 1]) * multiplier);
    }


    function getDeviceType() constant returns (string){
        return p.getDeviceTypeForCoin(tx.origin);
    }

    function getLocation() constant returns (string){
        return p.getLocationForCoin(tx.origin);
    }

    function getMultiplier() returns (uint){
        if (uint(keccak256(deviceType)) == uint(keccak256("Battery"))) {
            if (uint(keccak256(location)) == uint(keccak256("Urban"))) {
                return 4;
            } else {
                return 3;
            }
        }

        if (uint(keccak256(deviceType)) == uint(keccak256("CHP"))) {
            if (uint(keccak256(location)) == uint(keccak256("Urban"))) {
                return 3;
            } else {
                return 2;
            }
        }

        if (uint(keccak256(deviceType)) == uint(keccak256("PV"))) {
            if (uint(keccak256(location)) == uint(keccak256("Urban"))) {
                return 3;
            } else {
                return 2;
            }
        }

        else {
            if (uint(keccak256(deviceType)) == uint(keccak256("Urban"))) {
                return 3;
            } else {
                return 2;
            }
        }
    }

    function getTotalSupply() public view returns (uint256) {
        return totalSupply;
    }

    function proDeviceType(address addr) public view returns (string){
        return p.getDeviceTypeForCoin(addr);
    }

    function proLocation(address addr) public view returns (string){
        return p.getLocationForCoin(addr);
    }

}
