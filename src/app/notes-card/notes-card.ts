import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, inject, model, Output } from '@angular/core';
import { NotesServices } from '../notes.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './notes-card.html',
  styleUrl: './notes-card.css',
  
})
export class NotesCard {


  @Output() EditNote= new EventEmitter<any>();



  constructor(private cd: ChangeDetectorRef) {}

  private noteService = inject(NotesServices);

  Notes: any[] = [];

  editNoteId: number | null = null;

  updatedNote = {
    title: '',
    content: ''
  };

  ngOnInit(): void {
    this.getNotesData();
  }

  getNotesData() {
    this.noteService.getNotes().subscribe(res => {
      this.Notes = res;
      console.log(this.Notes);
      this.cd.detectChanges();
      });
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id).subscribe(() => {
      this.getNotesData();
    });
  }

  onEditNotes(note: any) {
    this.updatedNote = { ...note };
    this.editNoteId = note.id;


    this.EditNote.emit({
      showAddNote:true,
      model:'Edit Note',
      NoteId:this.editNoteId,
      title:this.updatedNote.title,
      content:this.updatedNote.content,
    })
  }

 
}