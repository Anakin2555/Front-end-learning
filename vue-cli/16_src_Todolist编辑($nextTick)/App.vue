<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"/>
        <List
            :todos="todos"
        />
        <MyFooter
            :todos="todos"
            @checkAllTodo="checkAllTodo"
            @clearAllDoneTodo="clearAllDoneTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import ListComponent from "@/components/List";
import MyFooter from '@/components/MyFooter';
import pubsub from "pubsub-js";
export default {
  name: "App",
  components:{
    List,
    MyFooter,
    MyHeader
  },
  data() {
    return {
      // todos: [
      //   {id: '001', title: '吃饭', done: false},
      //   {id: '002', title: "睡觉", done: true},
      //   {id: '003', title: '打代码', done: false}
      // ]
      todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods:{
    //添加的todo
    addTodo(todo){
      console.log('我是app组件，我收到了数据');
      this.todos.unshift(todo);
    },
    checkTodo(id){
      const todo = this.todos.find(todo => todo.id === id);
      todo.done = !todo.done;
    },
    deleteTodo(_, id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    checkAllTodo(done){
      this.todos.forEach(todo => todo.done = done);
    },
    clearAllDoneTodo(){
      this.todos = this.todos.filter(todo => !todo.done)
    },
    updateTodo(id, title){
      this.todos.forEach(todo => {
         if(todo.id === id) todo.title = title;
      })
    }
  },
  watch:{
    //深度监视
    todos:{
      deep: true, //深度监视当我监视数组中的对象的某个属性的变化它也会产生反应
      handler(newValue) {
        //本地存储存的是key和value都是字符串
        //数据存放在本地存储中
        localStorage.setItem("todos", JSON.stringify(newValue))
      }
    },
  },
  //已挂在绑定事件总线
  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo);
    this.$bus.$on('updateTodo', this.updateTodo);
    this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo);
  },
  //被卸载注意解绑
  beforeMount() {
    this.$bus.$off('checkTodo');
    this.$bus.$off('updateTodo');
    pubsub.unsubscribe(this.pubId); //取消订阅的方式与取消定时器的方式是类似的，记住
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit{
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(103, 159, 180);
  margin-right: 5px;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>


