<template>
    <div>
        <header class="header">
            <div class="container">
                    <div class="header__top">
                     <div class="header__left">
                    <button class="header__img-btn">
                        <img class="" src="../assets/bars-solid.svg" alt="" width="50" height="30">
                    </button>
                    <a class="header-logo__link" href="#">
                        <img class="header__logo-img" src="../assets/lenta-logo.png" alt="" width="150" height="150">
                    </a>
                    <form class="header__form">
                        <input class="header__input" type="text" placeholder="izlash...">
                    </form>
                    </div>
                     <div class="header__right">
                    <button class="ui right labeled icon button">
                        <i class="right plus icon"></i>
                             Yangi
                    </button>
                    <button class="header__btn-bell">
                        <img src="../assets/bell-regular.svg" alt="" width="25" height="25">
                    </button>
                  <a class="header__link" href="#">Kirish</a>
                </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.header {
  box-shadow: 2px 15px 32px -11px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 15px 32px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 15px 32px -11px rgba(0, 0, 0, 0.75);
  height: 120px;
  z-index: -9;
  background-color: white
}

.header__top {
  margin-top: -40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__left {
  display: flex;
  align-items: center;
}

.header__img-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.header__input {
  outline: none;
  width: 200px;
  height: 40px;
  border: none;
  background-color: rgb(228, 228, 228);
  border-radius: 5px;
}

.header__input:focus {
  background-color: white;
  border: 1px solid orange;
  transition: all 0.4s;
}

.header__right {
  display: flex;
  align-items: center;
}

.labeled{
  margin-right: 30px !important;
}

.header__btn-bell{
  background-color: transparent;
  border: none;
  margin-right: 50px !important;
}

.header__link{
  text-decoration: none;
  margin-right: 20px !important;
}
</style>
