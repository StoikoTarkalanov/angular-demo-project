import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationService } from '../services/pagination.service';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css'],
})

export class PaginationComponent implements OnInit {
    userData: any;
    userPresentationData: any;
    page = 1;

    constructor(
        private paginationService: PaginationService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.paginationService.getPagination().subscribe({
            next: (data) => {
                this.userData = data.users;
                this.userPresentationData = data.users;
            }
        });
    }

    filterData(isGender: boolean, word: string): void {
        this.userPresentationData =
            this.userData.filter((data: any) => {
                if (isGender) {
                    return data.gender == word;
                } else {
                    return data.company.department == word;
                }
            });
    }
}