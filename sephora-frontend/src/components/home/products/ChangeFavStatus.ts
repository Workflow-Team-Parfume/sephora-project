import http_common from "../../../http_common.ts";

const changeFavStatus = (id: number, isAuthed: boolean) => {
    if (isAuthed) {
        http_common.post(`favorites/${id}`)
            .catch(e => console.error(e));
    } else {
        const items = JSON.parse(localStorage.getItem('favorites') ?? '[]');
        if (items.includes(id)) {
            items.splice(items.indexOf(id), 1);
            console.info('Removed from local storage') // todo: remove log
        } else {
            items.push(id);
            console.info('Added to local storage')
        }
        localStorage.setItem('favorites', JSON.stringify(items));
        console.info(JSON.parse(localStorage.getItem('favorites') ?? '[]'));
    }
}

export default changeFavStatus;
