import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/Interface/interface';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import * as Bucket from '@spica-devkit/bucket';

Bucket.initialize({
  publicUrl: 'https://intership-test-1ae96.hq.spicaengine.com/api',
  apikey: '15fjjr18l8lbwy1g',
});

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: ICard[] = [];
  get_data?: ICard[] = [];
  set_data?: ICard[] = [];
  textAreaVisible: boolean[] = [false, false, false];
  textAreaVisible2: boolean[] = [true, true, true];
  valArea1 = '';
  bucketId = '633306e7fdfd11002c20c80d';
  isLoading: boolean = true;

  constructor() {}

  async ngOnInit() {
    this.bucketPromise()
      .then((datas: any) => {
        this.data = datas;
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      })
      .finally(() => {this.isLoading = false})
  }

  bucketPromise() {
    return Bucket.data.getAll(this.bucketId);
  }

  getValue(val: string) {
    this.valArea1 = val;
  }

  areaVisible(id: number) {
    this.textAreaVisible[id] = !this.textAreaVisible[id];
    this.textAreaVisible2[id] = !this.textAreaVisible2[id];
  }

  async dataInsert(bucketId: any, bucketData: any) {
    return Bucket.data.insert(bucketId, bucketData);
  }

  addBucket(
    obj: ICard
  ) {
      this.data.push(obj);
      this.data = JSON.parse(JSON.stringify(this.data))
      this.dataInsert('633306e7fdfd11002c20c80d', obj);
  }

  async updateBucketData(dataId: any, globalData: any, statusName: string) {
    return Bucket.data.update(this.bucketId, dataId, {
      ...globalData,
      status: statusName,
    });
  }

  drop(event: CdkDragDrop<ICard[] | any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      let get_data = event.container.data[event.currentIndex];
      let index = this.data?.indexOf(get_data);

      switch (event.container.id) {
        case 'cdk-drop-list-0':
          this.data[index].status = 'for_development';
          this.updateBucketData(
            this.data[index]._id,
            this.data[index],
            'for_development'
          );
          break;
        case 'cdk-drop-list-1':
          this.data[index].status = 'for_working';
          this.updateBucketData(
            this.data[index]._id,
            this.data[index],
            'for_working'
          );
          break;
        case 'cdk-drop-list-2':
          this.data[index].status = 'for_completed';
          this.updateBucketData(
            this.data[index]._id,
            this.data[index],
            'for_completed'
          );
          break;
      }
    }
  }
}
