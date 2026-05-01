import useFetch from "./my_custom_hook"

const Gallery = ()=>{
    const[photos, setPhoto] = useFetch("https://jsonplaceholder.typicode.com/photos")
    return(
        <div>
            <h1>All Photo</h1>
            {
                photos.map(
                    (photo)=>{
                        return(
                            <img src="photo" alt=""  key="{photo.id}"/>
                        )
                    }
                )
            }
        </div>
    )
}

export default Gallery