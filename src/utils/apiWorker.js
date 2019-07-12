class ApiWorker {
    getPosts(category) {
        const result = [

            {
                title: "Инкапсуляция",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Программирование"
            },
            {
                title: "Делегирование",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Программирование"
            },
            {
                title: "Дизайн",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Дизайн"
            },
            {
                title: "Снифф",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Хаккинг"
            },
            {
                title: "Кисть",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Дизайн"
            },
            {
                title: "IDE",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Программирование"
            },
            {
                title: "SQL",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Хаккинг"
            },
            {
                title: "XSS",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Хаккинг"
            },
            {
                title: "RACE CONDITION",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolores facilis sit. Accusamus ad dolores inventore ipsa modi saepe sit tempora! Accusantium dolore eveniet incidunt minus soluta unde vel.",
                category: "Хаккинг"
            },

        ];
        return result.filter((item) => item.category === category);
    }
}

export default new ApiWorker();