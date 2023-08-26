const bundle = {
    id : "1",
    name : "project",
    isFolder : true,
    item : [
        {
            id : "2",
            name : "public",
            isFolder : true,
            item : [
                {
                    id : "3",
                    name : "index.html",
                    isFolder : false,
                    item : []
                }
            ]
        },
        {
            id : "4",
            name : "src",
            isFolder : true,
            item : [
                {
                    id : "5",
                    name : "data",
                    isFolder : true,
                    item : [
                        {
                            id : "6",
                            name : "folderdata.js",
                            isFolder : false,
                            item : []
                        }
                    ]
                },
                {
                    id : "6",
                    name : "app.js",
                    isFolder : false,
                    item : []
                }
            ]
        }
    ]
}

export default bundle;