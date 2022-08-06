

const services = () => {


    const postPhoto = async (photo) => {
        const formData = new FormData();
        formData.append('photo', photo)
        try{
            const response = await fetch('/api/photos', {
                method: 'POST',
                body: formData
            }).then((res) => res.json());

            return response;
        }
        catch (e) {
            return { error: e }
        }
    }

    const getPhotos = async () => {
        try{
            const response = await fetch('/api/photos', {
                method: 'GET'
            }).then(res => res.json());

            return response.images;
        }
        catch (e) {
            return { error: e }
        }
    }

    const likePhoto = async (args) => {
        try {
            const response = await fetch('/api/photos/like', {
                method: 'POST',
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify(args)
            }).then(res => res.json());

            return response;
        }
        catch (e) {
            return { error: e }
        }
    }

    const unLikePhoto = async (args) => {
        try {
            const response = await fetch('/api/photos/like', {
                method: 'DELETE',
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify(args)
            }).then(res => res.json());

            return response;
        }
        catch (e) {
            return { error: e }
        }
    }

    const rsvp = async (args) => {
        try {
            const response = await fetch ('/api/rsvp/', {
                method: 'POST',
                headers: new Headers ({ "Content-Type": "application/json" }),
                body: JSON.stringify(args)
            }).then(res => res.json());

            return response;
        }
        catch (e) {
            return { error: e }
        }
    }

    return {
        postPhoto,
        getPhotos,
        likePhoto,
        unLikePhoto,
        rsvp
    }
}

export default services