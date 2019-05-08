
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

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap['productId'];
    this.comments = this.productService.getCommentsById(id);
  }

}
