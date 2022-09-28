import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ICard } from 'src/Interface/interface';

export interface IAddToBucketOutput {
  type: string;
  event?: any;
  value: string
}

@Component({
  selector: 'app-task-section',
  templateUrl: './task-section.component.html',
  styleUrls: ['./task-section.component.scss']
})
export class TaskSectionComponent implements OnInit {
 
  textAreaVisible: boolean= false;
  valArea: string = ''
  constructor() { }

  @Input() sectionType: string = '';
  @Input() title?: string;
  @Input() data?: ICard[] = [];
  @Output() addToBucketChange = new EventEmitter<IAddToBucketOutput>();
  @Output() dropChange = new EventEmitter<any>();
  @ViewChild('areaBox') areaBox: ElementRef | any;

  ngOnInit(): void {
    this.prepareData()
  }

  getValue(val: string) {
    this.valArea = val;
  }

  addBucket(type:string, event:any, value:string){
    this.addToBucketChange.emit({type, event, value});
    this.updateData(type, event, value);
  }

  drop(event: any){
    this.dropChange.emit(event)
  }

  areaVisible() {
    this.textAreaVisible = !this.textAreaVisible;
  }

  prepareData(){
    this.data = this.data?.filter(el => {return el.status == this.sectionType})
  }

  updateData(type:string, event:any, value:string)
  {
    let firstRun: Boolean = true;

    if (firstRun == false) {
      if (!event.value.trim()) {
        this.areaBox.nativeElement.value = this.areaBox.nativeElement.value.replace(
          this.areaBox.nativeElement.value,
          ''
        );
        return;
      }
    } else {
      firstRun = false;
    }

    if (type === 'button' || event.key === 'Enter') {
      const obj = {
        author: "developer",
        text: value,
        status: type,
      };

      this.data?.push(obj);

      this.areaBox.nativeElement.value = this.areaBox.nativeElement.value.replace(
        this.areaBox.nativeElement.value,
        ''
      );
    }
  }

}
