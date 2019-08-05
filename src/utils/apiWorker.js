class ApiWorker {
    getPosts(category) {
        const result = [

            {
                id: 1,
                title: "Инкапсуляция",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Программирование"
            },
            {
                id: 2,
                title: "Делегирование",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Программирование"
            },
            {
                id: 3,
                title: "Дизайн",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Дизайн"
            },
            {
                id: 3,
                title: "Снифф",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Хаккинг"
            },
            {
                id: 4,
                title: "Кисть",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Дизайн"
            },
            {
                id: 5,
                title: "IDE",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Программирование"
            },
            {
                id: 5,
                title: "SQL",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Хаккинг"
            },
            {
                id: 6,
                title: "XSS",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Хаккинг"
            },
            {
                id: 7,
                title: "RACE CONDITION",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Хаккинг"
            },

        ];
        return result.filter((item) => item.category === category);
    }
}

export default new ApiWorker();