// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { RecordDTO } from '../model/record-dto';

// @Injectable({
//   providedIn: 'root'
// })
// export class RecordService {
//   private apiUrl = 'http://localhost:8080/records';

//   constructor(private http: HttpClient) { }

//   updateRecord(record: RecordDTO): Observable<RecordDTO> {
//     return this.http.put<RecordDTO>(`${this.apiUrl}/${record.recid}`, record);
//   }
// }
