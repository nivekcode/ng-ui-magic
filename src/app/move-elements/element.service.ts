import {ElementRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  public elementMap = new Map<string, ElementRef>();
}
