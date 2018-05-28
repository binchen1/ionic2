interface UserArray{
    [index:number]:string;
}
let userArray:UserArray;
userArray=['张三','李四']
export interface ListInterface {
  "id"?: number;
  "name"?: string;
  "details"?: string;
  "mobile"?: string;
  "img"?: string;
}

export class Json implements ListInterface{
    "id": number;
    "name": string;
    "details": string;
    "mobile": string;
    "img": string;
     list:ListInterface[];
     listget:ListInterface[];
    constructor(data?: ListInterface){
        // 
        // return Object.assign(this, data);
        this.list=[
             {"id":1,"name":"人事部","details":"建立、执行招聘、培训、考勤、劳动纪律等","img":"assets/index/xietong03.png"},
             {"id":2,"name":"核心研发部","details":"肩负着研制、开发新产品及完善产品功能","img":"assets/index/xietong02.png"},
             {"id":3,"name":"核心研发部","details":"投资项目的具体实施运作及其经营管理","img":"assets/index/xietong04.png"},
             {"id":4,"name":"人事部","details":"建立、执行招聘、培训、考勤、劳动纪律等","img":"assets/index/xietong03.png"},
             {"id":5,"name":"核心研发部","details":"肩负着研制、开发新产品及完善产品功能","img":"assets/index/xietong02.png"},
             {"id":6,"name":"核心研发部","details":"投资项目的具体实施运作及其经营管理","img":"assets/index/xietong04.png"},
             {"id":7,"name":"人事部","details":"建立、执行招聘、培训、考勤、劳动纪律等","img":"assets/index/xietong03.png"},
             {"id":8,"name":"核心研发部","details":"肩负着研制、开发新产品及完善产品功能","img":"assets/index/xietong02.png"},
             {"id":9,"name":"核心研发部","details":"投资项目的具体实施运作及其经营管理","img":"assets/index/xietong04.png"},
             {"id":10,"name":"人事部","details":"建立、执行招聘、培训、考勤、劳动纪律等","img":"assets/index/xietong03.png"},
             {"id":11,"name":"核心研发部","details":"肩负着研制、开发新产品及完善产品功能","img":"assets/index/xietong02.png"},
             {"id":12,"name":"核心研发部","details":"肩负着研制、开发新产品及完善产品功能","img":"assets/index/xietong02.png"},
             {"id":13,"name":"人事部","details":"肩负着研制、开发新产品及完善产品功能","img":"assets/index/xietong02.png"},
             {"id":14,"name":"核心研发部","details":"肩负着研制、开发新产品及完善产品功能","img":"assets/index/xietong02.png"},
             {"id":15,"name":"人事部","details":"肩负着研制、开发新产品及完善产品功能","img":"assets/index/xietong02.png"},
             {"id":17,"name":"人事部","details":"肩负着研制、开发新产品及完善产品功能","img":"assets/index/xietong02.png"},
             {"id":16,"name":"核心研发部","details":"投资项目的具体实施运作及其经营管理","img":"assets/index/xietong04.png"}
        ]
        // return this.list;
        return this;
    }
    get(pages,num){

        let startIndex=(pages-1)*num;
        let endIndex=pages*num;
        // console.log(index)
        // for(let i=0;i<this.list.length;i++){
            // if(pages===1){
            //     this.listget=this.list.slice(0,index)
            // }else{

            // }
            this.listget=this.list.slice(startIndex,endIndex)
        // }
        //  this.listget=[
        //      {"id":3,"name":"人事部","details":"建立、执行招聘、培训、考勤、劳动纪律等","img":"assets/index/xietong03.png"},
        //      {"id":4,"name":"核心研发部","details":"肩负着研制、开发新产品及完善产品功能","img":"assets/index/xietong02.png"},
        //      {"id":5,"name":"核心研发部","details":"投资项目的具体实施运作及其经营管理","img":"assets/index/xietong04.png"}
        // ]
        return this.listget;
    }
}