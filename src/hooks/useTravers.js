const useTravers = () =>{
    function insertNode(tree,folderId, newfile , isFolder){
        if(tree.id==folderId && isFolder){
            tree.item.unshift({
                id : new Date().getTime(),
                name : newfile,
                isFolder,
                item : []

            })  
            return tree;
        }
        let latestNode = [];
        latestNode = tree.item.map((ob)=>{
            return insertNode(ob,folderId,item,isFolder);
        });
        return {...tree, item : latestNode};

    }
    return {insertNode};
}

export default useTravers;