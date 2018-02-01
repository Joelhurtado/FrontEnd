import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

function verficarespacios(c:AbstractControl){
  if(c.value==null)return null;
  if(c.value.indexOf(' ')=>0){
    return {noespacios:true}
  }
  return null;
}
@Directive({
  selector:'[no_espacios]',
  provides:[
    {provide:NG_VALIDATORS,multi:true,useValue:verficarespacios}
  ]
})
export class NoEspacios{}
