import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { UnrelatedcService} from '../././../_unrelatedcomp_service/unrelatedc.service';


@Component({
  selector: 'app-subuser',
  templateUrl: './subuser.component.html',
  styleUrls: ['./subuser.component.css']
})
export class SubuserComponent implements OnInit {
  @Input() childMessage: string;
  @Input() notifications: any[];
  story: string;

  @Input() receivedParentMessage: string;

  @Output() messageToEmit = new EventEmitter<string>();

  messageToSendC: string = "Hello Parent !";

 
  // child to parent
  username: string = "";
  constructor(private data: UnrelatedcService) { }

  // dataservice
  servicemessage:string;
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  message: string = "Hello Subramanyam Child Data";

 

  // dataservice
  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }

  sendMessageToParent(message: string) {
    this.messageToEmit.emit(message)
  }
 
}
