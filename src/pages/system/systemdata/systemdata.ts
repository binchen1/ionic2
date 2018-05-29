 interface DataInterface{
    id:number;
    name:string;
    img:string;
}
// export class SystemList implements DataInterface{

// }
// export class SystemList implements DataInterface{
export class SystemList {
    // "id":number;
    // "name":string;
    // "img":string;
    
     list:DataInterface[]=[
         {"id": 30, "name": "类型","img":"assets/images/xietong03.png"},
         {"id": 31, "name": "私营企业","img":"assets/images/xietong03.png"},
         {"id": 32, "name": "国有企业","img":"assets/images/xietong03.png"},
         {"id": 33, "name": "工会","img":"assets/images/xietong03.png"},
         {"id": 34, "name": "事业单位","img":"assets/images/xietong03.png"},
         {"id": 35, "name": "医院","img":"assets/images/xietong03.png"},
         {"id": 36, "name": "类型","img":"assets/images/xietong03.png"},
         {"id": 37, "name": "私营企业","img":"assets/images/xietong03.png"},
         {"id": 38, "name": "国有企业","img":"assets/images/xietong03.png"},
         {"id": 39, "name": "工会","img":"assets/images/xietong03.png"},
         {"id": 40, "name": "事业单位","img":"assets/images/xietong03.png"},
         {"id": 41, "name": "医院","img":"assets/images/xietong03.png"},
         {"id": 42, "name": "医院","img":"assets/images/xietong03.png"},
         {"id": 43, "name": "学校","img":"assets/images/xietong03.png"}]
   listget:DataInterface[];
    get(startIndex,endIndex){
        // console.log(this.list)
        
        // console.log(startIndex,endIndex)
        this.listget=this.list.slice(startIndex,endIndex)
        return this.listget;
    }
    
}