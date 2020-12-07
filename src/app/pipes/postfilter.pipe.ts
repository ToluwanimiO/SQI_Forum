import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postfilter'
})
export class PostfilterPipe implements PipeTransform {

  transform(post: any[], searchText: any): unknown {
    if (!searchText) return post;
    searchText = searchText.toLowerCase();
    let filterPosts = post.filter(it => it.name.toLowerCase().include(searchText))
    return filterPosts;
  }

}
