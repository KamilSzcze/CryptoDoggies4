pragma solidity ^0.8.7;

import "./IERC721.sol";
import "./Ownable.sol";

contract DoggiesContract is IERC721, Ownable {

    uint public constant CreationLimitGen0 = 20;
    string public constant override name = "Crypto Doggies";
    string public constant override symbol = "CD";

    event Birth(
        address owner, 
        uint doggieId, 
        uint mumId, 
        uint dadId, 
        uint genes
    );

    struct Doggie{
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Doggie[] doggies;

    mapping (uint256 => address) public doggieIndexToOwner;
    mapping(address => uint) ownershiptokenCount;

    uint public gen0Counter;

    function getDoggie(uint _doggieId) external view returns(uint, uint64, uint32, uint32, uint16){
        Doggie storage doggieToReturn = doggies[_doggieId];
        return (
            doggieToReturn.genes, 
            doggieToReturn.birthTime, 
            doggieToReturn.mumId, 
            doggieToReturn.dadId, 
            doggieToReturn.generation
            );
    }

    function createDoggieGene0(uint _genes) public onlyOwner{
        require(gen0Counter < CreationLimitGen0);

        gen0Counter++;

        _createDoggie(0, 0, 0, _genes, msg.sender);
    }

    function _createDoggie(
        uint _mumId,
        uint _dadId,
        uint _generation,
        uint _genes,
        address _owner
    )internal returns(uint) {
        Doggie memory _doggie = Doggie({
            genes: _genes,
            birthTime: uint64(block.timestamp),
            mumId: uint32(_mumId),
            dadId: uint32(_dadId),
            generation: uint16(_generation)
        });
        doggies.push(_doggie);
        uint newDoggieId = doggies.length -1;
        emit Birth(_owner, newDoggieId, _mumId, _dadId, _genes);

        _transfer(address(0), _owner, newDoggieId);

        return newDoggieId;
        
    }

    
    function balanceOf(address owner) external view override returns (uint256 balance) {
        return ownershiptokenCount[owner];
    }
    
    function totalSupply() external view override returns (uint256 total){
        return doggies.length;
    }

    function ownerOf(uint256 tokenId) external view override returns (address) {
        return doggieIndexToOwner[tokenId];
    }

    /* @dev Transfers `tokenId` token from `msg.sender` to `to`.
     *
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - `to` can not be the contract address.
     * - `tokenId` token must be owned by `msg.sender`.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address _to, uint256 _tokenId) external override{
        require(_to != address(0));
        require(_to != address(this));
        require(_owes(msg.sender, _tokenId));

        _transfer(msg.sender, _to, _tokenId);

    }

    function _transfer(address _from, address _to, uint _tokenId) internal {
        ownershiptokenCount[_to]++;
        doggieIndexToOwner[_tokenId] = _to;

        if(_from != address(0)){
            ownershiptokenCount[_from]--;
        }

        emit Transfer(_from, _to, _tokenId);


    }
    
    function _owes(address _claimant, uint _tokenId) internal view returns(bool) {
        doggieIndexToOwner[_tokenId] == _claimant;

    }
}