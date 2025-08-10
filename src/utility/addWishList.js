const getWishListFrmLS = ()=>{
    const storedlist = localStorage.getItem('wish-list');
    if(storedlist){
        const storelistParse = JSON.parse(storedlist);
        console.log(storelistParse)
        return storelistParse
    }else{
        return []
    }
}

const addWishListToLS = (id)=>{
    const getListFromLs = getWishListFrmLS();
    if(getListFromLs.includes(id)){
        console.log('already exist')
    }else{
        getListFromLs.push(id)
        const setWishList = JSON.stringify(getListFromLs);
        localStorage.setItem('wish-list', setWishList)
    }
}
export { addWishListToLS, getWishListFrmLS}