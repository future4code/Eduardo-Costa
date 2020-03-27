export const fieldsToAddTrip = [
    {
        name: "name",
        label: "Nome da viagem",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]{3,}",
        title: "Preencha o nome da viagem"
    }, {
        name: "planet",
        label: "Planeta",
        type: "text",
        required: true,
        title: "Preencha para qual planeta será a viagem",
        pattern: "[a-zA-Z]{3,}"
    }, {
        name: "date",
        label: "Data da partida",
        type: "date",
        title: "Para quando é a partida da viagem?",
        required: true
    },
    {
        name: "description",
        label: "Coloque mais detalhes da viagem",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]{3,}",
        title: "Coloque mais detalhes da viagem",
        multiline: true,
        rows: 10
    }, 
    {
        name: "durationInDays",
        label: "Qual a duração da viagem?",
        type: "number",
        required: true,
        title: "Preencha seu nome completo",
    }
];
