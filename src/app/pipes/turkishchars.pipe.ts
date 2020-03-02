import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'turkishchars'
})
export class TurkishcharsPipe implements PipeTransform {

  transform(value: any): any {
    let newval: string = value;
    newval = newval.replace(new RegExp('&amp;', 'g'), '');
    newval = newval.replace(new RegExp('&Ccedil;', 'g'), 'Ç');
    newval = newval.replace(new RegExp('&ccedil;', 'g'), 'ç');
    newval = newval.replace(new RegExp('&#286;', 'g'), 'Ğ');
    newval = newval.replace(new RegExp('&#287;', 'g'), 'ğ');
    newval = newval.replace(new RegExp('&#304;', 'g'), 'İ');
    newval = newval.replace(new RegExp('&#305;', 'g'), 'ı');
    newval = newval.replace(new RegExp('&Ouml;', 'g'), 'Ö');
    newval = newval.replace(new RegExp('&ouml;', 'g'), 'ö');
    newval = newval.replace(new RegExp('&#350;', 'g'), 'Ş');
    newval = newval.replace(new RegExp('&#351;', 'g'), 'ş');
    newval = newval.replace(new RegExp('&Uuml;', 'g'), 'Ü');
    newval = newval.replace(new RegExp('&uuml;', 'g'), 'ü');
    newval = newval.replace(new RegExp('&ldquo;', 'g'), '');
    newval = newval.replace(new RegExp('&rdquo;', 'g'), '');
    newval = newval.replace(new RegExp('&rsquo;', 'g'), '');
    newval = newval.replace(new RegExp('&lsquo;', 'g'), '');

    console.log(value + ' - ' + newval);
    return newval;
  }

}
