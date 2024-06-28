import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories',{
    state: ()=>({
        categories:[
            'All',
            'Action',
            'Adventure',
            'Art',
            'Anthology',
            'Biography',
            'Cooking',
            'Children',
            'Classic',
            'Contemporary',
            'Crime',
            'Cyberpunk',
            'Drama',
            'Dystopian',
            'Essay',
            'Fairy Tale',
            'Fantasy',
            'Fiction',
            'Graphic Novel',
            'Historical Fiction',
            'Horror',
            'Magical Realism',
            'Memoir',
            'Mystery',
            'Non-Fiction',
            'Paranormal',
            'Psychology',
            'Poetry',
            'Romance',
            'Satire',
            'Science',
            'Self-Help',
            'Thriller',
            'Young Adult',
           
            ]
        })
    })