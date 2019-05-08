import { FormGroup, FormControl } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Comment } from 'src/app/shared/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: Comment[];


  newRate: number = 5;
  commentForm: FormGroup;
  isShown: boolean = false;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      'content': new FormControl(null)
    });
    const pid = this.route.snapshot.params['productId'];
    this.comments = this.productService.getCommentsById(pid);
  }

  onClick() {
    this.isShown = !this.isShown;
  }

  addComment() {
    console.log(this.commentForm.value['content']);
    console.log(this.newRate);
    // reset to original after submitting
    this.isShown = false;
    this.commentForm.reset();
    this.newRate = 5;
  }
}
