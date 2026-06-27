import "./ItemDetail.css"
import {Item} from"../Item/Item.jsx"
export const ItemDetail = ({item}) => {

    return(
        <Item {...item}>
            <button className="btn-primary">
                Argegar al carrito
            </button>
        </Item>
    )
}