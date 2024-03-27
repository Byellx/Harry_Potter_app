import { Component } from '@angular/core';
import { GeneralService } from '../../../services/general.service';
import { Response } from '../../../models/response';
import { NgClass, NgIf, NgFor} from '@angular/common';
import { Character } from '../../../models/character';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent {
  constructor(private service: GeneralService){
    this.catchAllCharacters(this.url)
    
  }

  public characters: Character[] = []
  public characters_styles = {
    image_section: 'image_section',
    image: 'image',
    character_info_section: 'character_info_section',
    character_name: 'character_name',
    character_info_summary: 'character_info_summary',
    character_info_details: 'character_info_details',
    character_more: 'character_more'
  }
  private url: string = 'https://api.potterdb.com/v1/characters'

  private catchAllCharacters(url: string){
    this.service.getAPI(url).subscribe(
      (response: Response)=>{
        response.data.forEach((character)=>{
          if(character.type === 'character'){
            const character_attributes = character.attributes as Character
            this.characters.push(character_attributes)
          }
        })
      }
    )
  }
}
