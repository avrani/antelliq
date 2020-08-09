import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as data from './mock-data/mock-data.json';
import { RowModel } from './types/row.model';

@Injectable()
export class MockHttpCalIInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: ((data) as any).default }));
        }
        if (request.method == 'DELETE') {
            return of(new HttpResponse({ status: 200, body: ((this.deleteRow(request)) as any).default }));
        }
        if (request.method == 'PUT') {
            return of(new HttpResponse({ status: 200, body: ((this.editRow(request)) as any).default }));
        }
        if (request.method == 'POST') {
            return of(new HttpResponse({ status: 200, body: ((this.addRow(request)) as any).default }));
        }
        return next.handle(request);

    }

    deleteRow(request) {
        let rowIndex;
        let requestUrl = request.url;
        var eventId = requestUrl.replace("http://localhost:3000/delete/", "");
        eventId = parseInt(eventId);
        data.result.forEach((row, index) => {
            if (row.eventId == eventId) {
                rowIndex = index;
            }
        });
        data.result.splice(rowIndex, 1);
        return data;
    }

    editRow(request) {
        var indexDeleteRow;
        data.result.forEach((row, index) => {
            if (row.eventId == request.body.eventId) {
                indexDeleteRow = index;
            }
        });
        data.result.splice(indexDeleteRow,1);
        data.result.splice(indexDeleteRow, 0, request.body)
        return data;
    }

    addRow(request) {
        data.result.unshift(request.body);
        return data;
    }
}