//import Model from '/model.js';
import my_profilePage from './pages/my_profile.js';
import my_adsPage from './pages/my_ads.js';
import create_adPage from './pages/create_ad.js';
import all_adsPage from './pages/all_ads.js';


const my_profileNavNode = document.querySelector('[data-role=nav-my_profile]');
const my_ads_NavNode = document.querySelector('[data-role=nav-my_ads]');
const create_adNavNode = document.querySelector('[data-role=nav-create_ad]');
const all_adsNavNode = document.querySelector('[data-role=nav-all_ads]');

let activeNavNode;

function setActiveNavNode(node){
    if (activeNavNode){
        activeNavNode.classList.remove('active');
    }
    activeNavNode = node;
    activeNavNode.classList.add('active');
}


export default {
    async my_profileRoute(){
        my_profilePage.render();
        setActiveNavNode(my_profileNavNode);
    },

    async my_adsRoute(){
        my_adsPage.render();
        setActiveNavNode(my_adsNavNode);
    },

    async create_adRoute(){
        create_adPage.render();
        setActiveNavNode(create_adNavNode);
    },

    async all_adsRoute(){
        all_adsPage.render();
        setActiveNavNode(all_adsNavNode);
    },

    async exitRoute(){
        console.log('rr');
        document.location.href = "/home.html";
    }
};