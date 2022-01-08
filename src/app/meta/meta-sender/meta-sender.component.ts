import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';
import { MatSnackBar } from '@angular/material';

declare let require: any;
const metacoin_artifacts = require('../../../../build/contracts/LipToken.json');

@Component({
  selector: 'app-meta-sender',
  templateUrl: './meta-sender.component.html',
  styleUrls: ['./meta-sender.component.css']
})


export class MetaSenderComponent implements OnInit {
  accounts: string[];
  MetaCoin: any;

  model = {
    amount: 5,
    receiver: '',
    balance: 0,
    account: ''
  };

  status = '';

  constructor(private web3Service: Web3Service, private matSnackBar: MatSnackBar) {
    
    
  }

  ngOnInit(): void {
    this.web3Service.artifactsToContract(metacoin_artifacts)
      .then((MetaCoinAbstraction) => {
        this.MetaCoin = MetaCoinAbstraction;
        this.MetaCoin.deployed().then(contract => {
          console.log('Contrato desplegado abajo');
          console.log(contract.abi);          
          console.log('Contrato desplegado arriba');                       
        });
      });
    }
}
