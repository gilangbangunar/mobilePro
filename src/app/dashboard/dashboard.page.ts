import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  itemList = [
    {
      title: 'example',
      description: 'Lorem Ipsum Dolor Sit Amet',
      isChecked: false
    },
    // ... tambahkan item lain sesuai kebutuhan
  ];

  title: string = '';
  description: string = '';

  constructor() { }

  moveCheckedItemsToBottom() {
    this.itemList = [
      ...this.itemList.filter(item => !item.isChecked),
      ...this.itemList.filter(item => item.isChecked).map(item => ({ ...item, isChecked: false })),
    ];
  }

  tambahData() {
    if (this.title && this.description) {
      this.itemList.unshift({ title: this.title, description: this.description, isChecked: false });
      // Reset title dan description setelah menambahkan data
      this.title = '';
      this.description = '';
    }
  }

  removeItem(index: number) {
    this.itemList.splice(index, 1);
  }

  ngOnInit() {
    // Initialization logic, if needed
  }
}
