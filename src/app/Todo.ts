export class Todo{
    sno: number 
    title: string
    desc: string
    active: boolean

    constructor(todo: {sno: number, title: string, desc: string, active: boolean}) {
        this.sno = todo.sno;
        this.title = todo.title;
        this.desc = todo.desc;
        this.active = todo.active;
    }
}