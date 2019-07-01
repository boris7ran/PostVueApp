import { create } from "domain";

export const mixin1 = {
    data() {
        return {
            user: '',
        }
    },

    created() {
        this.user = 'Misa';
        console.log('Created Mixin 1');
    },

    methods: {
        getUserName() {
            alert('Tanja Moranovic');
        }
    }
}

export const mixin2 = {
    data() {
        return {
            user: '',
        }
    },

    created() {
        this.user = 'Vanja';
        console.log('Created Mixin 2');
    },

    methods: {
        getUserName() {
            alert('Sinisa Pavic');
        }
    }
}

export const mixin3 = {
    data() {
        return {
            user: '',
        }
    },

    created() {
        this.user = 'Str'
        console.log('Created Mixin 3');
    },

    mounted() {
        console.log('Mounted Mixin 3');
    }
}

export const date = {
    data() {
        return {
            datum: new Date()
        }
    },

    formatDate(date) {
        return new Intl.DateTimeFormat().format(this.date);
    }
}