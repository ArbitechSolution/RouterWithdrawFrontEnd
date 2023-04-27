import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { loadWeb3 } from "./Connectivity/Connectivity";
import { toast } from "react-toastify";
import { withdrawABI, withdrawAddress } from "../components/Contract"

export default function Page1() {
  const [btnTxt, setBtTxt] = useState("click to connect");
  const [account, setAccount] = useState("0000");
  const [updateLP, setUpdateLP] = useState();
  const [updateOwner, setNewOwner] = useState();
  const [updateBNB, setUpdateBNB] = useState();
  const [updateRouter, setUpdateRouter] = useState();
  const [isOwner, setIsOwner] = useState(true);

  const integrateContract = () => {
    const web3 = window.web3;
    const contract = new web3.eth.Contract(withdrawABI, withdrawAddress);
    return contract;
  }

  const handleClick = async () => {
    let acc = await loadWeb3();
    if (acc == "No Wallet") {
      setBtTxt("No Wallet");
    } else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network");
    } else {
      const web3 = window.web3;
      const contract = integrateContract()
      let ownerAddress = await contract.methods.owner().call();
      console.log("ownerAddress", ownerAddress);
      if(ownerAddress == acc){
        setIsOwner(true)
      }else{
        toast.info("Only Owner ⛔ is Allowed")
      }
      setAccount(acc);
      let myAcc = acc;
      setBtTxt("connected");
      console.log("acc", acc);
    }
  };


  const updateLPAddress = async () => {
    try {
      const web3 = window.web3;
      let contractAdd = integrateContract();
      const data = await contractAdd.methods
        .UpdateLpReceiver(updateLP)
        .send({
          from: account,
        });
      toast.success("Transaction Successful");
    } catch (e) {
      console.log("e", e);
      toast.error("Transaction Failed");
    }
  };


  const updateBNBAddress = async () => {
    try {
      const web3 = window.web3;
      let contractAdd = integrateContract();
      const data = await contractAdd.methods
        .UpdateBUSDReceiver(updateBNB)
        .send({
          from: account,
        });
      toast.success("Transaction Successful");
    } catch (e) {
      console.log("e", e);
      toast.error("Transaction Failed");
    }
  };

  const updateRouterAddress = async () => {
    try {
      const web3 = window.web3;
      let contractAdd = integrateContract();
      const data = await contractAdd.methods
        .UpdateROUTER(updateRouter)
        .send({
          from: account,
        });
      toast.success("Transaction Successful");
    } catch (e) {
      console.log("e", e);
      toast.error("Transaction Failed");
    }
  };


  const transferOwnerShip = async () => {
    try {
      const web3 = window.web3;
      let contractAdd = integrateContract();
      const data = await contractAdd.methods
        .transferOwnership(updateOwner)
        .send({
          from: account,
        });
      toast.success("Transaction Successful");
    } catch (e) {
      console.log("e", e);
      toast.error("Transaction Failed");
    }
  };



  const withdraw1 = async () => {
    try {
      const web3 = window.web3;
      let contractAdd = integrateContract();
      const data = await contractAdd.methods.withdrawLar().send({
        from: account,
      });
      toast.success("Transaction Successful");
    } catch (e) {
      console.log("e", e);
      toast.error("Transaction Failed");
    }
  };

  const withdraw2 = async () => {
    try {
      const web3 = window.web3;
      let contractAdd = integrateContract();
      const data = await contractAdd.methods.withdrawBusd().send({
        from: account,
      });
      toast.success("Transaction Successful");
    } catch (e) {
      console.log("e", e);
      toast.error("Transaction Failed");
    }
  };

  const withdraw3 = async () => {
    try {
      const web3 = window.web3;
      let contractAdd = integrateContract();
      const data = await contractAdd.methods.emergencyWithdrawWire().send({
        from: account,
      });
      toast.success("Transaction Successful");
    } catch (e) {
      console.log("e", e);
      toast.error("Transaction Failed");
    }
  };

  const emergency1 = async () => {
    try {
      const web3 = window.web3;
      let contractAdd = integrateContract();
      const data = await contractAdd.methods.emergencyWithdrawLar().send({
        from: account,
      });
      toast.success("Transaction Successful");
    } catch (e) {
      console.log("e", e);
      toast.error("Transaction Failed");
    }
  };

  const emergency2 = async () => {
    try {
      const web3 = window.web3;
      let contractAdd = integrateContract();
      const data = await contractAdd.methods.emergencyWithdrawLar().send({
        from: account,
      });
      toast.success("Transaction Successful");
    } catch (e) {
      console.log("e", e);
      toast.error("Transaction Failed");
    }
  };

  

  const withdrawBNBs = async () => {
    try {
      const web3 = window.web3;
      let contractAdd = integrateContract();
      const data = await contractAdd.methods.withdrawBusd().send({
        from: account,
      });
      toast.success("Transaction Successful");
    } catch (e) {
      console.log("e", e);
      toast.error("Transaction Failed");
    }
  };

  const emergencyWithdrawBNBs = async () => {
    try {
      const web3 = window.web3;
      let contractAdd = integrateContract();
      const data = await contractAdd.methods.emergencyWithdrawBusd().send({
        from: account,
      });
      toast.success("Transaction Successful");
    } catch (e) {
      console.log("e", e);
      toast.error("Transaction Failed");
    }
  };

  return (
    <div className="container">
      <div className="text-center">
        <button onClick={handleClick}>{btnTxt}</button>
        <p>
          {account?.substring(0, 4) +
            "..." +
            account?.substring(account?.length - 4)}
        </p>
      </div>
      {account && isOwner && account!="0000"? (
        <>
          <Form className="d-flex  justify-content-evenly">
            <Form.Group className="w-100 ">
              <Form.Group className="mt-2 ">
                { 
                <>
                <div style={{marginBottom:"7px"}} >
                 <Button style={{marginRight:"2px",background:"red", border:"none"}} onClick={emergency1}>
                 Emeregency Withdraw LAR
                 </Button>

                 <Button style={{marginRight:"2px",background:"green", border:"none",marginLeft:"42px"}} onClick={withdraw1}>
                  Withdraw LAR
                 </Button>

                 </div> <div style={{marginBottom:"7px"}}>

                 <Button style={{marginRight:"2px",background:"red", border:"none"}} onClick={emergency2}>
                 Emeregency Withdraw BUSD
                </Button>


                <Button style={{marginRight:"2px",background:"green", border:"none",marginLeft:"30px"}} onClick={withdraw2}>
                  Withdraw BUSD
                </Button>

                </div>

                <Button style={{marginRight:"2px",background:"green", border:"none",marginLeft:"258px"}} onClick={withdraw3}>
                 Withdraw Wire
                </Button>
                </>
                }
              </Form.Group>
            </Form.Group>
            <Form.Group className="w-100 " style={{ marginLeft: "8px" }}>

                      {/* Update Owner */}
              <Form.Label>Transfer Ownership</Form.Label>
              <Form.Control
                className="mb-2"
                type="text"
                onChange={(e) => {
                  setNewOwner(e.target.value);
                }}
              />
              <Button width="100%" onClick={transferOwnerShip} style={{background:"orange", border:"none"}}>Transfer Ownership</Button>
              <br />

                      {/* Update BNB Address */}
              <Form.Label>Update LP-Receiver</Form.Label>
              <Form.Control
                className="mb-2"
                type="text"
                onChange={(e) => {
                  setUpdateLP(e.target.value);
                }}
              />
              <Button width="100%" onClick={updateLPAddress} style={{background:"orange", border:"none"}}>Update LP-Receiver</Button>
              <br />

                      {/* Update BNB Address */}
              <Form.Label>Update BUSD-Receiver</Form.Label>
              {<Form.Control
                className="mb-2"
                type="text"
                onChange={(e) => setUpdateBNB(e.target.value)}
              />
              }
              <Button width="100%" onClick={updateBNBAddress} style={{background:"orange", border:"none"}}>Update BUSD-Receiver</Button>
              <br />

                      {/* Update BNB Address */}
              <Form.Label>Update Router</Form.Label>
              {<Form.Control
                className="mb-2"
                type="text"
                onChange={(e) => setUpdateRouter(e.target.value)}
              />
              }
              <Button width="100%" onClick={updateRouterAddress} style={{background:"orange", border:"none"}}>Update Router</Button>
              
              
            </Form.Group>
          </Form>
        
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}   
