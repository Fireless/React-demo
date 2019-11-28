const menuList =[
    {
        title:'首页',
        key:'/admin/home'
    },
    {
        title:'报表',
        key:'/admin/form',
        children:[
            {
                title:'报表1',
                key:'/admin/form/form1',
            },
            {
                title:'报表2',
                key:'/admin/form/form2',
            }
        ]   
    },
    {
        title:'日志',
        key:'/admin/log',
        children:[
            {
                title:'工作日志',
                key:'/admin/log/work',
            },
            {
                title:'巡查日志',
                key:'/admin/log/inspection',
                children:[
                    {
                        title:'水电巡查',
                        key:'/admin/log/inspection/water',
                    },
                    {
                        title:'管线巡查',
                        key:'/admin/log/inspection/pipe',
                    }
                ]
            },
            {
                title:'维修日志',
                key:'/admin/log/fix'
            }
        ]
    },
    

    
]

export default menuList