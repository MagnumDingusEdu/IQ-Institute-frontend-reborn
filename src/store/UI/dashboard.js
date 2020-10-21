export default {
    state: {
        current_folder_id: 3,
        current_path: null,

        directory_listing: [],
        sorting: null,
        favorites: null,

        current_video_id: null,
        current_video_title: null,
        video_playing: false,
    },
    getters: {},
    mutations: {
        setDirectoryListing(state, payload) {
            state.directory_listing = payload;
            return true;
            },

        sortDirectoryListing(state, prop) {
            state.directory_listing.sort(sortByProperty(prop));
        },

        playVideo(state, payload){
            state.video_playing = true;
            state.current_video_id = payload.id;
            state.current_video_title = payload.title;

        },

        stopVideo(state){
            state.video_playing = false;
        }
    },
    actions: {},

}


function sortByProperty(property) {
    return function (a, b) {
        if (a[property] > b[property])
            return 1;
        else if (a[property] < b[property])
            return -1;

        return 0;
    }
}