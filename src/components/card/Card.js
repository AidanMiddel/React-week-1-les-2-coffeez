import "./Card.css"

const Card = (props) => {
    let cardImage = <img src={"/img/" + props.image} alt=""/>
    if(props.image === undefined){
        cardImage = <img src="/img/coffeebackground.jpg" alt="" />;
    }
    return(
        <article class="card">
            <figure class="card__figure">
                {cardImage}
            </figure>
            <section class="card__section">
                <p>{props.text || "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus molestiae consequuntur nisi! Eum incidunt ipsam consequatur ut exercitationem sequi laboriosam sunt dolores molestias vel, dolore odio dignissimos itaque corrupti eos."}</p>
            </section>
        </article>
    )
};

export default Card;

