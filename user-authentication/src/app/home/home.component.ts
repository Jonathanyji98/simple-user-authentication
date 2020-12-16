import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item-service/item.service'
import { Item } from '../home/models/item'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
items: Item[];
// itemsNew: Item;

itemsNew: Item = {
  title: '',
  description: ''
}

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }

  addItem(){
    console.log("This button adds a new item");
  }

  onSubmit(){
    if((this.itemsNew !='') && (this.itemsNew !='')){
      this.itemService.addItem(this.itemsNew);
      this.itemsNew.title = '';
      this.itemsNew.description = '';
    }
  }
  

}
