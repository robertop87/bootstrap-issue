import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print',
  template: `
    <h2>
      Receipt view
    </h2>
    <table>
      <tr>
        <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo adipisci officiis esse vero laudantium est voluptatem ipsa labore soluta dolorum, totam hic iste deleniti, possimus voluptas ducimus consequatur, ea quasi.</td>
        <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet velit labore repellat incidunt magni quia aspernatur totam quas, odio soluta dolor dolorum voluptatem temporibus saepe illo harum dolorem vel voluptas!</td>
      </tr>
    </table>
  `,
  styles: [
  ]
})
export class PrintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
