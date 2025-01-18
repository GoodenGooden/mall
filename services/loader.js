import { getItems} from "./apiMain";


export async function loader () {
    const item = await getItems()
    return item;
}

