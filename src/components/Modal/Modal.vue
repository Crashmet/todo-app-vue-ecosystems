<template>
  <div class="form">
    <form @submit.prevent="handleFormSubmit">
      <div class="form__header">
        <h2 class="form-header__title">Добавление пользователя</h2>
        <button
          class="form-header__button"
          @click="handelCloseModal"
          type="button"
        >
          X
        </button>
      </div>

      <div>
        <div>
          <label class="form__input_label">Имя</label>
          <input
            class="form__input"
            required
            id="name"
            type="text"
            v-model="name"
            placeholder="Введите имя"
          />
        </div>

        <div>
          <label class="form__input_label">Телефон</label>
          <input
            class="form__input"
            placeholder="+7 999 123-45-67"
            id="phone"
            required
            type="text"
            v-model="phone"
          />
        </div>

        <div v-if="allUsers.length > 0">
          <label class="form__input_label">Начальник</label>
          <select class="form__input" name="chief" id="chief" v-model="chief">
            <option :value="null"></option>
            <option v-for="user in allUsers" :value="user" :key="user.id">
              {{ user.marker }} {{ user.name }}
            </option>
          </select>
        </div>
      </div>

      <button class="form__button_add" type="submit">
        Сохранить
      </button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "Modal",

  props: {
    users: {
      type: Array
    }
  },

  data() {
    return {
      name: "",
      phone: "",
      chief: null,

      foundCheif: null,

      allUsers: []
    };
  },

  created() {
    this.getAllUsers(this.users);
  },

  methods: {
    getAllUsers(users) {
      this.allUsers = [];

      this.setAllUsers(users);

      this.sortAllUsersArr(this.allUsers);
    },

    sortAllUsersArr(users) {
      users.sort((a, b) => {
        return a.marker.localeCompare(b.marker);
      });
    },

    setAllUsers(users) {
      users.map(el => {
        if (el.subordinates.length > 0) {
          this.setAllUsers(el.subordinates);
        }
        return this.allUsers.push({
          marker: el.marker,
          name: el.name,
          id: el.id
        });
      });
    },

    handelCloseModal() {
      this.$emit("handelCloseModal");
    },

    addMarkerUser() {
      if (this.chief === null) {
        return `${this.users.length + 1}.`;
      } else {
        this.searchChief(this.users);
        return `${this.foundCheif.marker}${this.foundCheif.subordinates.length +
          1}.`;
      }
    },

    searchChief(users) {
      users.forEach(el => {
        if (this.chief.id === el.id) {
          return (this.foundCheif = el);
        } else if (el.subordinates.length > 0) {
          this.searchChief(el.subordinates);
        }
      });
    },

    handleFormSubmit() {
      const marker = this.addMarkerUser();

      const newUser = {
        marker,
        name: this.name,
        phone: this.phone,
        id: uuidv4(),
        chief: this.chief,
        subordinates: []
      };

      this.$emit("addNewUser", newUser);

      this.name = "";
      this.phone = "";
      this.chief = null;

      this.getAllUsers(this.users);
    }
  }
};
</script>

<style scoped>
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 35px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
}

.form-header__title {
  margin-right: 10px;
  font-size: 22px;
}

.form-header__button {
  outline: 0;
  background: #e13d3d;
  padding: 10px 15px;
  border: 0;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.form-header__button:hover,
.form-header__button:active,
.form-header__button:focus {
  background: #a72323;
}

.form__input_label {
  margin-bottom: 10px;
  padding: 8px;
}

.form__input {
  box-sizing: border-box;
  margin: 10px 0 25px 0;
  padding: 12px;
  width: 100%;
  font-size: 14px;
  border: 0;
  outline: 0;
  background: #f2f2f2;
}

.form__button_add {
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 12px;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.form__button_add:hover,
.form__button_add:active,
.form__button_add:focus {
  background: #328136;
}

.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}

.form .message a {
  color: #4caf50;
  text-decoration: none;
}

.form .register-form {
  display: none;
}

body {
  background: rgb(141, 194, 111);
  background: linear-gradient(
    90deg,
    rgba(141, 194, 111, 1) 0%,
    rgba(118, 184, 82, 1) 50%
  );

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
