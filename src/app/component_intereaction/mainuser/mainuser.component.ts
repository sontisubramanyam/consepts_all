import { Component, OnInit } from '@angular/core';
import { UnrelatedcService } from '../././../_unrelatedcomp_service/unrelatedc.service';
import {Teachers} from '.././../model_classes/parent_to_child.model'

@Component({
  selector: 'app-mainuser',
  templateUrl: './mainuser.component.html',
  styleUrls: ['./mainuser.component.css']
})

export class MainuserComponent implements OnInit {
  notifications = [
    { id: 1, message: 'This is the first notification' },
    { id: 2, message: 'This is the second notification' },
  ];
  
  //parent to child
  parentMessage = "message from parent";
  name: string;
  subject: string;
  username = 'when click on child data will send';
  receivedChildMessage: string;
  messageToSendP: string = '';
   //child to parent
   message: string;
  // servicemessage
  serviemessage: string;
  // child to parent
  story: string = '';

  getStory(story) {
    this.story = story;
  }
  //parent to child
  sendToChild(message: string) {
    this.messageToSendP = message;
  }
  getMessage(message: string) {
    this.receivedChildMessage = message;
  }
 


  constructor(private data: UnrelatedcService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}






