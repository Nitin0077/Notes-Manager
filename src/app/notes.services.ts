import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Note{
  id?:number,
  title:String,
  content:String
}

@Injectable({
  providedIn: 'root',
})


export class NotesServices {

 private apiUrl = 'https://notes-manager-7qkl.onrender.com/';

 private http =inject(HttpClient);


 getNotes():Observable<Note[]>{
  return this.http.get<Note[]>(`${this.apiUrl}/notes`);
 }

 addNote(note: Note):Observable<Note>{
  return this.http.post<Note>(`${this.apiUrl}/notes`,note);
 }

 deleteNote(id:number):Observable<Note>{
  return this.http.delete<Note>(`${this.apiUrl}/notes/${id}`);
 }

  updateNote(id: number, note: Note):Observable<Note>{ 
  return this.http.put<Note>(`${this.apiUrl}/notes/${id}`,note);
 }


}
