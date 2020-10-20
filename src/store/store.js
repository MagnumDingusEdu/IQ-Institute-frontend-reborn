import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import User from './modules/user';

export const store = new Vuex.Store({
    state : {
        projects: [
            {
                title: 'Design a new website.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligend. d-inline-block text-truncate',

                person: 'The Net Ninja',
                upload_date: '1st Jan 2019',
                status: 'ongoing',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
            },
            {
                title: 'Code up the homepage',
                person: 'Chun Li',
                upload_date: '10th Jan 2019',
                status: 'complete',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
            },
            {
                title: 'Design video thumbnails',
                person: 'Ryu',
                upload_date: '20th Dec 2018',
                status: 'complete',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
            },
            {
                title: 'Create a community forum',
                person: 'Gouken',
                upload_date: '20th Oct 2018',
                status: 'overupload_date',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
            },
        ],
        currentScrollY: 0,
    },
    getters : {
        currentScrollY : state => {
            return state.currentScrollY;
        }

    },
    mutations : {
        setCurrentScrollY (state, {y}) {
            state.currentScrollY = y;
        },
    },

    modules : {
        user : User
    }
});