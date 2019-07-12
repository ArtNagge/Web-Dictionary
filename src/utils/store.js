import { observable, decorate, computed, action } from 'mobx';

class Store {
    sidebar =  [
        {title: 'Программирование', url: "Программирование", icon: {nameIcon: 'code', fS: 22}},
        {title: 'Дизайн', url: "Дизайн", icon: {nameIcon: 'brush', fS: 22}},
        {title: 'Хаккинг', url: "Хаккинг", icon: {nameIcon: 'code-working', fS: 22}},
    ];

    posts = [];

    get sidebarMenu() {
        return this.sidebar;
    }

    get allPosts() {
        return this.posts;
    }

    setAllPosts(posts) {
        this.posts = posts;
    }

}

decorate(Store, {
    posts: observable,
    sidebarMenu: computed,
    allPosts: computed,
    setAllPosts: action
});

export default new Store();