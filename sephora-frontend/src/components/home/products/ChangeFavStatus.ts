import http_common from "../../../http_common.ts";

const changeFavStatus = (id: number, isAuthed: boolean) => {
    if (isAuthed) {
        http_common.put(`favorites/${id}`)
            .catch(e => console.error(e));
    } else {
        const items = JSON.parse(localStorage.favorites ?? '[]');

        if (items.includes(id)) items.splice(items.indexOf(id), 1);
        else items.push(id);

        localStorage.favorites = JSON.stringify(items);
    }
}

export default changeFavStatus;
