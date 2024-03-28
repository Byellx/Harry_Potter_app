import { Component } from '@angular/core';
import { NgClass, NgFor,NgIf } from '@angular/common';
import { GeneralService } from '../../../services/general.service';
import { Response } from '../../../models/response';
import { Potion } from '../../../models/potion';

@Component({
  selector: 'app-potions',
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    NgIf
  ],
  templateUrl: './potions.component.html',
  styleUrl: './potions.component.scss'
})
export class PotionsComponent {
  constructor(
    private service: GeneralService
  ){
    this.catchAllPotions(this.url)
  }

  public potions: Potion[] = []
  public potion_styles = {
    image_section: 'image_section',
    image: 'image',
    potion_info_section: 'potion_info_section',
    potion_name: 'potion_name',
    potion_info_summary: 'potion_info_summary',
    potion_info_details: 'potion_info_details',
    potion_more: 'potion_more'
  }
  private url: string = "https://api.potterdb.com//v1/potions"

  private catchAllPotions(url: string){
    this.service.getAPI(url).subscribe(
      (response: Response)=>{
        response.data.forEach((potion)=>{
          if(potion.type === "potion"){
            const potion_attributes = potion.attributes as Potion

            this.potions.push(potion_attributes)
          }
        })
      }
    )
  }
}