<template>
    <div>
        <div class="sidebar">
            <ul class="list">
                <li class="item">
                   <router-link class="link" to="/">
                   <img src="../assets/star-solid.svg" alt="" width="20" height="20">
                   So'ngilar
                   </router-link>
                </li>
                <li class="item">
                   <router-link class="link" to="/popular">
                   <img src="../assets/fire-solid.svg" alt="" width="20" height="20">
                   Ommabop
                   </router-link>
                </li>
                <li class="item">
                   <router-link class="link" to="/events">
                   <img src="../assets/calendar-solid.svg" alt="" width="20" height="20">
                   Tadbirlar
                   </router-link>
                </li>
                <li class="item">
                   <router-link class="link" to="/vacancy">
                   <img src="../assets/suitcase-solid.svg" alt="" width="20" height="20">
                   Vakansiyalar
                   </router-link>
                </li>
                <li class="item">
                   <router-link class="link" to="/rating">
                   <img src="../assets/trophy-solid.svg" alt="" width="20" height="20">
                   Reytinglar
                   </router-link>
                </li>
                <li class="item">
                   <router-link class="link" to="/weather">
                   <img src="../assets/cloud-solid.svg" alt="" width="20" height="20">
                   Ob-havo
                   </router-link>
                </li>
                <li class="item">
                   <router-link class="link" to="/company">
                   <img src="../assets/building-solid.svg" alt="" width="20" height="20">
                   Kopmaniyalar
                   </router-link>
                </li>
            </ul>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>


<style >
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

    .sidebar{
        background-color: white;
        margin-top: 0px;
        width: 200px !important;
        height: 600px;
        box-shadow: 2px 15px 32px -11px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 2px 15px 32px -11px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 2px 15px 32px -11px rgba(0, 0, 0, 0.75);
    }

    .list{
        margin-left: 10px;
        margin-top: 30px;
        position: absolute;
        list-style: none;
    }

    .item{
        margin-top: 20px  
    }

    .link{
        color: black;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        background-color: transparent;
        width: 120px;
        padding: 5px;
        border-radius: 5px;
        text-decoration: none
    }

    ul a.router-link-exact-active {
        color: black;
        background-color:#f6f8fb;
        width: 120px;
        padding: 5px;
        border-radius: 5px;
        box-shadow: 2px 2px 8px 2px rgba(0,0,0,0.11);
-webkit-box-shadow: 2px 2px 8px 2px rgba(0,0,0,0.11);
-moz-box-shadow: 2px 2px 8px 2px rgba(0,0,0,0.11);

    }

    .link img{
        margin-right: 10px 
    }
</style>
