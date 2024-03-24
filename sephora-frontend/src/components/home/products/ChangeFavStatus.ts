import http_common from "../../../http_common.ts";

const changeFavStatus = async (id: number, isAuthed: boolean) => {
    if (isAuthed) {
        console.info(`Changing fav status on server`); // TODO: remove this line (added for debugging purposes)
        await http_common.put(`favorites/${id}`);
        console.info((await http_common.get(`favorites/all`)).data); // TODO: remove this line (added for debugging purposes)
    } else {
        console.info(`Change fav status locally for ${id}`); // TODO: remove this line (added for debugging purposes)
        const items = JSON.parse(localStorage.favorites ?? '[]');

        if (items.includes(id)) items.splice(items.indexOf(id), 1);
        else items.push(id);

        localStorage.favorites = JSON.stringify(items);
    }
}

export default changeFavStatus;
