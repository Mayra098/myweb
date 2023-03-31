import cart from './assets/cart.svg'
const CartWidget =() =>{
    return(
        <div>
            <img style={{height:"20px", width:"20px"} } src={cart} alt="cart"/>
            0
        </div>
    )
}

export default CartWidget