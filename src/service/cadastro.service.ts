/*import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Cadastro } from "../model/cadastro";

@Injectable()
export class CadastroService {
        constructor(private http : HttpClient) { }

        getClientes() : Observable<Cadastro[]>{
            return this.http.get<Cadastro[]>(
                'https://tcc-lojavirtual.herokuapp.com/clientes'
            );

            
    }

    cadastrar(cliente: Cadastro){
        return this.http.post(
            'https://tcc-lojavirutal.herokuapp.com/clientes',cliente,
            {
                observe: 'response',
                responseType: 'text'
            }

        )
    }
}*/