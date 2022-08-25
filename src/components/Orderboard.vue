<template>
  <div class="container">
    <h1 class="title">My Coffee Shop</h1>
    <table>
      <thead>
        <tr>
          <th width="12%">#</th>
          <th width="auto">品項</th>
          <th width="12%">價格</th>
          <th width="12%">尺寸</th>
          <th width="20%">備註</th>
          <th width="32%"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>範例</td>
          <td>拿鐵</td>
          <td>90</td>
          <td>L</td>
          <td>微冰微糖</td>
          <td>
            <button class="btn_alter">修改</button>
            <button class="btn_del">刪除</button>
          </td>
        </tr>
        <tr v-for="(order, rowid) in orders" :key="rowid">
          <td>{{ ++rowid }}</td>
          <td @click="editable(rowid)" :contenteditable="isContenteditable">
            {{ order.name }}
          </td>
          <td
            @click="editable(rowid)"
            :contenteditable="isContenteditable"
            @keyup="value = value.replace(/^(0+)|[^\d]+/g, '')"
          >
            {{ order.price }}
          </td>
          <td @click="editable(rowid)" :contenteditable="isContenteditable">
            {{ order.size }}
          </td>
          <td @click="editable(rowid)" :contenteditable="isContenteditable">
            {{ order.notes }}
          </td>
          <td>
            <button
              v-if="!(isEditing && rowid === currentId)"
              class="btn_alter"
              @click="alterOrder(rowid)"
            >
              修改
            </button>
            <button
              v-if="isEditing && rowid === currentId"
              class="btn_save"
              @click="saveOrder"
            >
              儲存
            </button>
            <button type="button" class="btn_del" @click="removeOrder(rowid)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <form @submit.prevent="">
      <div>
        <label for="name">品項<span>*</span></label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label for="price">價格<span>*</span></label>
        <input
          type="text"
          v-model="price"
          onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
        />
      </div>
      <div>
        <label for="size">尺寸<span>*</span></label>
        <select v-model="size">
          <option disabled value="">請選擇</option>
          <option>L</option>
          <option>M</option>
          <option>S</option>
        </select>
      </div>
      <div>
        <label for="notes">備註</label>
        <textarea rows="1" placeholder="輸入文字" v-model="notes"></textarea>
      </div>
      <div class="error" v-if="nameError">{{ nameError }}</div>
      <div class="error" v-if="priceError">{{ priceError }}</div>
      <div class="error" v-if="sizeError">{{ sizeError }}</div>
      <div>
        <button type="submit" class="btn_submit" @click="onSubmit">新增</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: "",
      size: "",
      notes: "",
      orders: [],
      nameError: "",
      priceError: "",
      sizeError: "",
      currentId: -1,
      isEditing: false,
      isContenteditable: false,
      focus: false,
    };
  },

  methods: {
    onSubmit() {
      this.nameError = this.name.trim() == "" ? "「品項」為必填欄位" : "";
      this.priceError = this.price.trim() == "" ? "「價格」為必填欄位" : "";
      this.sizeError = this.size.trim() == "" ? "「尺寸」為必填欄位" : "";

      if (this.nameError || this.priceError || this.sizeError) {
        return;
      } else {
        this.orders.push({
          name: this.name,
          price: this.price,
          size: this.size,
          notes: this.notes,
        });
        console.log(this.orders);
        this.clearForm();
      }
    },

    clearForm() {
      (this.name = ""), (this.price = ""), (this.size = ""), (this.notes = "");
    },

    alterOrder(id) {
      this.isEditing = true;
      this.currentId = id;
    },

    saveOrder() {
      this.isEditing = false;
      this.currentId = -1;
    },

    editable(index) {
      // console.log(index === this.currentId);
      if (this.isEditing && index === this.currentId) {
        this.isContenteditable = true;
      } else {
        this.isContenteditable = false;
      }
    },

    removeOrder(rowid) {
      // console.log(rowid);
      const deleteid = rowid - 1;
      // console.log(deleteid);
      this.orders.splice(deleteid, 1);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mansalva&display=swap");

.title {
  font-family: "Mansalva", cursive;
  font-size: 3rem;
  margin-bottom: 20px;
}

.container {
  background-color: rgb(237, 220, 209);
  padding: 30px;
  border-radius: 20px;
  max-width: 500px;
  margin: 0 auto;
}

table {
  border: 1px solid;
  width: 100%;
  border-collapse: collapse;
  margin: 20px auto;
  word-break: break-all;
  overflow: auto;
}

th {
  border: 1px solid;
  height: 25px;
  background-color: rgb(180, 128, 94);
}

td {
  border: 1px solid;
  text-align: center;
}

tr:nth-child(even) {
  background-color: #e2c8b6;
}

form {
  text-align: center;
}

label {
  color: rgb(82, 82, 82);
  display: inline-block;
  margin: 6px;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
}

input,
select,
textarea {
  padding: 2px;
  width: 60%;
  border: none;
  vertical-align: middle;
}

textarea {
  margin-left: 5px;
}

button {
  border: none;
  padding: 3px 6px;
  color: #fff;
  border-radius: 5px;
  margin: 2px 1px;
}

.btn_alter {
  background-color: #af1b3f;
  transition-duration: 0.3s;
}

.btn_alter:hover {
  background-color: #d5214e;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
}

.btn_del {
  background-color: #4f5d2f;
  transition-duration: 0.3s;
}

.btn_del:hover {
  background-color: #64743b;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
}

.btn_submit {
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 1.2rem;
  background-color: #3891a6;
  transition-duration: 0.2s;
}

.btn_submit:hover {
  background-color: rgb(44, 126, 145);
  box-shadow: 0px 1px 3px #00000033;
}

.btn_save {
  background-color: #e8c201;
  color: rgb(41, 41, 41);
  transition-duration: 0.3s;
}

.btn_save:hover {
  background-color: #eedc1b;
  color: rgb(41, 41, 41);
  box-shadow: 0px 1px 5px #00000033;
}

.error {
  color: #d80f0f;
  /* display: inline-block; */
  margin: 3px;
}

span {
  color: #d80f0f;
}
</style>
