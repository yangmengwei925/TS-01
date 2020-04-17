let a:number =100;
let b:string ="hello";
let c:boolean =!!"hello";
let d =200;

// let e:Array<number>=[1,2,3];
let e:Array<any> = [1,2,3];
let direction:[string,string,string,string,string] =['top','left','down','right','center'];
enum statusCode {
    'top'=100,
    'left'='',
    'down'='',
    'right'="",
}
console.log(statusCode ['right'],statusCode[100])
let f:{a:number} ={a:100};
console.log(f.a)
interface AjaxType{
    code: number,   // 普通属性
    data?: AjaxType,  // 可有可无的属性
    readonly msg: string // 只读属性
    [key:string]:any
}
let g:AjaxType ={
    code:100,
    data:{
        code:100,
        msg:"success"
    },
    msg:"请求成功",
    a:"",
    b:"",
    c:""
}
const add: (a:number, b:number)=>number = (a:number, b:number)=>a+b
add(1,2)
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap(['hello',100])
swap([[],{}])

function pick<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}
pick({a:1,b:2,c:3,d:4,e:5},['a','b','c','d','e'])
//联合类型 交叉类型
let h:string |number|boolean =1000;
interface IA{
    click: Function,
    list: []
}
interface IB{
    totalNum: number,
    totalPrice: number
}

let i: IA & IB = {
    click: ()=>{},
    list: [],
    totalNum: 100,
    totalPrice: 1000
}
console.log('i的属性...')

let j = {};
console.log('j的click属性...', (j as IA).click)
