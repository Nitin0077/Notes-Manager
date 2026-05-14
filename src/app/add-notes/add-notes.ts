import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesServices } from '../notes.services';

@Component({
  selector: 'app-add-notes',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-notes.html',
  styleUrl: './add-notes.css',
})
export class AddNotes implements OnChanges {
  @Input() NoteInfo = {
    showAddNote: false,
    model: 'Add Note',
    NoteId: null,
    title: '',
    content: '',
  };

  constructor(
    private notesService: NotesServices,
    private cd: ChangeDetectorRef,
  ) {}

  note = {
    title: '',
    content: '',
  };

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.NoteInfo);

  
      this.note = {
        title: this.NoteInfo.title,
        content: this.NoteInfo.content,
      };
   
  }

  resetForm(){
    this.note = {
      title: '',
      content: '',
    };
    this.NoteInfo = {
      showAddNote: false,
      model: 'Add Note',
      NoteId: null,
      title: '',
      content: '',
    };
    this.cd.detectChanges();
  }

  addNote() {
    this.notesService.addNote(this.note).subscribe((res) => {
      if (res) {
        this.note = {
          title: '',
          content: '',
        };
        this.NoteInfo.showAddNote=false;
        this.cd.detectChanges();
      }
    });
  }

  updateNote() {
    if(this.NoteInfo.NoteId){
      this.notesService.updateNote(this.NoteInfo.NoteId,this.note).subscribe((res) =>{
        if(res){
          console.log('Note updated successfully');
          this.note = {
            title: '',
            content: '',
          };  
          this.NoteInfo.showAddNote=false;
          this.cd.detectChanges();

        }
      })
    }
  }
}
