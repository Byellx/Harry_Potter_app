import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { GeneralService } from '../../../services/general.service';
import { Response } from '../../../models/response';
import { Spell } from '../../../models/spell';

@Component({
  selector: 'app-spells',
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    NgIf
  ],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.scss'
})
export class SpellsComponent {
  constructor(
    private service: GeneralService
  ){
    this.catchAllSpells(this.url)
  }

  public spells: Spell[] = []
  public spell_styles = {
    image_section: 'image_section',
    image: 'image',
    spell_info_section: 'spell_info_section',
    spell_info_summary: 'spell_info_summary',
    spell_name: 'spell_name',
    spell_info_details: 'spell_info_details',
    spell_more: 'spell_more'
  }
  private url: string = "https://api.potterdb.com//v1/spells"

  private catchAllSpells(url: string){
    this.service.getAPI(url).subscribe(
      (response: Response)=>{
        response.data.forEach((spell)=>{
          if(spell.type === "spell"){
            const spell_attributes = spell.attributes as Spell
            this.spells.push(spell_attributes)
          }
        })
      }
    )
  }
}