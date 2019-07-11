Vue.component('comp-one', {
   template: `<div>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eligendi impedit maiores nihil non nostrum possimus quae. Ad delectus eos eveniet ex modi, molestiae nisi nostrum optio quidem quos totam</div>`
});
Vue.component('comp-two', {
    template: `<div>2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eligendi impedit maiores nihil non nostrum possimus quae. Ad delectus eos eveniet ex modi, molestiae nisi nostrum optio quidem quos totam</div>`
});
Vue.component('comp-three', {
    template: `<div>3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eligendi impedit maiores nihil non nostrum possimus quae. Ad delectus eos eveniet ex modi, molestiae nisi nostrum optio quidem quos totam?</div>`
});




// глобальная


// Vue.component('el-some', {
//     props: ['title', 'counter'],
//     methods: {
//       some(index){
//           console.log(index);
//           console.log('from component');
//       }
//     },
//    template: `<div>
//             <h2>{{ title }}</h2>
//             <button @click="$emit('increase')">Increase</button>
//             <slot>
//                 <p>From component</p>
//                 <button @click="some">Some</button>
//             </slot>
//             <p>{{ counter }}</p>
//             <child-comp></child-comp>
//             </div>`
// });
// Vue.component('child-comp', {
//     data(){
//       return {
//           index: 12
//       }
//     },
//     template: `<button @click="$parent.$emit('some', index)">Child Component</button>`
// });

//локальная регистрация

// const childComp =  {
//     data(){
//         return {
//             index: 12
//         }
//     },
//     template: `<button @click="$parent.$emit('some', index)">Child Component</button>`
// };
// const elSome = {
//     props: ['title', 'counter'],
//     components: {
//       'child-comp': childComp
//     },
//     methods: {
//         some(index){
//             console.log(index);
//             console.log('from component');
//         }
//     },
//     template: `<div>
//             <h2>{{ title }}</h2>
//             <button @click="$emit('increase')">Increase</button>
//             <slot>
//                 <p>From component</p>
//                 <button @click="some">Some</button>
//             </slot>
//             <p>{{ counter }}</p>
//             <child-comp></child-comp>
//             </div>`
// };
