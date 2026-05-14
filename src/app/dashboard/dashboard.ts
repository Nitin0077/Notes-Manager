import { ChangeDetectorRef, Component } from '@angular/core';
import { AddNotes } from '../add-notes/add-notes';
import { NotesCard } from '../notes-card/notes-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, AddNotes, NotesCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  NoteData = {
    showAddNote: false,
    model: 'Add Note',
    title: '',
    NoteId: null,
    content:''
  };

  addNoteTitle: string = 'Add Note';

  onAddNote(){
    this.NoteData = {
      showAddNote:true,
      model:'Add Note',
      title:'',
      NoteId:null,
      content:''
    }


  }

  onEditNote(event: any) {
    this.NoteData = {...event};
    console.log(this.NoteData);
  }
}
