import { Component } from '@angular/core';
import { MonacoEditorConstructionOptions } from '@materia-ui/ngx-monaco-editor';
@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent {
  height = 300;
  editorOptions: MonacoEditorConstructionOptions = {
    language: 'javascript',
    lineNumbers: 'on',
    roundedSelection: true,
    scrollBeyondLastLine: true,
    readOnly: false,
    theme: 'vs-dark',
  };
  code =
    "// First line\n function hello() {\n  alert('Hello world!');\n}\n// Last line";
}
