import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform {

  //value holds the property to which u want to modify and character takes the parameter to which u want to replace
  transform(value: string, character: string, ...args: unknown[]): string {
    return value.replace(character, ' ');  // here replacing '-' with space  

}
}