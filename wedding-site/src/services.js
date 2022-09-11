import PubSub from "pubsub-js";

const services = () => {

    const publishError = (message) => {
        PubSub.publish("error", message);
    }

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
            publishError(e)
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
            publishError(e)
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
            publishError(e)
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
            publishError(e)
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
            publishError(e)
        }
    }

    const rsvpNameLookup = async (args) => {
        try {
            const response = await fetch (`/api/rsvp?name=${args.name}`, {
                method: 'GET',
                headers: new Headers ({ "Content-Type": "application/json" })
            }).then(async res => {
                var data = res.json();
                if (res.status >= 400) throw await data;

                return data;
            });
            
            return response;
        }
        catch (e) {
            publishError(e)
        }
    }

    return {
        publishError,
        postPhoto,
        getPhotos,
        likePhoto,
        unLikePhoto,
        rsvp,
        rsvpNameLookup
    }
}

export default services