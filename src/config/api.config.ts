import { Categorias } from "../model/categorias";
import { Cadastro } from "../model/cadastro"
import { Provas } from "../model/provas";
import { Respostas } from "../model/respostas";
import { Questoes } from "../model/questoes";

export const C: Categorias[] = [

    { id: 1, nome: "Contato" },
    { id: 2, nome: "Sobre nós" },
    { id: 3, nome: "Video-aulas" },
    
]
 
export const P: Provas[] = [

    { id: 1, nome: "Concurso" },
    { id: 2, nome: "Enem" },
    { id: 3, nome: "Detran" },
    { id: 4, nome: "Vestibular" },
    { id: 5, nome: "Certificação" }

    
]

export const R: Respostas[] = [

    {numero_questao: 1, alternativa: "b"},
    {numero_questao: 2, alternativa: "b"},
    {numero_questao: 3, alternativa: "b"},
    {numero_questao: 4, alternativa: "b"},
    {numero_questao: 5, alternativa: "b"},
    {numero_questao: 6, alternativa: "b"},
    {numero_questao: 7, alternativa: "b"},
    {numero_questao: 8, alternativa: "b"},
    {numero_questao: 9, alternativa: "b"},
    {numero_questao: 10, alternativa: "b"}

]


export const Q: Questoes[] = [
    
    {   
        numero_q: 1, 
        questao: "O esquema funcionava através da superfaturação de obras que faziam\
        parte de um programa que tinha como objetivo acelerar o crescimento\
        econômico no País”. Essa descrição corresponde a uma operação\
        criminosa no Brasil. Trata-se da:",
        alternativa1: "Operação Lava Jato",
        alternativa2: "Operação Greenfield",
        alternativa3: "Operação Navalha",
        alternativa4: "Operação Panatenaico",
        alternativa5: "Operação Carne Fraca",
        resposta: "a"
    },

    {   
        numero_q: 2, 
        questao: " Em que ano e onde aconteceu o maior\
        acidente aéreo da história do Brasil?",
        alternativa1: "Ano 2007, em São Paulo",
        alternativa2: "Ano 2006, no Mato Grosso",
        alternativa3: "Ano 1982, no Ceará",
        alternativa4: "Ano 1996, em São Paulo",
        alternativa5: "Ano 1952, na Floresta Amazônica",
        resposta: "a"

    }
]