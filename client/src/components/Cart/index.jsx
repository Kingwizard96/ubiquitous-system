import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';

//  stripe promise currently using test key
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    // check to see if there is a data object, if so, redirect to checkout
    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);

    // check to see if there is anything in the cart
    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        }

        if(!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart(){
        dispatch({ type: TOGGLE_CART})
    }

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
            sum += item.price * item.purchaseQuantity;
        });
        // return the total to two decimal places
        return sum.toFixed(2);  
    }

    //  when the submit checkout method is invoked loop over the items in the cart and add them to the line items array
    function submitCheckout(){
        getCheckout({
            variables: {
            products: [...state.cart],
            },
        });
    }

    if (!state.cartOpen){
        return( 
            <div className="cart-closed" onClick={toggleCart}>
                <span role='img' aria-label='trash'>🛒</span>
            </div>
        )
    }

    return (
        <div className="cart">
            <div className="close" onClick={toggleCart}>[close]</div>
            <h2>Shopping Cart</h2>
            {state.cart.lenght ? (
                <div>
                    {state.cart.map(item => (
                        <CartItem key={item._id} item={item} />
                    ))}
                    <div className="flex-row space-between">
                        <strong>Total: ${calculateTotal()}</strong>
                        {/* check to see if the user if logged in. if so render a button to check out */}
                        {Auth.loggedIn() ? (
                            <button onClick={submitCheckout}>Checkout</button>
                        ) : (
                            <span>(log in to check out)</span>
                        )}
                </div>
              </div>  
            ) : (
                <h3>
                    <span role='img' aria-label='shocked'>
                        🤨
                    </span>
                    You haven't added anything to your cart yet!
                </h3>
                )}
        </div>
    );
}

export default Cart;