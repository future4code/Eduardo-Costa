export const fieldsToForm = [
    {
        name: "name",
        label: "Nome Completo",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]{3,}",
        title: "Preencha seu nome completo"
    }, {
        name: "age",
        label: "Idade",
        type: "number",
        required: true,
        title: "Preencha sua idade (idade mínima: 18 anos)",
        min: 18
    }, {
        name: "profession",
        label: "Profissão",
        type: "text",
        title: "Escreva qual é a sua profissão",
        required: true
    }, {
        name: "country",
        label: "País de origem",
        type: "text",
        required: true,
        title: "Digite o nome do seu país de origem",
        pattern: "[a-zA-Z]{3,}",
    },
    {
        name: "applicationText",
        label: "Por qual motivo você deve ser escolhido?",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]{3,}",
        title: "Preencha seu nome completo",
        multiline: true,
        rows: 10
    }
];
