const useLocalStorage = () =>{
    const setData = (key,data) => {
        localStorage.setItem(key,JSON.stringify(data))
    }
    const getData = (key) => {
       const stringData = localStorage.getItem(key)
       const data = JSON.parse(stringData ?? '{}')
       return data
    }
    return {setData,getData}
}
export default useLocalStorage;