import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterText'
})
export class FilterTextPipe implements PipeTransform {

  transform(value: any[],searchText:any): unknown {
    if(!searchText) return value;
    searchText= searchText.toLowerCase();
    let filteredItems = value.filter(it=>it.title.toLowerCase().includes(searchText) || it.category.name.toLowerCase().includes(searchText) || it.author.username.toLowerCase().includes(searchText))
    console.log(filteredItems)

    return filteredItems;
  }

}
