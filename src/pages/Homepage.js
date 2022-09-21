import Navigation from "../components/navigation/Navigation";
import Header from "../components/header/Header";
import Section from "../components/section/Section";
import Card from "../components/card/Card";

const Homepage = () => {
    return (
        <>
            <Navigation />
            <Header
                bigTitle="coffeez"
                smallTitle="Coffee that I won't drink"
                buttonText="Order now!"
            />
            <Section sectionTitle="Juicy coffee">
                <Card image="card.jpg" text="Coffee beans made with real love. Perfectly brewed for your consumption" />
                <Card image="card2.jpg" text="We do not use plastic bags, we are of real quality where we use peppercorn bags." />
                <Card image="card3.jpg" text="Perfect for your coffee machine so you always have great tasting coffee." />
                <Card image="card4.jpg" text="Perfect for while studying or working." />
            </Section>
        </>
    )
}

export default Homepage;