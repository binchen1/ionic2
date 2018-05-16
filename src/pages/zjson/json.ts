interface UserArray{
    [index:number]:string;
}
let userArray:UserArray;
userArray=['张三','李四']
export interface AccountInterface {
  "id"?: number;
  "name"?: string;
  "details"?: string;
  "mobile"?: string;
  "img"?: string;
}

export class Json implements AccountInterface{
    "id": number;
    "name": string;
    "details": string;
    "mobile": string;
    "img": string;
    private list:AccountInterface[];
    constructor(data?: AccountInterface){
        Object.assign(this, data);
    }
    get(){
         this.list=[
             {"id":1,"name":"人事部","details":"建立、执行招聘、培训、考勤、劳动纪律等","img":"assets/index/xietong03.png"},
             {"id":2,"name":"核心研发部","details":"肩负着研制、开发新产品及完善产品功能","img":"assets/index/xietong02.png"},
             {"id":3,"name":"核心研发部","details":"投资项目的具体实施运作及其经营管理","img":"assets/index/xietong04.png"}
        ]
        return this.list;
    }
}