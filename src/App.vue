<template>
  <v-app>
    <Header />
    <v-container>
      <add-modal-button
        class="add-modal__btn"
        :isShowModal="isShowModal"
        @handelShowModal="handelShowModal"
      />

      <Modal
        v-if="isShowModal"
        :users="dataUsers"
        @addNewUser="addNewUser"
        @handelCloseModal="isShowModal = false"
      />
      <Table
        class="table"
        :users="dataUsers"
        :isByUserNameDown="isByUserNameDown"
        :isByUserPhoneDown="isByUserPhoneDown"
        @sortByUserName="sortByUserName"
        @sortByUserPhone="sortByUserPhone"
        @handelResetSort="handelResetSort"
      />
    </v-container>
  </v-app>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import AddModalButton from './components/UI/AddModalButton.vue';
import ShowHintBtn from './components/UI/ShowHintBtn.vue';
import Table from './components/Table/Table.vue';
import Modal from './components/Modal/Modal.vue';

export default {
  name: 'App',
  components: {
    Header,
    AddModalButton,
    ShowHintBtn,
    Table,
    Modal,
  },

  data() {
    return {
      isShowModal: false,
      isByUserNameDown: false,
      isByUserPhoneDown: false,

      dataUsers: [],
    };
  },

  created() {
    const dataUsers = localStorage.getItem('users-list');

    if (dataUsers) {
      this.dataUsers = JSON.parse(dataUsers);
    }
  },

  methods: {
    handelResetSort() {
      this.resetSort(this.dataUsers);

      this.updateLocalStorage();
    },

    resetSort(users) {
      if (users.length === 1) {
        if (users[0].subordinates.length > 0) {
          this.resetSort(users[0].subordinates);
        }
        return;
      }

      users.sort((a, b) => {
        if (a.subordinates.length > 0) {
          this.resetSort(a.subordinates);
        }

        if (b.subordinates.length > 0) {
          this.resetSort(b.subordinates);
        }

        return a.marker.localeCompare(b.marker);
      });
    },

    sortByUserName(users) {
      this.isByUserNameDown = !this.isByUserNameDown;

      if (this.isByUserNameDown) {
        this.sortByUserNameDown(users);
      } else {
        this.sortByUserNameUp(users);
      }
    },

    sortByUserNameDown(users) {
      if (users.length === 1) {
        if (users[0].subordinates.length > 0) {
          this.sortByUserNameDown(users[0].subordinates);
        }
        return;
      }

      users.sort((a, b) => {
        if (a.subordinates.length > 0) {
          this.sortByUserNameDown(a.subordinates);
        }

        if (b.subordinates.length > 0) {
          this.sortByUserNameDown(b.subordinates);
        }

        return a.name.localeCompare(b.name);
      });
    },

    sortByUserNameUp(users) {
      if (users.length === 1) {
        if (users[0].subordinates.length > 0) {
          this.sortByUserNameUp(users[0].subordinates);
        }
        return;
      }

      users.sort((a, b) => {
        if (a.subordinates.length > 0) {
          this.sortByUserNameUp(a.subordinates);
        }

        if (b.subordinates.length > 0) {
          this.sortByUserNameUp(b.subordinates);
        }

        return b.name.localeCompare(a.name);
      });
    },

    sortByUserPhone(users) {
      this.isByUserPhoneDown = !this.isByUserPhoneDown;

      if (this.isByUserPhoneDown) {
        this.sortByUserPhoneDown(users);
      } else {
        this.sortByUserPhoneUp(users);
      }
    },

    sortByUserPhoneDown(users) {
      if (users.length === 1) {
        if (users[0].subordinates.length > 0) {
          this.sortByUserPhoneDown(users[0].subordinates);
        }
        return;
      }

      users.sort((a, b) => {
        if (a.subordinates.length > 0) {
          this.sortByUserPhoneDown(a.subordinates);
        }

        if (b.subordinates.length > 0) {
          this.sortByUserPhoneDown(b.subordinates);
        }

        return a.phone.localeCompare(b.phone);
      });
    },

    sortByUserPhoneUp(users) {
      if (users.length === 1) {
        if (users[0].subordinates.length > 0) {
          this.sortByUserPhoneUp(users[0].subordinates);
        }
        return;
      }

      users.sort((a, b) => {
        if (a.subordinates.length > 0) {
          this.sortByUserPhoneUp(a.subordinates);
        }

        if (b.subordinates.length > 0) {
          this.sortByUserPhoneUp(b.subordinates);
        }

        return b.phone.localeCompare(a.phone);
      });
    },

    handelShowModal() {
      this.isShowModal = !this.isShowModal;
    },

    addNewUser(item) {
      const { chief } = item;

      if (chief !== null) {
        this.addNewSubordinates(this.dataUsers, item);
        return;
      }

      this.dataUsers.push(item);

      this.updateLocalStorage();
    },

    addNewSubordinates(data, item) {
      data.forEach((el) => {
        if (el.name === item.chief.name && el.id === item.chief.id) {
          el.subordinates.push(item);
          return;
        }

        if (el.subordinates.length > 0) {
          this.addNewSubordinates(el.subordinates, item);
        }
      });

      this.updateLocalStorage();
    },

    updateLocalStorage() {
      localStorage.setItem('users-list', JSON.stringify(this.dataUsers));
    },
  },
};
</script>
