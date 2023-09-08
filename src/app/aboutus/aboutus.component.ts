import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit{

  data2!: string;

	ngOnInit() {
		this.data2 = 'Hello About Us Page';
	}

}
