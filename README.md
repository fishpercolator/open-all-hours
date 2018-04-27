# open-all-hours

> Global snackbar project

## HOWTO

vue init vuetifyjs/nuxt open-all-hours
cd open-all-hours
yarn
yarn run dev

create basic static Snackbar.vue component
load it into the layout (also lose the 'dark')
change snackbar to be off/empty by default
add the message and mutation to store
create the snacktest page & action with mapMutations
add it to the sidebar

test the button and check the Vuex store is being update (Vue dev tools)

now edit the Snackbar component to react to changes to the snack
test it! it works!

advanced - let's set the message from a variable and redirect
