export interface IModules {
    moduleid: number,
    modulename:String,
    menuname:String,
    description:String,
    href:String,
    icon:String,
    order:number,
    active:boolean,
    children:string[],
    pages: {
        pageid: number,
        moduleid: number,
        parentpageid: number,
        pagename: string,
        menuname: string,
        href: string,
        icon: string,
        order: number,
        active: boolean,
        children: string[],
    }[];
}

export const modules=[
    {
        moduleid:1,
        modulename:'NAVIGATION',
        menuname:'NAVIGATION',
        description:'',
        href:'/',
        icon:'home',
        order:1,
        active:true,
        children:['modules children'],
        pages:[
            {
                pageid:1,
                moduleid:1,
                parentpageid:0,
                pagename:'Home',
                menuname:'Home',
                href:'/home',
                icon:'far fa home',
                order:1,
                active:true,
                children:['pages children']
            },
            {
                pageid:1,
                moduleid:1,
                parentpageid:0,
                pagename:'Dashboards',
                menuname:'Dashboards',
                href:'/dashboard',
                icon:'far fa-bullseye-arrow',
                order:2,
                active:true,
                children:['pages children']
            }

        ]
    },
    {
        moduleid:2,
        modulename:'USER',
        menuname:'USER',
        description:'',
        href:'',
        icon:'user',
        order:2,
        active:true,
        children:['modules children'],
        pages:[ 
            {
                pageid:1,
                moduleid:1,
                parentpageid:0,
                pagename:'Users',
                menuname:'Users',
                href:'/user/users',
                icon:'far fa home',
                order:1,
                active:true,
                children:['pages children']
            },
            {
                pageid:1,
                moduleid:1,
                parentpageid:0,
                pagename:'Organizations',
                menuname:'Organizations',
                href:'/home',
                icon:'far fa home',
                order:1,
                active:true,
                children:['pages children']
            },
            {
                pageid:1,
                moduleid:1,
                parentpageid:0,
                pagename:'Groups',
                menuname:'Groups',
                href:'/home',
                icon:'far fa home',
                order:1,
                active:true,
                children:['pages children']
            },
            {
                pageid:1,
                moduleid:1,
                parentpageid:0,
                pagename:'Roles',
                menuname:'Roles',
                href:'/home',
                icon:'far fa home',
                order:1,
                active:true,
                children:['pages children']
            },
            
        ]
    },
    {
        moduleid:3,
        modulename:'APP',
        menuname:'APP',
        description:'',
        href:'',
        icon:'',
        order:3,
        active:true,
        children:['modules children'],
        pages:['page children']
    } ,
    {
        moduleid:3,
        modulename:'COMPONENTS',
        menuname:'COMPONENTS',
        description:'',
        href:'',
        icon:'',
        order:3,
        active:true,
        children:['modules children'],
        pages:['page children']
    } ,
    {
        moduleid:3,
        modulename:'CONFIGURATION',
        menuname:'CONFIGURATION',
        description:'',
        href:'',
        icon:'',
        order:3,
        active:true,
        children:['modules children'],
        pages:['page children']
    } 
    
];