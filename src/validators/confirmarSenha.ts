import { AbstractControl } from "@angular/forms";

export function ValidateConfirmarSenha(control: AbstractControl){
    if(!control.root.value){
        return null;
    }

    if(control.root.value === control.root.value.password) {
        return null;
    }    else {
            return { ValidConfirmarSenha: true};
        }
    }
