import { c as create_ssr_component, e as escape, a as validate_store, b as subscribe, f as each, d as add_attribute, v as validate_component, n as null_to_empty } from "../../../chunks/index2.js";
import "../../../chunks/firebase.js";
import "firebase/auth";
import { w as writable } from "../../../chunks/index.js";
import "firebase/firestore";
const authStore = writable({
  user: null,
  loading: true,
  data: {}
});
const TodoItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".todo.s-Q8a94wiD58C4.s-Q8a94wiD58C4{border-left:1px solid cyan;padding:8px 14px;display:flex;align-items:center;justify-content:space-between}.actions.s-Q8a94wiD58C4.s-Q8a94wiD58C4{display:flex;align-items:center;gap:14px;font-size:1.3rem}.actions.s-Q8a94wiD58C4 i.s-Q8a94wiD58C4{cursor:pointer}.actions.s-Q8a94wiD58C4 i.s-Q8a94wiD58C4:hover{color:coral}",
  map: null
};
const TodoItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { todo } = $$props;
  let { editTodo } = $$props;
  let { removeTodo } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  if ($$props.editTodo === void 0 && $$bindings.editTodo && editTodo !== void 0)
    $$bindings.editTodo(editTodo);
  if ($$props.removeTodo === void 0 && $$bindings.removeTodo && removeTodo !== void 0)
    $$bindings.removeTodo(removeTodo);
  $$result.css.add(css$1);
  return `<div class="todo s-Q8a94wiD58C4"><p>${escape(index + 1)}. ${escape(todo)}</p>
    <div class="actions s-Q8a94wiD58C4"><i class="fa-regular fa-pen-to-square s-Q8a94wiD58C4"></i>
        <i class="fa-regular fa-trash-can s-Q8a94wiD58C4"></i></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".mainContainer.s-jZJiUkwef1J0.s-jZJiUkwef1J0{display:flex;flex-direction:column;min-height:100vh;gap:24px;padding:24px;width:100%;max-width:1000px;margin:0 auto}.headerContainer.s-jZJiUkwef1J0.s-jZJiUkwef1J0{display:flex;align-items:center;justify-content:space-between}.headerBtns.s-jZJiUkwef1J0.s-jZJiUkwef1J0{display:flex;align-items:center;gap:14px}.headerContainer.s-jZJiUkwef1J0 button.s-jZJiUkwef1J0{background:#003c5b;color:white;padding:10px 18px;border:none;border-radius:4px;font-weight:700;display:flex;align-items:center;gap:10px;cursor:pointer}.headerContainer.s-jZJiUkwef1J0 button i.s-jZJiUkwef1J0{font-size:1.1rem}.headerContainer.s-jZJiUkwef1J0 button.s-jZJiUkwef1J0:hover{opacity:0.7}main.s-jZJiUkwef1J0.s-jZJiUkwef1J0{display:flex;flex-direction:column;gap:8px;flex:1}.enterTodo.s-jZJiUkwef1J0.s-jZJiUkwef1J0{display:flex;align-items:stretch;border:1px solid #0891b2;border-radius:5px;overflow:hidden}.errorBorder.s-jZJiUkwef1J0.s-jZJiUkwef1J0{border-color:coral !important}.enterTodo.s-jZJiUkwef1J0 input.s-jZJiUkwef1J0{background:transparent;border:none;padding:14px;color:white;flex:1}.enterTodo.s-jZJiUkwef1J0 input.s-jZJiUkwef1J0:focus{outline:none}.enterTodo.s-jZJiUkwef1J0 button.s-jZJiUkwef1J0{padding:0 28px;background:#003c5b;border:none;color:cyan;font-weight:600;cursor:pointer}.enterTodo.s-jZJiUkwef1J0 button.s-jZJiUkwef1J0:hover{background:transparent}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  validate_store(authStore, "authStore");
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let todoList = [];
  let currTodo = "";
  authStore.subscribe((curr) => {
    todoList = curr.data.todos;
  });
  function editTodo(index) {
    let newTodoList = [...todoList].filter((val, i) => {
      console.log(i, index, i !== index);
      return i != index;
    });
    currTodo = todoList[index];
    todoList = newTodoList;
  }
  function removeTodo(index) {
    let newTodoList = [...todoList].filter((val, i) => {
      console.log(i, index, i !== index);
      return i != index;
    });
    todoList = newTodoList;
  }
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `${!$authStore.loading ? `<div class="mainContainer s-jZJiUkwef1J0"><div class="headerContainer s-jZJiUkwef1J0"><h1>Todo List</h1>
            <div class="headerBtns s-jZJiUkwef1J0"><button class="s-jZJiUkwef1J0"><i class="fa-regular fa-floppy-disk s-jZJiUkwef1J0"></i>
                    <p>Save</p></button>
                <button class="s-jZJiUkwef1J0"><i class="fa-solid fa-right-from-bracket s-jZJiUkwef1J0"></i>
                    <p>Logout</p></button></div></div>
        <main class="s-jZJiUkwef1J0">${todoList.length === 0 ? `<p>You have nothing to do!</p>` : ``}
            ${each(todoList, (todo, index) => {
    return `${validate_component(TodoItem, "TodoItem").$$render($$result, { todo, index, removeTodo, editTodo }, {}, {})}`;
  })}</main>
        <div class="${escape(null_to_empty("enterTodo "), true) + " s-jZJiUkwef1J0"}"><input type="text" placeholder="Enter todo" class="s-jZJiUkwef1J0"${add_attribute("value", currTodo, 0)}>
            <button class="s-jZJiUkwef1J0">ADD</button></div></div>` : ``}`;
});
export {
  Page as default
};
