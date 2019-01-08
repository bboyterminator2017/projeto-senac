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

    },

    {   
        numero_q: 3,
        questao: "Em um lote com 250 peças, foi constatado\
        que existem exatamente seis defeituosas.\
        Retirando-se, ao acaso, uma peça desse lote,\
        a probabilidade de que ela seja perfeita é de _____%.",
        alternativa1: "82,3",
        alternativa2: "85,5",
        alternativa3: "97,6",
        alternativa4: "98,2",
        alternativa5: "NRA",
        resposta: "c"
        
    },

    {
        numero_q: 4,
        questao: "A metade da medida do ângulo interno de um\
         octógono regular, em graus, é ",
        alternativa1: "67,5",
        alternativa2: "78,6",
        alternativa3: "120",
        alternativa4: "85",
        alternativa5: "NRA",
        resposta: "a"


    },


    {
        numero_q: 5,
        questao: "Assinale a frase que contém metonímia\
        do tipo parte pelo todo.",
        alternativa1: "A cidade estaria ciente e, por trás de persianas corridas,\
        olhos curiosos acompanhariam o desfile. (Renard Perez",
        alternativa2: "Disseram-lhe que no amor a perseverança vencia tudo,\
         e ele perseverou até se tornar insuportável. (Ramalho Ortigão)",
        alternativa3: "Poesia é um estado de alma religioso e metafísico\
         em que o homem comunga diretamente com a divindade. (Alberto Ramos)",
        alternativa4: "Muito ocupado no asilo,\
         não tenho com quem deixar os órfãos. (Otto Lara Resende)",
        alternativa5: "NRA",
        resposta: "a"


    },

    {
        numero_q: 6,
        questao: "As alternativas contêm uma sequência de períodos\
        de um dos capítulos do romance São Bernardo,\
        de Graciliano Ramos. Assinale a que apresenta em\
        destaque um verbo irregular.",
        alternativa1: "Conheci que Madalena era boa em demasia,\
        mas não conheci tudo de uma vez.",
        alternativa2: "Ela se revelou pouco a pouco,\
         e nunca se revelou inteiramente.",
        alternativa3: "A culpa foi minha, ou antes, a culpa foi\
         desta vida agreste, que me deu uma alma agreste.",
        alternativa4: "E, falando assim, compreendo que perco o tempo.",
        alternativa5: "NRA",
        resposta: "c"
    },

    {
        numero_q: 7,
        questao: "Considere a frase a seguir:\
        “Algumas crianças bebem leite.\
        Dentre as alternativas, a negação\
        dessa frase corresponde a:",
        alternativa1: "Existe uma criança que bebe leite.",
        alternativa2: "Existe uma criança que não bebe leite.",
        alternativa3: "Algumas crianças não bebem leite.",
        alternativa4: "Todas as crianças não bebem leite.",
        alternativa5: "NRA",
        resposta: "d"
    },

    {
        numero_q: 8,
        questao: "Tempos atrás, uma organização recebeu um bloco IPv4 /18\
        (alocação Classless Inter Domain Routing – CIDR).\
        Os administradores de rede dividiram todo esse bloco\
        em sub-redes, cada uma delas com, no máximo,\
        510 endereços IPv4 disponíveis para interfaces de rede.\
        Agora, com o advento do IPv6, essa mesma organização\ recebeu um bloco IPv6 /48. Considere que os administradores\
        de rede querem dividir esse bloco IPv6 de forma a manter o mesmo\
        número de sub-redes que havia na antiga infraestrutura IPv4.\
        Nessa situação, em notação CIDR, qual é a máscara de rede que\
        deve ser empregada para a rede IPv6 dessa organização?",
        alternativa1: "/23",
        alternativa2: "/53",
        alternativa3: "/59",
        alternativa4: "/69",
        alternativa5: "/115",
        resposta: "b"


    },


    {
        numero_q: 9,
        questao: "Uma tabela de roteamento IPv4 possui várias entradas,\
        cada uma fornece uma rota para uma rede de destino.\
        Entre essas é possível definir uma rota, chamada de rota\
        específica, que representa uma rota alternativa para se chegar\
        a uma determinada estação (interface de rede de um equipamento).\
        Qual é a máscara de rede associada à rota específica?",
        alternativa1: "0.0.0.0",
        alternativa2: "255.0.0.0",
        alternativa3: "255.255.0.0",
        alternativa4: "255.255.255.0",
        alternativa5: "255.255.255.255",
        resposta: "e"
    },


    {
        numero_q: 10,
        questao: "Todos os profissionais devem atuar na\
        escola para relação professor-aluno. Nesse sentido,\
        compete ao Supervisor Escolar uma atuação progressista,\
        que se verifica nas assertivas abaixo, exceto na:",
        alternativa1: "Promover avaliação\
        permanente do currículo visando o replanejamento.",
        alternativa2: "Garantir que a escola cumpra sua função\
        social de construção e socialização do conhecimento.",
        alternativa3: "Coordenar a elaboração do planejamento curricular.",
        alternativa4: "Controlar a produtividade do ensino e o\
         aperfeiçoamento da técnica docente.",
        alternativa5: "NRA",
        resposta: "d"

    }



    
]