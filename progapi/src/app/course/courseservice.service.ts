import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  url = 'http://localhost/api/php/';

  aCourse: Course[] = [];

  constructor(private http: HttpClient) {

  }

  readAll(): Observable<Course[]> {

    return this.http.get(this.url + "list.php").pipe(
      map((res: any) => {
        this.aCourse = res['course'];
        return this.aCourse;
      })
    )
  }

  create(objCourse: Course): Observable<Course[]> {

    return this.http.post(this.url + "create.php", { courses: objCourse })
      .pipe(
        map((res: any) => {
          this.aCourse.push(res['courses']);
          return this.aCourse;
        }
        )
      )
  }

  update(objCourse: Course): Observable<Course[]> {

    return this.http.put(this.url + 'update.php', { courses: objCourse })
      .pipe(map((res) => {
        const courseAlter = this.aCourse.find((item: any) => {
          return + item['id'] === +['id'];
        });
        if (courseAlter) {
          courseAlter['name'] = objCourse['name'];
          courseAlter['value'] = objCourse['value'];
        }
        return this.aCourse;
      }))
  }

  delete(objCourse: Course): Observable<Course[]> {

    const params = new HttpParams().set("id", objCourse.id + "");

    return this.http.delete(this.url + 'delete.php', { params: params })
      .pipe(map((res) => {

        const filter = this.aCourse.filter((course: any) => {
          return +course['id'] !== +objCourse;
        })

        return this.aCourse = filter
      }))
  }
}
